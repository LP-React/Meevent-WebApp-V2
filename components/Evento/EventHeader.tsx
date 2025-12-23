import { useTranslations } from 'next-intl'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { Calendar, MapPin } from 'lucide-react'
import { Card, CardDescription, CardHeader } from '../ui/card'
import { EventoApi } from '@/types/api/events'
import Link from 'next/link'

interface Props {
  event: EventoApi,
}



export const EventHeader = ({ event }: Props) => {
  const t = useTranslations('Eventos')
  const c = useTranslations('common')

  return (
    <section className="grid gap-8 mb-8 xl:grid-cols-[1.5fr_1fr] xl:items-center">

      <div className="grid gap-5 mt-4">
        <h1 className="text-2xl font-bold">
          {event.tituloEvento}
        </h1>

        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={event.organizador.logoUrl} />
            <AvatarFallback>{event.organizador.nombreOrganizador}</AvatarFallback>
          </Avatar>

          <p>{t("by")}{event.organizador.nombreOrganizador}</p>

          <Button variant="outline">
            {t("follow")}
          </Button>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <MapPin className="w-5" />
            <p>{`${event.ubicacion.nombreLocal} - ${event.ubicacion.direccionLocal}`}</p>
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="w-5" />
            <p>{`${c("start")}:  ${event.fechaInicio}`}</p>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5" />
            <p>{`${c("end")}:  ${event.fechaFin}`}</p>
          </div>
        </div>
      </div>

      {/* <Card className="rounded-2xl"> */}
        {/* <CardHeader className="flex flex-row items-center justify-between"> */}

          <Link href={`https://wa.me/${event.organizador.telefonoContacto}`} className='place-self-end cursor-pointer'>
            <Button className='cursor-pointer'>{t("contactTo")}</Button>
          </Link>
        {/* </CardHeader> */}
      {/* </Card> */}

    </section>
  )
}
