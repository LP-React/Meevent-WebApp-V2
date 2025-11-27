"use client"

import { useTranslations } from "next-intl"
import { LogOut, Moon, Sun } from 'lucide-react';
import { useTheme } from "next-themes";
import { Link, usePathname } from "@/i18n/navigations";
import Image from "next/image";

const navLinks = [
    { href: "/find-events", label: "find_event" },
    { href: "/create-event", label: "create_event" },
    { href: "/find-plans", label: "find_plans" },
    { href: "/create-plan", label: "create_plan" },
];

export const Navbar = () => {

    const { theme, setTheme } = useTheme();
    const pathname = usePathname();

    const t = useTranslations('Navbar')

    return (
        <div className="top-0 w-full h-[50px] flex justify-center items-center border-b-2 transition duration-200 z-200 fixed">

            <nav className="w-[80%] flex justify-between items-center text-[18px]">

                <Link href="/" className="w-30">
                    <Image src="/logo.png" width={2000} height={343} alt="meevent-logo" className="w-full"/>
                </Link>

                <div className="w-[800px] flex justify-evenly">
                    {
                        navLinks.map(link => (
                            <Link className="no-underline text-foreground transition duration-200 hover:text-red-500" href={link.href} key={link.label}>{t(link.label)}</Link>
                        ))
                    }
                </div>


                <div className="h-full w-[360px] flex justify-evenly items-center">

                    <div className="flex items-center justify-evenly w-[70px]">
                        <Link href={pathname} locale="en" className="cursor-pointer transition duration-200 hover:text-red-500 mr-1">EN</Link>
                        <Link href={pathname} locale="es" className="cursor-pointer transition duration-200 hover:text-red-500">ES</Link>
                    </div>

                    {
                        theme == 'light' ?
                            <Moon className="cursor-pointer duration-200 mx-3 hover:text-red-500" onClick={() => setTheme('dark')} />
                            :
                            <Sun className="cursor-pointer duration-200 mx-3 hover:text-red-500" onClick={() => setTheme('light')} />
                    }

                    {

                        false ?
                            <div className="flex justify-evenly w-[220px]">
                                <Link href="#" className="no-underline text-foregroun transition duration-200 hover:text-red-500">{t('sign_up')}</Link>
                                <Link href="#" className="no-underline text-foregroun transition duration-200 hover:text-red-500">{t('login')}</Link>
                            </div>
                            :
                            <div className="flex justify-evenly w-[180px]">
                                <div className="flex justify-center items-center h-full cursor-pointer transition duration-200 hover:text-red-500">
                                    <img src="#" alt="" className="h-[75%] shadow-sm" />
                                    <div className="ml-2.5">name</div>
                                </div>

                                <div className="cursor-pointer transition duration-200 hover:text-red-500">
                                    <LogOut />
                                </div>
                            </div>
                    }
                </div>
            </nav>
        </div>
    )
}
