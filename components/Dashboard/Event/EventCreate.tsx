"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { uploadToCloudinary } from "@/components/utils/uploadToCloudinary"
import { PostEventRequest } from "@/types/api/events"
import { PlusIcon } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useEffect, useState } from "react"
import { toast } from "sonner"

interface Props {
    onCreate: (payload: PostEventRequest) => Promise<boolean>;
    loading: boolean;
    organizerId: number;
}



export function EventCreate({ onCreate, loading, organizerId }: Props) {

    const [form, setForm] = useState<PostEventRequest>({
        tituloEvento: "",
        descripcionEvento: "",
        descripcionCorta: "",
        fechaInicio: "",
        fechaFin: "",
        zonaHoraria: "UTC-5",
        capacidadEvento: 0,
        eventoGratuito: false,
        eventoOnline: false,
        estadoEvento: "",
        imagenPortadaUrl: "",
        perfilOrganizadorId: organizerId,
        subcategoriaEventoId: 0,
        localId: 0,
    });

    const resetForm = () => {
        setForm({
            tituloEvento: "",
            descripcionEvento: "",
            descripcionCorta: "",
            fechaInicio: "",
            fechaFin: "",
            zonaHoraria: "UTC-5",
            capacidadEvento: 0,
            eventoGratuito: false,
            eventoOnline: false,
            estadoEvento: "",
            imagenPortadaUrl: "",
            perfilOrganizadorId: organizerId,
            subcategoriaEventoId: 0,
            localId: 0,
        })

        setImageFile(null)
        setImagePreview(null)
    }

    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [publishing, setPublishing] = useState(false);

    const t = useTranslations("formPostEvent")

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
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


    const handlePublish = async () => {
        if (!imageFile) {
            toast.error("Debes subir una imagen");
            return;
        }

        if (publishing) return;

        setPublishing(true);

        try {
            const imageUrl = await uploadToCloudinary(imageFile, "events-banners");

            const payload: PostEventRequest = {
                ...form,
                imagenPortadaUrl: imageUrl,
                estadoEvento: "publicado",
            };

            const ok = await onCreate(payload);

            if (ok) {
                toast.success("Evento publicado")
                resetForm()
                setOpen(false) // 👈 CIERRA EL DIALOG
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

        const ok = await onCreate(payload);

        if (ok) {
            toast.success("Borrador guardado")
            resetForm()
            setOpen(false) // 👈
        }
    };


    useEffect(() => {
        return () => {
            if (imagePreview) {
                URL.revokeObjectURL(imagePreview);
            }
        };
    }, [imagePreview]);

    const [open, setOpen] = useState(false)


    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline">
                    <span>New</span>
                    <PlusIcon />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[1250px]">
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
                                    width={600}
                                    height={300}
                                    className="rounded-md object-cover aspect-video"
                                />
                            ) : (
                                <div className="aspect-video flex items-center justify-center border rounded-md text-muted-foreground">
                                    {t("noImageSelected")}
                                </div>
                            )}
                        </div>


                        <div className="col-span-12 lg:col-span-6 grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="fechaInicio">{t("startDate")}</Label>
                                <Input
                                    id="fechaInicio"
                                    name="fechaInicio"
                                    type="datetime-local"
                                    value={form.fechaInicio}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="fechaFin">{t("endDate")}</Label>
                                <Input
                                    id="fechaFin"
                                    name="fechaFin"
                                    type="datetime-local"
                                    value={form.fechaFin}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>



                        <div className="col-span-12 lg:col-span-3 grid gap-2">
                            <Label htmlFor="capacidadEvento">{t("capacity")}</Label>
                            <Input
                                id="capacidadEvento"
                                name="capacidadEvento"
                                type="number"
                                value={form.capacidadEvento}
                                onChange={handleChange}
                            />
                        </div>



                        <div className="col-span-12 lg:col-span-3 grid gap-2">
                            <Label htmlFor="subcategoriaEventoId">{t("subcategory")}</Label>
                            <Input
                                id="subcategoriaEventoId"
                                name="subcategoriaEventoId"
                                type="number"
                                value={form.subcategoriaEventoId}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-span-12 flex gap-8 mt-4">
                            <div className="col-span-12 lg:col-span-3 grid gap-2">
                                <Label htmlFor="localId">{t("venue")}</Label>
                                <Input
                                    id="localId"
                                    name="localId"
                                    type="number"
                                    value={form.localId}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex items-center gap-2">
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
                            <div className="flex items-center gap-2">
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

                    </div>


                    <DialogFooter className="">
                        <Button
                            type="button"   // 👈 CLAVE
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
                            onClick={handlePublish}
                        >
                            {publishing ? t("publishing") : t("publish")}
                        </Button>
                    </DialogFooter>
                </form>


            </DialogContent>
        </Dialog >
    )
}
