"use client"

import { Button } from "@/components/ui/button"
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
import { http } from "@/lib/http"
import { PostEventRequest } from "@/types/api/events"
import { PlusIcon } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

interface Props {
    onCreate: (payload: PostEventRequest) => Promise<boolean>;
    loading: boolean;
}

const fields = [
    { label: "Título", name: "tituloEvento", type: "text" },
    { label: "Descripción", name: "descripcionEvento", type: "text" },
    { label: "Slug", name: "slugEvento", type: "text" },
    { label: "Descripción corta", name: "descripcionCorta", type: "text" },
    { label: "Fecha inicio", name: "fechaInicio", type: "datetime-local" },
    { label: "Fecha fin", name: "fechaFin", type: "datetime-local" },
    { label: "Capacidad", name: "capacidadEvento", type: "number" },
    { label: "Subcategoría ID", name: "subcategoriaEventoId", type: "number" },
    { label: "Local ID", name: "localId", type: "number" },
    { label: "Organizador ID", name: "perfilOrganizadorId", type: "number" },
] as const;


export function EventCreate({ onCreate, loading }: Props) {

    const [form, setForm] = useState<PostEventRequest>({
        tituloEvento: "",
        descripcionEvento: "",
        slugEvento: "",
        descripcionCorta: "",
        fechaInicio: "",
        fechaFin: "",
        eventoGratuito: false,
        eventoOnline: false,
        capacidadEvento: 0,
        subcategoriaEventoId: 0,
        localId: 0,
        perfilOrganizadorId: 0,
    });


    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value, type, checked } = e.target;

        setForm(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const ok = await onCreate(form);

        if (ok) {
            // aquí luego puedes cerrar el dialog o limpiar el form
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" aria-label="Submit" disabled={false}>
                    <span>New</span>
                    <PlusIcon />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[1225px]">
                <DialogTitle>Create Event</DialogTitle>
                <form onSubmit={handleSubmit}>

                    <div className="grid grid-cols-2 gap-6 my-6">
                        {fields.map(({ label, name, type }) => (
                            <div className="grid gap-3" key={name}>
                                <Label htmlFor={name}>{label}</Label>
                                <Input
                                    id={name}
                                    name={name}
                                    type={type}
                                    value={form[name]}
                                    onChange={handleChange}
                                />
                            </div>
                        ))}
                        <div className="grid grid-cols-2 gap-6 my-6">
                            {/* Evento gratuito */}
                            <div className="flex items-center gap-3">
                                <Input
                                    id="eventoGratuito"
                                    name="eventoGratuito"
                                    type="checkbox"
                                    checked={form.eventoGratuito}
                                    onChange={handleChange}
                                    className="w-4 h-4"
                                />
                                <Label htmlFor="eventoGratuito">Evento gratuito</Label>
                            </div>

                            {/* Evento online */}
                            <div className="flex items-center gap-3">
                                <Input
                                    id="eventoOnline"
                                    name="eventoOnline"
                                    type="checkbox"
                                    checked={form.eventoOnline}
                                    onChange={handleChange}
                                    className="w-4 h-4"
                                />
                                <Label htmlFor="eventoOnline">Evento online</Label>
                            </div>
                        </div>

                    </div>


                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline" disabled={loading}>
                                Cancel
                            </Button>
                        </DialogClose>
                        <Button type="submit" disabled={loading}>
                            {loading ? "Saving..." : "Save changes"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog >
    )
}
