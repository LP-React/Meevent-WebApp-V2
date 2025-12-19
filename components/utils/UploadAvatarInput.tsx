"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { useTranslations } from "next-intl"
import axios from "axios"

interface Props {
    currentImage?: string | null
    onUpload: (url: string) => void
}

export const UploadAvatarInput = ({ currentImage, onUpload }: Props) => {

    const [preview, setPreview] = useState<string | null>(currentImage ?? null)
    const [file, setFile] = useState<File | null>(null)

    const t = useTranslations("settingsPage")

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selected = e.target.files?.[0]
        if (!selected) return

        if (!selected.type.startsWith("image/")) return

        setFile(selected)
        setPreview(URL.createObjectURL(selected))
    }

    const handleUpload = async () => {

        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "rl8hm1rs");
        formData.append("folder", "user-avatars");


        try {
            const res = await axios.post(
                "https://api.cloudinary.com/v1_1/diryo1oi1/image/upload",
                formData
            );
            const imageUrl = res.data.secure_url;
            onUpload(imageUrl)
        } catch (err) {
            console.error("Error subiendo imagen a Cloudinary:", err);
        }
    }


    return (
        <div className="flex flex-col items-center gap-4">
            <Avatar className="h-24 w-24">
                <AvatarImage src={preview ?? undefined} />
                <AvatarFallback>IMG</AvatarFallback>
            </Avatar>

            <Input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
            />

            <Button
                onClick={handleUpload}
                disabled={!file}
                className="w-full"
            >
                {t("uploadImage")}
            </Button>
        </div>
    )
}
