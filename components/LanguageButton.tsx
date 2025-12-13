"use client"
import { Link, usePathname } from "@/i18n/navigations"
import { Button } from "./ui/button"
import { Languages } from "lucide-react"
import { useLocale, useTranslations } from "next-intl";


export const LanguageButton = () => {

    const pathname = usePathname();
    const currectLocale = useLocale()
    const t = useTranslations('common')

    return (
        <Link href={pathname} locale={currectLocale == "es" ? "en" : "es"}>
            <Button variant="outline" size="sm" className="cursor-pointer">
                <Languages />
                {t("language")}
            </Button>
        </Link>
    )
}
