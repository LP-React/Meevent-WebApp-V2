"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog"
import { KeyRound, OctagonX, Pencil } from "lucide-react"
import { UsuarioApi } from "@/types/api/users"
import { useTranslations } from "next-intl"
import { useRouter } from "@/i18n/navigations"
import { AuthService } from "@/services/auth.service"
import { DisableAccountRequest, EditPasswordRequest } from "@/types/api/auth"
import { UploadPasswordForm } from "./UploadPasswordForm"
import { toast } from "sonner"
import { ConfirmPasswordForm } from "./ConfirmPasswordForm"
import { LoginRequest } from '../../types/api/auth';
import { deleteCookie } from "cookies-next"

interface Props {
    user: UsuarioApi
}

interface confirmPassword {
    contrasenia: string
}

export const DisableAccountDialog = ({ user }: Props) => {
    const [open, setOpen] = useState(false)
    const c = useTranslations("common")
    const router = useRouter()

    const onUpload = async (payload: confirmPassword) => {
        try {
            const resp = await AuthService.login({
                correo_electronico: user.correo_electronico,
                contrasenia: payload.contrasenia
            })


            const resp2 = await AuthService.disableAccount(user.id_usuario, {
                cuenta_activa: false
            })
            setOpen(false)
            deleteCookie("userData")
            router.replace("/login")
        } catch (error) {
            console.error("Error en la contraseña", error)
        }

    }


    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="destructive" size="sm">
                    <OctagonX className="mr-2 h-4 w-4" />
                    {c("deleteAccount")}
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>{c("deleteAccountConfirmation")}</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    {c("typeYourPassword")}
                </DialogDescription>

                <ConfirmPasswordForm
                    onUpload={onUpload}
                />
            </DialogContent>
        </Dialog>
    )
}
