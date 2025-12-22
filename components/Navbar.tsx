import Image from "next/image";

import { Link } from "@/i18n/navigations";
import { getTranslations } from "next-intl/server";

import { UserMenu } from "./UserMenu";
import { ThemeButton } from "./utils/ThemeButton";
import { LoginSignup } from "./Navbar/LoginSignup";
import { LanguageButton } from "./utils/LanguageButton";

const navLinks = [
    { href: "/find-events", label: "find_event" },
    { href: "/create-event", label: "create_event" },
    { href: "/find-plans", label: "find_plans" },
    { href: "/create-plan", label: "create_plan" },
];

interface Props {
    cookieTheme: string,
    cookieUser: string
}

export const Navbar = async ({ cookieTheme, cookieUser }: Props) => {

    const t = await getTranslations('Navbar')

    return (
        <div className="top-0 w-full h-[55px] flex justify-center items-center border-b-2 z-50 fixed bg-background">

            <nav className="w-[75%] flex justify-between items-center text-[18px]">

                <Link href="/" className="w-30 shrink-0">
                    <Image src="/logo.png" width={2000} height={343} alt="meevent-logo" className="w-full" priority />
                </Link>

                <div className="w-[550px] flex justify-between">
                    {navLinks.map(link => (
                        <Link className="transition duration-200 hover:text-red-500" href={link.href} key={link.label}>{t(link.label)}</Link>
                    ))}
                </div>

                {!cookieUser && (
                    <div className="flex justify-between w-35 items-center">
                        <ThemeButton themeCookie={cookieTheme} variant={"ghost"} />
                        <LanguageButton />
                    </div>
                )}

                <div className="h-full flex items-center">
                    {cookieUser ?
                        <UserMenu cookieUser={cookieUser} cookieTheme={cookieTheme} /> :
                        <LoginSignup />
                    }
                </div>

            </nav>
        </div>
    )
}
