"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog"
import { KeyRound, Pencil } from "lucide-react"
import { UsuarioApi } from "@/types/api/users"
import { useTranslations } from "next-intl"
import { useRouter } from "@/i18n/navigations"
import { AuthService } from "@/services/auth.service"
import { EditPasswordRequest } from "@/types/api/auth"
import { UploadPasswordForm } from "./UploadPasswordForm"
import { toast } from "sonner"

interface Props {
    user: UsuarioApi
}

export const EditPasswordDialog = ({ user }: Props) => {
    const [open, setOpen] = useState(false)
    const c = useTranslations("common")
    const router = useRouter()

    const onUpload = async (payload: EditPasswordRequest) => {

        if (payload.contraseniaActual.length <= 3) {
            toast.error("Debes proporcionar la contraseña actual")
            return
        }

        if (payload.nuevaContrasenia.length <= 3) {
            toast.error("Debes proporcionar la nueva contraseña")
            return
        }

        if (payload.nuevaContrasenia == payload.contraseniaActual) {
            toast.error("La nueva contraseña no puede ser IGUAL a la actual")
            return
        }


        try {
            const resp = await AuthService.updatePassword(user.id_usuario, payload)
            console.log(resp);
            setOpen(false)
            router.refresh()
        } catch (error) {
            console.error("Error actualizando contraseña", error)
            console.log(payload);
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                    <KeyRound className="mr-2 h-4 w-4" />
                    {c("changePassword")}
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>{c("changePassword")}</DialogTitle>
                </DialogHeader>

                <UploadPasswordForm
                    onUpload={onUpload}
                />
            </DialogContent>
        </Dialog>
    )
}
