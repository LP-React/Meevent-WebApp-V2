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
import { CheckCheck, ChevronDown, Heart, LayoutGrid, LogOut, Settings, Ticket } from "lucide-react"
import { Skeleton } from "./ui/skeleton"
import { deleteCookie } from "cookies-next"
import { useTranslations } from "next-intl"
import { signOut } from "next-auth/react"
import { ThemeButton } from "./utils/ThemeButton"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

const menuOptions = [
    {
        label: "Tickets",
        link: "/account/my-tickets",
        icon: Ticket
    },
    {
        label: "Liked",
        link: "/account/my-likes",
        icon: Heart
    },
    {
        label: "Following",
        link: "/account/my-follows",
        icon: CheckCheck
    },
    {
        label: "Settings",
        link: "/account/settings",
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
                            <Avatar>
                                <AvatarImage width={96} height={96}
                                    src={cookieUser.imagen_perfil_url ?? undefined}
                                    className="h-6.5 w-6.5 object-cover shadow-[0_2px_6px_rgba(0,0,0,0.5)] text-foreground rounded-full"
                                />
                                <AvatarFallback>
                                    {cookieUser.nombre_completo.charAt(0).toUpperCase()}
                                </AvatarFallback>
                            </Avatar>
                            <div className="ml-2 text-[16px] font-normal">{cookieUser?.nombre_completo}</div>
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

                {
                    cookieUser.perfilOrganizador &&
                    <>
                        <DropdownMenuGroup>
                            <DropdownMenuItem className="justify-between cursor-pointer font-medium bg-muted/50" >
                                <Link href='/dashboard' className="justify-between items-center w-full flex cursor-pointer" >
                                    <span>{`${c('organizer')} ${c('dashboard')}`}</span>
                                    <LayoutGrid />
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>

                        <DropdownMenuSeparator />
                    </>
                }




                <DropdownMenuGroup>
                    <DropdownMenuItem className="justify-between cursor-pointer">
                        <span>{c('mode')}</span>
                        <ThemeButton themeCookie={cookieTheme} variant={"ghost"} size={"minus"} />
                    </DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

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
