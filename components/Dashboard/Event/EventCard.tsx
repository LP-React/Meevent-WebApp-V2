import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/navigations"
import { EventoApi } from "@/types/api/events"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { EventEdit } from "./EventEdit"

interface Props {
    event: EventoApi
}

export const EventCard = ({ event }: Props) => {
    return (
        <div className="rounded-md overflow-hidden w-[300px] h-[170px] relative">
            <Image
                src={event.imagenPortadaUrl}
                alt={event.tituloEvento}
                width={300} height={150}
                className="w-full h-[150px] object-cover"
            />

            <span className="">{event.tituloEvento}</span>

            <div className="absolute top-0 right-0 p-3">
                <Link href={`/event/${event.slugEvento}`} className="mr-2">
                    <Button variant={"secondary"} size={"icon-sm"}>
                        <ExternalLink />
                    </Button>
                </Link>
                <EventEdit event={event}/>
            </div>
        </div>
    )
}
