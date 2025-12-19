import { useTranslations } from 'next-intl'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { Calendar, MapPin } from 'lucide-react'
import { Card, CardDescription, CardHeader } from '../ui/card'

interface Props {
  eventName: string,
}

export const EventHeader = ({ eventName }: Props) => {
  const t = useTranslations('Eventos')
  return (
    <section className="grid gap-6 mb-8 xl:grid-cols-2 xl:items-center">

      {/* LEFT */}
      <div className="grid gap-5">
        <h1 className="text-2xl font-bold">
          {eventName}
        </h1>

        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="" /> {/* IMAGEN ORGANIZADOR */}
            <AvatarFallback>EV</AvatarFallback>
          </Avatar>

          <p>{t("by")} {/* Organizador */}</p>

          <Button variant="outline">
            {t("follow")}
          </Button>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <MapPin className="w-5" />
            <p>{/* Dirección del evento */}</p>
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="w-5" />
            <p>{/* HORA Y FECHA NOSE XD */}</p>
          </div>
        </div>
      </div>

      {/* RIGHT – TICKET DESKTOP */}
      <Card className="hidden xl:block rounded-2xl">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <p className="font-semibold">{/* Precio */}</p>
            <CardDescription>{/* Hora y fecha del evento */}</CardDescription>
          </div>
          <Button>{t("Get tickets")}</Button>
        </CardHeader>
      </Card>

    </section>
  )
}
