'use client'
import { getTranslations } from "next-intl/server"
import { CardFooter } from "../ui/card"
import { Link, usePathname } from "@/i18n/navigations"
import { Button } from "../ui/button"
import { useTranslations } from "next-intl"

export const SignUpCardFooter = () => {

    const t = useTranslations('signUp')
    const c = useTranslations('common')

    const path = usePathname()


    return (
        <CardFooter className="flex-col gap-2">
            <p className="mb-3">{t("artistOrOrganizer")}</p>
            <div className="flex items-center w-full justify-center">
                <Link href="/signup/artist">
                    <Button className="rounded-full h-12 mr-2 w-32 capitalize">
                        {c("artist")}
                    </Button>
                </Link>
                <div className="grow border-t border-gray-300 dark:border-gray-700" />
                <span className="shrink-0 mx-4 text-sm text-muted-foreground">
                    {c("or")}
                </span>
                <div className="grow border-t border-gray-300 dark:border-gray-700 mr-2" />
                <Link href="/signup/organizer">
                    <Button variant="outline" className="rounded-full h-12 w-32">
                        {c("organizer")}
                    </Button>
                </Link>
            </div>
        </CardFooter>
    )
}
