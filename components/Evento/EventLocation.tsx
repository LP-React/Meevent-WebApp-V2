import { Bike, BusFront, CarFront, Footprints } from 'lucide-react'
import { useTranslations } from 'next-intl'


export const EventLocation = () => {

    const t = useTranslations('Eventos')
    return (

    <section className="my-8">
    <h2 className="text-2xl font-semibold mb-4">
      {t("Location")}
    </h2>

    <div className="md:flex md:gap-6">

      {/* LEFT */}
      <div className="md:w-1/2 space-y-4">
        <div>
          <p className="font-semibold">
            {/* Nombre del lugar*/}
          </p>
          <p className="text-muted-foreground">
            {/* Dirreccion*/}
          </p>
          <p className="text-muted-foreground">
            {/* Distrito */}
          </p>
        </div>

        <img
          src="" /* Imagen bueno no es imagen map */
          alt="Mapa del evento"
          className="rounded-2xl w-full md:hidden"
        />

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

      {/* RIGHT */}
      <img
        src="" /* Imagen bueno no es imagen map */
        alt="Mapa del evento"
        className="hidden md:block md:w-1/2 rounded-2xl"
      />
    </div>
  </section>
  )
}
