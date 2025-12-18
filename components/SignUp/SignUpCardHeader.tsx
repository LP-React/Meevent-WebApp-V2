import { Link } from "@/i18n/navigations"
import { CardHeader } from "../ui/card"
import { ArrowLeft } from "lucide-react"
import { cookies } from "next/headers"
import { getTranslations } from "next-intl/server"
import { ThemeButton } from "../utils/ThemeButton"
import { LanguageButton } from "../utils/LanguageButton"

export const SignUpCardHeader = async () => {

    const cookieStore = await cookies();
    const themeCookie = cookieStore.get("theme")?.value || "system";

    const c = await getTranslations('common')

    return (
        <CardHeader className="flex justify-between items-center">
            <Link href="/" className="xl:hidden lg:hidden flex">
                <ArrowLeft className="mr-1" />
                {c("backTo")}
            </Link>
            <div className="flex justify-between gap-2 md:gap-2 sm:gap-2 lg:w-full xl:w-full">
                <ThemeButton themeCookie={themeCookie} variant={"outline"} size={"icon"}/>
                <LanguageButton />
            </div>
        </CardHeader>
    )
}
