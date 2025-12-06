"use client"

import { useTranslations } from "next-intl"
import { ArrowRight, LogOut, Moon, Sun } from 'lucide-react';
import { useTheme } from "next-themes";
import { Link, usePathname } from "@/i18n/navigations";
import Image from "next/image";
import { setCookie } from "cookies-next";
import { useState } from "react";
import { UserMenu } from "./UserMenu";
import { SessionProvider, useSession } from "next-auth/react";
import { Button } from "./ui/button";

const navLinks = [
    { href: "/find-events", label: "find_event" },
    { href: "/create-event", label: "create_event" },
    { href: "/find-plans", label: "find_plans" },
    { href: "/create-plan", label: "create_plan" },
];

interface Props {
    cookieTheme: string
}

export const Navbar = ({ cookieTheme }: Props) => {

    const { theme, setTheme } = useTheme();
    const [iconTheme, setIconTheme] = useState(cookieTheme)
    const { status } = useSession()


    const toggleTheme = () => {
        if (theme == 'light') {
            setTheme("dark");
            setCookie('theme', 'dark');
            setIconTheme('dark')
        } else {
            setTheme("light");
            setCookie('theme', 'light');
            setIconTheme('light')
        }
    }

    const t = useTranslations('Navbar')


    return (
        <div className="top-0 w-full h-[55px] flex justify-center items-center border-b-2 z-50 fixed">

            <nav className="w-[75%] flex justify-between items-center text-[18px]">

                <Link href="/" className="w-30 shrink-0">
                    <Image src="/logo.png" width={2000} height={343} alt="meevent-logo" className="w-full" priority />
                </Link>

                <div className="w-[550px] flex justify-between">
                    {navLinks.map(link => (
                        <Link className="transition duration-200 hover:text-red-500" href={link.href} key={link.label}>{t(link.label)}</Link>
                    ))}
                </div>

                {iconTheme == 'light' ?
                    <Moon className="cursor-pointer transition text-foreground duration-200 hover:text-red-500" onClick={toggleTheme} /> :
                    <Sun className="cursor-pointer transition text-foreground duration-200 hover:text-red-500" onClick={toggleTheme} />
                }

                <div className="h-full flex items-center">
                    {status == "authenticated" ?
                        <UserMenu />
                        :
                        <div className="flex justify-between items-center w-[165px]">
                            <Link href="/login" className="text-foreground transition duration-200 hover:text-red-500 text-[14px] font-medium">{t('login')}</Link>
                            <Link href="/signup">
                                <Button className="text-background transition duration-200 hover:bg-red-500 hover:text-foreground cursor-pointer" size="sm">
                                    {t('sign_up')}
                                </Button>
                            </Link>
                        </div>
                    }
                </div>
            </nav>
        </div>
    )
}
