import { useTranslations } from 'next-intl'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'

export const EventOrganizer = () => {
  const t = useTranslations('Eventos')

  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold mb-4">
        {t("Organized")}
      </h2>

      <Card className="bg-muted border-none">
        <CardHeader className="grid gap-6 md:grid-cols-3 md:items-center">

          <div className="flex justify-center">
            <Avatar className="w-20 h-20">
              <AvatarImage src="" /> {/* IMAGEN DEL ORGANIZADOR */}
              <AvatarFallback>ORG</AvatarFallback>
            </Avatar>
          </div>

          <div className="text-center md:text-left">
            <CardTitle>{/* NOMBRE DE ORGANIZADOR */}</CardTitle>

            <div className="flex justify-around mt-4">
              <div>
                <CardDescription>{t("Followers")}</CardDescription>
                <p className="font-semibold">{/* NUMERO DE SEGUIDORES */}</p>
              </div>
              <div>
                <CardDescription>{t("Events")}</CardDescription>
                <p className="font-semibold">{/* NUMERO TOTAL DE LOS EVENTOS */}</p>
              </div>
              <div>
                <CardDescription>{t("Hosting")}</CardDescription>
                <p className="font-semibold">{/* HOSTING */}</p>
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

        </CardHeader>
      </Card>
    </section>
  )
}
