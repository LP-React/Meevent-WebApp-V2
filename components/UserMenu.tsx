"use client"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from "@/i18n/navigations"
import { CheckCheck, ChevronDown, Heart, LogOut, Settings, Ticket } from "lucide-react"
import { Skeleton } from "./ui/skeleton"
import { deleteCookie } from "cookies-next"
import { useTranslations } from "next-intl"
import { signOut } from "next-auth/react"

const menuOptions = [
    {
        label: "Tickets",
        link: "tickets",
        icon: Ticket
    },
    {
        label: "Liked",
        link: "liked",
        icon: Heart
    },
    {
        label: "Following",
        link: "following",
        icon: CheckCheck
    },
    {
        label: "Settings",
        link: "settings",
        icon: Settings
    }
]

const languageOptions = [
    { label: "English", locale: "en" },
    { label: "Spanish", locale: "es" },
    // { label: "Portuguese", locale: "pt" },
]

interface Props {
    cookieUser: any
    cookieTheme: string
}

export const UserMenu = ({ cookieUser, cookieTheme }: Props) => {

    const t = useTranslations('UserMenu');
    const c = useTranslations('common');

    console.log(cookieUser);
    

    // TODO: with auth.js
    // const { data: session, status } = useSession();

    return (
        <DropdownMenu>

            <DropdownMenuTrigger asChild>
                <Button variant={"ghost"}>
                    <div className="flex justify-between w-52 items-center h-full cursor-pointer">
                        <div className="flex justify-center items-center">


                            {/* {
                                // TODO: with auth.js
                                session?.user?.image ? (
                                    <Image width={96} height={96} src={session?.user?.image} alt="User Avatar" loading="eager" className="h-6.5 w-6.5 object-cover shadow-[0_2px_6px_rgba(0,0,0,0.5)] text-foreground rounded-full" />)
                                    : (<Skeleton className="h-6.5 w-6.5 rounded-full" />)
                            }
                            {
                                session?.user?.name ? (<div className="ml-2 text-[16px] font-normal">{session?.user?.name}</div>)
                                    : (<Skeleton className="ml-2 w-28 h-3" />)
                            } */}


                            {
                                (cookieUser?.imagen_perfil_url ? (<img width={96} height={96} src={"https://i.pinimg.com/736x/6b/ee/38/6bee381a6a19c5cb8cd82eed31a17c02.jpg"} alt="User Avatar" loading="eager" className="h-6.5 w-6.5 object-cover shadow-[0_2px_6px_rgba(0,0,0,0.5)] text-foreground rounded-full" />)
                                    : (<Skeleton className="h-6.5 w-6.5 rounded-full" />)
                                )
                            }
                            {
                                (cookieUser?.nombre_completo ? (<div className="ml-2 text-[16px] font-normal">{cookieUser?.nombre_completo}</div>)
                                    : (<Skeleton className="ml-2 w-28 h-3" />)
                                )
                            }
                        </div>
                        <ChevronDown />
                    </div>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-55 rounded-none rounded-b-md" align="center" side="bottom" sideOffset={9}>

                {/* Title Menu */}
                <DropdownMenuLabel>{t('Account')}</DropdownMenuLabel>

                {/* User Menu */}
                <DropdownMenuGroup>
                    {menuOptions.map(opt =>
                        <DropdownMenuItem key={opt.label}>
                            <Link href={opt.link} className="justify-between items-center w-full flex cursor-pointer" >
                                <span>{t(opt.label)}</span>
                                <opt.icon />
                            </Link>
                        </DropdownMenuItem>
                    )}
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                {/* 
                <DropdownMenuGroup>
                    <DropdownMenuItem className="justify-between cursor-pointer">
                        <span>{c('mode')}</span>
                        <ThemeButton themeCookie={cookieTheme} variant={"ghost"} size={"minus"} />
                    </DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator /> */}

                {/* Language Menu */}
                <DropdownMenuGroup>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                            <span>{t('Language')}</span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                {languageOptions.map(opt =>
                                    <DropdownMenuItem key={opt.label} asChild>
                                        <Link href="." locale={opt.locale} className="w-full">
                                            {t(opt.label)}
                                        </Link>
                                    </DropdownMenuItem>
                                )}
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />



                {/* Logout */}
                <DropdownMenuGroup>
                    <DropdownMenuItem className="justify-between" onClick={() => { signOut(); deleteCookie("userData") }}>
                        <span>{c('logout')}</span>
                        <LogOut />
                    </DropdownMenuItem>
                </DropdownMenuGroup>

            </DropdownMenuContent>

        </DropdownMenu >
    )
}
