import { EventoApi } from '@/types/api/events'
import { Bike, BusFront, CarFront, Footprints } from 'lucide-react'
import { useTranslations } from 'next-intl'

interface Props {
  event: EventoApi
}

export const EventLocation = ({ event }: Props) => {

  const t = useTranslations('Eventos')
  return (

    <section className="my-8">
      <h2 className="text-2xl font-semibold mb-4">
        {t("Location")}
      </h2>

      <div className="md:flex md:gap-6">

        <div className="md:w-1/2 space-y-4">
          <div>
            <p>
              {`${event.ubicacion.nombreLocal} - ${event.ubicacion.direccionLocal}`}
            </p>
            <p className="text-muted-foreground">
              {`${event.ubicacion.nombreCiudad} - ${event.ubicacion.nombrePais}`}
            </p>
          </div>




          <div>
            <h3 className="font-semibold mb-3">
              {t("howDo")}
            </h3>

            <div className="flex justify-around xl:flex-col xl: xl:gap-2">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CarFront />
                  <p>{t('Driving')}</p>
                </div>
                <div className="flex items-center gap-2">
                  <BusFront />
                  <p>{t('Public')}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Bike />
                  <p>{t('Biking')}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Footprints />
                  <p>{t('Walking')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <iframe
          width="100%"
          height="300"
          loading="lazy"
          style={{ border: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps?q=${event.ubicacion.latitud},${event.ubicacion.longitud}&z=16&output=embed`}
          className='shadow-xl'
        />
      </div>
    </section>
  )
}
