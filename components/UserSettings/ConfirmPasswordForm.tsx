"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { useTranslations } from "next-intl"

interface confirmPassword {
    contrasenia: string
}

interface Props {
    onUpload: (form: confirmPassword) => void
}

export const ConfirmPasswordForm = ({ onUpload }: Props) => {

    const t = useTranslations("settingsPage")
    const c = useTranslations("common")

    const [form, setForm] = useState<confirmPassword>({
        contrasenia: "",
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
                name="contrasenia"
                placeholder={c("password")}
                onChange={handleChange}
                type="password"
            />


            <Button type="submit" className="w-full cursor-pointer" variant={"destructive"}>
                {c("deleteAccount")}
            </Button>
        </form>
    )
}
