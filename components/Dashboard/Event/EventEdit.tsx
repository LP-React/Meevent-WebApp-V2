"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { uploadToCloudinary } from "@/components/utils/uploadToCloudinary"
import { EventoApi, PostEventRequest, PutEventRequest } from "@/types/api/events"
import { Edit, PlusIcon } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import { CategoryComboBox } from "./CategoryComboBox"
import { CategoryService } from "@/services/category.service"
import { CategoriasEvento } from "@/types/api/categories"
import { SubCategoryComboBox } from "./SubCategoryCombobox"
import { SubcategoriaEvento } from "@/types/api/subcategories"
import { SubCategoryService } from "@/services/subcategories.service"
import { CitiesService } from "@/services/cities.service"
import { Ciudad } from "@/types/api/city"
import { Local } from "@/types/api/locales"
import { CityComboBox } from "./CityCombobox"
import { LocalesService } from "@/services/locales.service"
import { LocalesComboBox } from "./LocalesCombobox"
import { EventService } from "@/services/event.service"

interface Props {
    event: EventoApi
}

export function EventEdit({ event }: Props) {

    const [form, setForm] = useState<PostEventRequest>({
        tituloEvento: event.tituloEvento,
        descripcionEvento: event.descripcionEvento,
        descripcionCorta: event.descripcionCorta,
        fechaInicio: event.fechaInicio,
        fechaFin: event.fechaFin,
        zonaHoraria: event.zonaHoraria,
        capacidadEvento: event.capacidadEvento,
        eventoGratuito: event.eventoGratuito,
        eventoOnline: event.eventoOnline,
        estadoEvento: event.estadoEvento,
        imagenPortadaUrl: event.imagenPortadaUrl,
        perfilOrganizadorId: event.organizador.idPerfilOrganizador,
        subcategoriaEventoId: event.subcategoria.idSubcategoriaEvento,
        localId: event.ubicacion.idLocal,
    });

    const resetForm = () => {
        setForm({
            tituloEvento: event.tituloEvento,
            descripcionEvento: event.descripcionEvento,
            descripcionCorta: event.descripcionCorta,
            fechaInicio: event.fechaInicio,
            fechaFin: event.fechaFin,
            zonaHoraria: event.zonaHoraria,
            capacidadEvento: event.capacidadEvento,
            eventoGratuito: event.eventoGratuito,
            eventoOnline: event.eventoOnline,
            estadoEvento: event.estadoEvento,
            imagenPortadaUrl: event.imagenPortadaUrl,
            perfilOrganizadorId: event.organizador.idPerfilOrganizador,
            subcategoriaEventoId: event.subcategoria.idSubcategoriaEvento,
            localId: event.ubicacion.idLocal,
        })

        setImageFile(null)
        setImagePreview(event.imagenPortadaUrl)
    }

    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(form.imagenPortadaUrl);
    const [publishing, setPublishing] = useState(false);
    const [open, setOpen] = useState(false)
    const [categories, setCategories] = useState<CategoriasEvento[]>([])
    const [subcategories, setSubcategories] = useState<SubcategoriaEvento[]>([])
    const [cities, setCities] = useState<Ciudad[]>([])
    const [locales, setLocales] = useState<Local[]>([])
    const [loading, setLoading] = useState(false)

    const t = useTranslations("formPostEvent")

    const handleChange = (
        e: any
    ) => {
        const { name, value, type, checked, files } = e.target;

        if (type === "file" && files && files[0]) {
            const file = files[0];

            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));

            return;
        }

        setForm(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleEdit = async () => {


        if (publishing) return;

        setPublishing(true);

        try {

            if (imageFile) {
                const imageUrl = await uploadToCloudinary(imageFile, "events-banners");

                const payload: PostEventRequest = {
                    ...form,
                    imagenPortadaUrl: imageUrl,
                    estadoEvento: "publicado",
                };
                const ok = await EventService.putEvent(event.idEvento, payload);

                if (ok) {
                    toast.success("Evento Editado")
                    resetForm()
                    setOpen(false)
                }
            } else {
                const payload: PostEventRequest = {
                    ...form,
                    estadoEvento: "publicado",
                };

                const ok = await EventService.putEvent(event.idEvento, payload);

                if (ok) {
                    toast.success("Evento Editado")
                    resetForm()
                    setOpen(false)
                }
            }


        } catch (error) {
            toast.error("Error publicando el evento");
        } finally {
            setPublishing(false);

        }
    };

    const handleSaveDraft = async () => {
        const payload: PostEventRequest = {
            ...form,
            estadoEvento: "borrador",
        };

        const ok = await EventService.putEvent(event.idEvento, payload);

        if (ok) {
            toast.success("Borrador guardado")
            resetForm()
            setOpen(false)
        }
    };

    useEffect(() => {
        return () => {
            if (imagePreview) {
                URL.revokeObjectURL(imagePreview);
            }
        };
    }, [imagePreview]);


    useEffect(() => {
        const fetchCategories = async () => {
            const resp = await CategoryService.getAll()
            setCategories(resp.categoriasEvento)
        }

        const fetchCities = async () => {
            const resp = await CitiesService.getAll()
            setCities(resp.ciudades)
        }
        fetchCategories()
        fetchCities()
    }, [])


    const fetchSubcategories = async (categoryId: number) => {
        const resp = await SubCategoryService.getAll()

        const filteredSubcategories = resp.subcategoriaEventos.filter(
            (sub) =>
                sub.categoriaEventoId === categoryId && sub.estado === true
        )

        setSubcategories(filteredSubcategories)
    }

    const fetchLocales = async (localId: number) => {
        const resp = await LocalesService.getAll({
            idCiudad: localId
        })

        setLocales(resp.locales)
    }


    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant={"default"} size={"icon-sm"}>
                    <Edit />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[1380px]">
                <DialogTitle>{t("createEvent")}</DialogTitle>
                <form className="grid">

                    <div className="grid grid-cols-12 gap-4 my-6 grid-rows-1">

                        <div className="col-span-12 lg:col-span-7 grid gap-2">
                            <div className="grid gap-2">
                                <Label htmlFor="tituloEvento">{t("nameEvent")}</Label>
                                <Input
                                    id="tituloEvento"
                                    name="tituloEvento"
                                    value={form.tituloEvento}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="descripcionCorta">{t("shortDescription")}</Label>
                                <Textarea
                                    id="descripcionCorta"
                                    name="descripcionCorta"
                                    value={form.descripcionCorta}
                                    onChange={handleChange}
                                    rows={2}
                                    className="resize-none"
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="descripcionEvento">{t("description")}</Label>
                                <Textarea
                                    id="descripcionEvento"
                                    name="descripcionEvento"
                                    value={form.descripcionEvento}
                                    onChange={handleChange}
                                    rows={5}
                                    className="resize-none"
                                />
                            </div>
                        </div>


                        <div className="col-span-12 lg:col-span-5 flex flex-col gap-3">
                            <Label>{t("bannerImage")}</Label>

                            <Input
                                id="imagenPortadaUrl"
                                type="file"
                                accept="image/*"
                                onChange={handleChange}
                            />

                            {imagePreview ? (
                                <Image
                                    src={imagePreview}
                                    alt="Preview"
                                    width={800}
                                    height={400}
                                    className="rounded-md object-cover h-55 w-full"
                                />
                            ) : (
                                <div className=" h-55 w-full flex items-center justify-center border rounded-md text-muted-foreground">
                                    {t("noImageSelected")}
                                </div>
                            )}
                        </div>


                        <div className="grid gap-2 col-span-3">
                            <Label htmlFor="fechaInicio">{t("startDate")}</Label>
                            <Input
                                id="fechaInicio"
                                name="fechaInicio"
                                type="datetime-local"
                                value={form.fechaInicio}
                                onChange={handleChange}
                            />
                        </div>




                        <div className="col-span-12 lg:col-span-3 grid gap-2">
                            <Label>{t("category")}</Label>
                            <CategoryComboBox categories={categories} onSelectCategory={(id) =>
                                fetchSubcategories(id)
                            }
                            />
                        </div>




                        <div className="col-span-12 lg:col-span-1 grid gap-2">
                            <Label htmlFor="capacidadEvento">{t("capacity")}</Label>
                            <Input
                                id="capacidadEvento"
                                name="capacidadEvento"
                                type="number"
                                value={form.capacidadEvento}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-span-12 lg:col-span-2 grid gap-2">
                            <Label htmlFor="localId">{t("city")}</Label>
                            <CityComboBox cities={cities} onSelectCity={(id) =>
                                fetchLocales(id)
                            } />
                        </div>

                        <div className="col-span-12 lg:col-span-3 grid gap-2">
                            <Label htmlFor="localId">{t("venue")}</Label>
                            <LocalesComboBox locales={locales} onSelectLocal={(id) =>
                                setForm(prev => ({
                                    ...prev,
                                    localId: id,
                                }))
                            } />
                        </div>

                        <div className="grid gap-2 col-span-3">
                            <Label htmlFor="fechaFin">{t("endDate")}</Label>
                            <Input
                                id="fechaFin"
                                name="fechaFin"
                                type="datetime-local"
                                value={form.fechaFin}
                                onChange={handleChange}
                            />
                        </div>


                        <div className="col-span-12 lg:col-span-3 grid gap-2">
                            <Label htmlFor="capacidadEvento">{t("subcategory")}</Label>
                            <SubCategoryComboBox subcategories={subcategories} onSelectSubCategory={(id) =>
                                setForm(prev => ({
                                    ...prev,
                                    subcategoriaEventoId: id,
                                }))
                            } />
                        </div>


                        {/* CHECKBOXES */}
                        <div className="flex items-center gap-2 col-span-1">
                            <Checkbox
                                id="eventoGratuito"
                                checked={form.eventoGratuito}
                                onCheckedChange={(checked) =>
                                    setForm(prev => ({
                                        ...prev,
                                        eventoGratuito: Boolean(checked),
                                    }))
                                }
                            />
                            <Label htmlFor="eventoGratuito" className="cursor-pointer">
                                {t("free")}
                            </Label>
                        </div>
                        <div className="flex items-center gap-2 col-span-2">
                            <Checkbox
                                id="eventoOnline"
                                checked={form.eventoOnline}
                                onCheckedChange={(checked) =>
                                    setForm(prev => ({
                                        ...prev,
                                        eventoOnline: Boolean(checked),
                                    }))
                                }
                            />
                            <Label htmlFor="eventoOnline" className="cursor-pointer">
                                {t("online")}
                            </Label>
                        </div>

                    </div>


                    <DialogFooter className="">
                        <Button
                            type="button"
                            variant="outline"
                            disabled={loading}
                            onClick={() => {
                                resetForm()
                                setOpen(false)
                            }}
                        >
                            {t("cancel")}
                        </Button>
                        <Button
                            type="button"
                            variant="secondary"
                            disabled={loading}
                            onClick={handleSaveDraft}>
                            {loading ? t("saving") : t("saveAsDraft")}
                        </Button>
                        <Button
                            type="button"
                            disabled={loading}
                            onClick={handleEdit}
                        >
                            {publishing ? t("publishing") : t("publish")}
                        </Button>
                    </DialogFooter>
                </form>


            </DialogContent>
        </Dialog >
    )
}
