import { useTranslations } from 'next-intl'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { EventoApi } from '@/types/api/events'

interface Props {
  event: EventoApi
}

export const EventOrganizer = ({ event }: Props) => {
  const t = useTranslations('Eventos')

  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold mb-4">
        {t("Organized")}
      </h2>

      <Card className="bg-muted border-none">
        <div className="grid gap-6 md:grid-cols-3 md:items-center">

          <div className="flex justify-center items-center gap-2">
            <Avatar className="w-10 h-10">
              <AvatarImage src={event.organizador.logoUrl} />
              <AvatarFallback>{event.organizador.nombreOrganizador}</AvatarFallback>
            </Avatar>
            <h3 className='text-xl'>{event.organizador.nombreOrganizador}</h3>
          </div>

          <div className="text-center md:text-left">

            <div className="flex justify-around lg:mt-0 xl:mt-0 sm:mt-0 mt-4">
              <div className='flex flex-col items-center justify-center'>
                <CardDescription>{t("Followers")}</CardDescription>
                <p className="font-semibold mt-2">{event.organizador.idPerfilOrganizador}</p>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <CardDescription>{t("Events")}</CardDescription>
                <p className="font-semibold mt-2">{event.organizador.idPerfilOrganizador}</p>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <CardDescription>{t("Hosting")}</CardDescription>
                <p className="font-semibold mt-2">{event.organizador.idPerfilOrganizador}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-3">
            <Button variant="outline">
              {t("Contact")}
            </Button>
            <Button>
              {t("follow")}
            </Button>
          </div>

        </div>
      </Card>
    </section>
  )
}
