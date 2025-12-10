"use client"

import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { useLocale, useTranslations } from "next-intl";
import { useIconTheme } from "./hooks/useIconTheme";
import { useState } from "react";
import { ArrowLeft, Eye, EyeOff, Languages, Moon, Sun } from "lucide-react";
import { Input } from "./ui/input";
import { SignIn } from "./SignInButton";
import { Link, usePathname } from "@/i18n/navigations";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";

interface Props {
    themeCookie: string
}

export const LoginForm = ({ themeCookie }: Props) => {

    const pathname = usePathname();
    const currectLocale = useLocale()
    const { iconTheme, toggleTheme } = useIconTheme(themeCookie)
    const [showPassword, setShowPassword] = useState(false)

    const t = useTranslations('Login')

    return (
        <Card className="flex rounded-none justify-center p-1 sm:p-5 sm:rounded-none md:rounded-xl md:p-26 lg:p-1 xl:p-10">

            <CardHeader className="flex justify-between items-center mb-4">

                <div className="justify-start xl:hidden lg:hidden">
                    <Link href="/">
                        <CardAction className="flex">
                            <ArrowLeft className="mr-1" />{t("BackTo")}
                        </CardAction>
                    </Link>
                </div>

                <div className="flex justify-between gap-2 md:gap-2 sm:gap-2 lg:w-full xl:w-full">
                    <Button variant="outline" size="sm" onClick={toggleTheme} className="cursor-pointer">
                        {iconTheme == 'dark' ? <Moon /> : <Sun />}
                    </Button>
                    <Link href={pathname} locale={currectLocale == "es" ? "en" : "es"}>
                        <Button variant="outline" size="sm" className="cursor-pointer">
                            <Languages />
                            <span>{t("Language")}</span>
                        </Button>
                    </Link>
                </div>

            </CardHeader>

            <CardContent>

                <CardTitle className="mb-2 sm:text-5xl text-4xl md:text-4xl md:text-center">{t("Welcome")}</CardTitle>
                <CardDescription className="md:text-center mb-6">{t("Log")}</CardDescription>

                <form>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email">{t("Email")}</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                                className="h-12"
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">{t("Password")}</Label>
                            </div>
                            <div className="relative">
                                <Input id="password" type={showPassword ? "text" : "password"} required className="h-12" />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? (
                                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                                    ) : (
                                        <Eye className="h-4 w-4 text-muted-foreground" />
                                    )}
                                </div>
                            </div>
                            <div className="flex justify-between mt-1 mb-5">
                                <div className="flex items-center">
                                    <Checkbox id="remember" className="mr-1" />
                                    <Label htmlFor="remember" className="cursor-pointer">{t("Remember")}</Label>
                                </div>
                                <Link href="/account/reset-password" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                                    {t("ForgotPassword")}
                                </Link>
                            </div>
                        </div>
                    </div>
                </form>
            </CardContent>

            <CardFooter className="flex-col gap-0 sm:gap-4">
                <Button type="submit" className="w-full rounded-full h-12">
                    {t("Login")}
                </Button>
                <div className="flex items-center w-full my-2 sm:my-4">
                    <div className="grow border-t border-gray-300 dark:border-gray-700"></div>
                    <span className="shrink-0 mx-4 text-sm text-muted-foreground">
                        {t("OrConnect")}
                    </span>
                    <div className="grow border-t border-gray-300 dark:border-gray-700"></div>
                </div>
                <SignIn />
                <div className="mt-5">
                    <p>{t("DontHave")} <Link href="#" className="font-bold">{t("Sign")}</Link></p>
                </div>
            </CardFooter>
        </Card>
    )
}
