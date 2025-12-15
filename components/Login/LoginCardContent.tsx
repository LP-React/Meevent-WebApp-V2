"use client"

import { Link } from "@/i18n/navigations"
import { CardContent, CardDescription, CardTitle } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Checkbox } from "../ui/checkbox"
import { Eye, EyeOff } from "lucide-react"
import { useTranslations } from "next-intl"
import { useState } from "react"

export const LoginCardContent = () => {

    const [showPassword, setShowPassword] = useState(false)

    const t = useTranslations('login')
    const c = useTranslations('common')

    return (
        <CardContent>

            <CardTitle className="mb-2 sm:text-5xl text-4xl md:text-4xl md:text-center">{t("cardTitle")}</CardTitle>
            <CardDescription className="md:text-center mb-6">{t("cardSubtitle")}</CardDescription>

            <form>
                <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="email">{c("email")}</Label>
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
                            <Label htmlFor="password">{c("password")}</Label>
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
                                <Label htmlFor="remember" className="cursor-pointer">{c("remember")}</Label>
                            </div>
                            <Link href="/account/reset-password" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                                {c("forgotPassword")}
                            </Link>
                        </div>
                    </div>
                </div>
            </form>
        </CardContent>
    )
}
