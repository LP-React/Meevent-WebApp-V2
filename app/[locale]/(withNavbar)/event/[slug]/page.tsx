import { EventBanner } from "@/components/Evento/EventBanner";
import { EventButtonMobile } from "@/components/Evento/EventButtonMobile";
import { EventGood } from "@/components/Evento/EventGood";
import { EventHeader } from "@/components/Evento/EventHeader";
import { EventLocation } from "@/components/Evento/EventLocation";
import { EventOrganizer } from "@/components/Evento/EventOrganizer";
import { EventOverview } from "@/components/Evento/EventOverview";
import { EventReport } from "@/components/Evento/EventReport";
import { FieldSeparator } from "@/components/ui/field";
import { EventService } from "@/services/event.service";
import { Metadata } from "next";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    try {
        const { slug } = await params
        const { evento } = await EventService.getBySlug(slug)

        return {
            title: `Meevent - ${evento.tituloEvento}`,
            description: `Information of ${evento.descripcionCorta}`
        }
    } catch (error) {
        return {
            title: `Meevent - Event not found`,
            description: ``
        }
    }
}

export default async function EventPage({ params }: Props) {

    const { slug } = await params;
    const { evento } = await EventService.getBySlug(slug)
    console.log(evento);

    return (
        <div className=" w-[65%] m-auto min-h-dvh pb-28 mt-20">

            <EventBanner urlImage={evento.imagenPortadaUrl || ''} />
            <div className="px-4">

                <EventHeader event={evento} />

                <FieldSeparator />

                <EventOverview infoEvent={evento.descripcionEvento} />

                <FieldSeparator />

                <EventGood />

                <FieldSeparator />

                <EventLocation event={evento} />

                <FieldSeparator />

                <EventOrganizer event={evento} />
                <EventReport />

                <FieldSeparator />

                <EventButtonMobile />
            </div>
        </div>
    );
}