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
import { Pencil } from "lucide-react"
import { PatchUserRequest, UsuarioApi } from "@/types/api/users"
import { useTranslations } from "next-intl"
import { UsersService } from "@/services/users.service"
import { useRouter } from "@/i18n/navigations"
import { setCookie } from "cookies-next"
import { UploadInformationForm } from "./UploadInformationForm"

interface Props {
    user: UsuarioApi
}

export const EditInformationDialog = ({ user }: Props) => {
    const [open, setOpen] = useState(false)
    const t = useTranslations("settingsPage")
    const c = useTranslations("common")

    const router = useRouter()

    const onUpload = async (payload: PatchUserRequest) => {
        try {
            const resp = await UsersService.editUser(user.id_usuario, payload)
            setCookie("userData", resp.usuarioActualizado)

            setOpen(false)
            router.refresh()
        } catch (error) {
            console.error("Error actualizando usuario", error)
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                    <Pencil className="mr-2 h-4 w-4" />
                    {c("edit")}
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>{t("editPicture")}</DialogTitle>
                </DialogHeader>

                <UploadInformationForm
                    userData={user}
                    onUpload={onUpload}
                />
            </DialogContent>
        </Dialog>
    )
}
