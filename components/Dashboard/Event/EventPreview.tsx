import { PostEventRequest } from "@/types/api/events"
import { useTranslations } from "next-intl"
import Image from "next/image"

interface Props {
    eventData: PostEventRequest,
    imagePreview: any
}

export const EventPreview = ({ eventData, imagePreview }: Props) => {

    const t = useTranslations("formPostEvent")

    return (
        <div className=" w-full">
            {imagePreview ? (
                <Image
                    src={imagePreview}
                    alt={eventData.tituloEvento || "Preview"}
                    width={600}
                    height={300}
                    className="rounded-md object-cover"
                />
            ) : (
                <div className="w-[600px] h-[300px] flex items-center justify-center border rounded-md text-muted-foreground">
                    {t("noImageSelected")}
                </div>
            )}

            <span>
                {eventData.tituloEvento}
            </span>
        </div>
    )
}
