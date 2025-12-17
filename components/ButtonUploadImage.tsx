"use client"
import { CldUploadButton } from "next-cloudinary";

export const ButtonUploadImage = () => {
    return (
        <div>
            <CldUploadButton
                uploadPreset="rl8hm1rs"
                onSuccess={(result) => {
                    console.log("Respuesta cloudinary:" , result);
                    
                }}
            />
        </div>
    )
}
