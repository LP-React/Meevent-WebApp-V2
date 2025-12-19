import { Flag } from "lucide-react"
import { useTranslations } from "next-intl"


export const EventReport = () => {
    const t = useTranslations('Eventos')
  return (
    <section className="flex justify-center items-center gap-2 my-10 text-blue-500">
    <Flag className="w-4" />
    <span className="font-semibold">
      {t("Report")}
    </span>
  </section>
  )
}
