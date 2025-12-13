"use client"
import { signIn } from "next-auth/react"
import { Chromium } from 'lucide-react';
import { useTranslations } from "next-intl";
import { Button } from "./ui/button";

export function SignIn() {

    const t = useTranslations('Login')

    return (
        <Button variant="outline" className="w-full rounded-full h-12 cursor-pointer" onClick={() => signIn("google", {redirectTo: "/"})}>
            <Chromium />{t("Continue")}
        </Button>
    )
}