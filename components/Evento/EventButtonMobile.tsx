import { useTranslations } from "next-intl"
import { Button } from "../ui/button"
import { Card, CardDescription, CardHeader } from "../ui/card"

export const EventButtonMobile = () => {
  const t = useTranslations('Eventos')
  return (
    <Card className="fixed bottom-0 left-0 right-0 z-50 rounded-none border-t xl:hidden">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <p className="font-semibold">{/* Precio del evento */}</p>
          <CardDescription>{/* Hora y fecha */}</CardDescription>
        </div>
        <Button>{t("Get tickets")}</Button>
      </CardHeader>
    </Card>
  )
}
