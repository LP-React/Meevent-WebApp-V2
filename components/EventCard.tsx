import { Link } from "@/i18n/navigations"
import { EventoApi } from "@/types/api/events"
import Image from "next/image"
import { getSafeImageSrc } from './utils/imageHelper';

interface Props {
    event: EventoApi
}

export const EventCard = ({ event }: Props) => {

    const fecha = new Date(event.fechaInicio)

    return (
        <Link href={`/event/${event.slugEvento}`}>
            <article className="group overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-md">
                {/* Imagen */}
                <div className="relative h-40 w-80 overflow-hidden">
                    <Image
                        src={getSafeImageSrc(event.imagenPortadaUrl)}
                        alt={event.tituloEvento}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {event.eventoGratuito && (
                        <span className="absolute left-2 top-2 rounded-full bg-emerald-600 px-2 py-0.5 text-xs font-semibold text-white">
                            Gratis
                        </span>
                    )}
                </div>

                {/* Contenido */}
                <div className="space-y-2 p-4">
                    {/* Fecha */}
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        {fecha.toLocaleDateString("es-PE", {
                            weekday: "short",
                            day: "numeric",
                            month: "short",
                        })}
                    </p>

                    {/* Título */}
                    <h3 className="line-clamp-2 text-sm font-semibold leading-tight">
                        {event.tituloEvento}
                    </h3>

                    {/* Descripción corta */}
                    <p className="line-clamp-2 text-xs text-muted-foreground">
                        {event.descripcionCorta}
                    </p>

                    {/* Ubicación */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>
                            {event.eventoOnline
                                ? "Evento online"
                                : `${event.ubicacion.nombreCiudad}, ${event.ubicacion.nombrePais}`}
                        </span>

                        <span className="rounded bg-muted px-2 py-0.5 text-[10px] font-medium">
                            {event.subcategoria.nombreSubcategoria}
                        </span>
                    </div>
                </div>
            </article>
        </Link>
    )
}
