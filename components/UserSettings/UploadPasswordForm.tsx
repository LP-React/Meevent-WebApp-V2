"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { useTranslations } from "next-intl"
import { PatchUserRequest, UsuarioApi } from '../../types/api/users';
import { EditPasswordRequest } from "@/types/api/auth"

interface Props {
    onUpload: (form: EditPasswordRequest) => void
}

export const UploadPasswordForm = ({ onUpload }: Props) => {

    const t = useTranslations("settingsPage")
    const c = useTranslations("common")

    const [form, setForm] = useState<EditPasswordRequest>({
        contraseniaActual: "",
        nuevaContrasenia: "",
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
                name="contraseniaActual"
                placeholder={c("currentPassword")}
                onChange={handleChange}
                type="password"
            />

            <Input
                name="nuevaContrasenia"
                placeholder={c("newPassword")}
                onChange={handleChange}
                type="password"
            />


            <Button type="submit" className="w-full">
                {t("saveChanges")}
            </Button>
        </form>
    )
}
