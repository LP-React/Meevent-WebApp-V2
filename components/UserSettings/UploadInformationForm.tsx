"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { useTranslations } from "next-intl"
import axios from "axios"
import { PatchUserRequest, UsuarioApi } from '../../types/api/users';

interface Props {
    userData: UsuarioApi
    onUpload: (form: PatchUserRequest) => void
}

export const UploadInformationForm = ({ onUpload, userData }: Props) => {

    const t = useTranslations("settingsPage")
    const c = useTranslations("common")

    const [form, setForm] = useState<PatchUserRequest>({
        nombre_completo: userData.nombre_completo,
        numero_telefono: userData.numero_telefono,
        fecha_nacimiento: "",
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target

        setForm(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (
        e: React.FormEvent
    ) => {
        e.preventDefault()
        await onUpload(form)
    }


    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
        >
            <Input
                name="nombre_completo"
                placeholder={c("name") + ' and ' + c("lastName")}
                onChange={handleChange}
                value={form.nombre_completo ?? ""}
            />

            {/* <Input
                name="correo_electronico"
                type="email"
                placeholder={c("email")}
                onChange={handleChange}
                value={form.correo_electronico ?? ""}

            /> */}

            <Input
                name="numero_telefono"
                placeholder={c("phone")}
                onChange={handleChange}
                value={form.numero_telefono ?? ""}

            />

            <Input
                name="fecha_nacimiento"
                type="date"
                onChange={handleChange}
            // value={userData.fecha_nacimiento}
            />

            <Button type="submit" className="w-full">
                {t("saveChanges")}
            </Button>
        </form>
    )
}
