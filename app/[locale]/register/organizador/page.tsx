"use client"
import { FormOrgMulti } from "@/components/FormOrgMulti"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Link } from "@/i18n/navigations"
import { ArrowLeft, Chromium, Eye, EyeOff, Languages, Moon, Sun } from "lucide-react"
import { useTranslations } from "next-intl"
import { useState } from "react"

export default function page() {
    const [dark, setDark] = useState(false)
    const [lang, setLang] = useState("Español")

    const t = useTranslations('organizador')
    return (
        <div>
            <div className="bg-[url('/bg2.jpg')] bg-black/55 bg-blend-multiply grid  grid-cols-1 sm:grid-cols-1 sm:p-0 gap-3 bg-cover h-dvh md:p-4 lg:grid-cols-[2fr_1.5fr] xl:grid-cols-[1.5fr_2fr]">


                <Card className="flex rounded-none justify-center p-1 sm:p-5 sm:rounded-none md:rounded-xl md:p-26 lg:p-1 xl:p-10">
                    <CardHeader className="flex justify-start items-center">
                        <Link href="./">
                            <CardAction className="flex ">
                                <ArrowLeft className="mr-1" />{t("BackTo")}
                            </CardAction>
                        </Link>
                    </CardHeader>
                    <CardHeader className="gap-0">
                        <CardTitle className="flex justify-between items-center">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setDark(!dark)}
                            >
                                {dark ? <Moon /> : <Sun />}
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => setLang(lang === "Español" ? "English" : "Español")} className="flex items-center gap-2">
                                <Languages />
                                <span>{lang}</span>
                            </Button>
                        </CardTitle>
                    </CardHeader>
                    <CardHeader className="mb-4">
                        <CardTitle className="mb-2 sm:text-5xl text-4xl md:text-4xl md:text-center">{t("Welcome")}</CardTitle>
                        <CardDescription className="md:text-center">
                            {t("Log")}
                        </CardDescription>

                    </CardHeader>
                    <CardContent>
                        <FormOrgMulti />
                    </CardContent>
                    <CardFooter className="flex-col gap-0">
                        <div className="mb-3">
                            <p>{t("DontHave")}</p>
                        </div>
                        <div className="flex items-center w-full justify-center">
                            <Button type="submit" className="rounded-full h-12 mr-2 w-32">
                                {t("artista")}
                            </Button>
                            <div className="grow border-t border-gray-300 dark:border-gray-700"></div>
                            <span className="shrink-0 mx-4 text-sm text-muted-foreground">
                                {t("OrConnect")}
                            </span>
                            <div className="grow border-t border-gray-300 dark:border-gray-700 mr-2"></div>
                            <Button variant="outline" type="submit" className="rounded-full h-12 w-32">
                                {t("organizador")}
                            </Button>
                        </div>

                    </CardFooter>
                </Card>

                <Card className="hidden bg-transparent h-full flex-col justify-between p-10 border-none sm:hidden lg:flex lg:p-10 xl:p-10">
                    <CardHeader className="flex justify-between items-center">
                        <CardTitle className="text-white text-3xl">Meevent</CardTitle>
                        <Link href="./">
                            <CardAction className="flex text-white ">
                                <ArrowLeft className="mr-1" />{t("BackTo")}
                            </CardAction>
                        </Link>
                    </CardHeader>

                    <div className="p-5">
                        <CardTitle className="text-white text-5xl mb-5">
                            Edit Smarter. Export Faster.
                            <p>Create Anywhere.</p>
                        </CardTitle>

                        <CardDescription className="text-white opacity-80">
                            From quick social media clips to full-length videos our powerful editor
                            <p>lets you work across devices.</p>
                        </CardDescription>

                    </div>
                </Card>

            </div>
        </div>
    )
}
