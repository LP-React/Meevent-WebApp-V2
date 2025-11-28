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
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link, usePathname } from "@/i18n/navigations"
import { CheckCheck, ChevronDown, Heart, LogOut, MoveRight, Settings, Ticket } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"

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

export const UserMenu = () => {

    const pathname = usePathname();
    const t = useTranslations('UserMenu');

    return (
        <DropdownMenu>

            <DropdownMenuTrigger asChild>
                <Button variant={"ghost"}>
                    <div className="flex justify-between w-45 items-center h-full cursor-pointer">
                        <div className="flex justify-center items-center">
                            <Image src="/user-photo.jpg" width={606} height={680} alt="user-photo" className="h-6 w-6 object-cover shadow-[0_2px_6px_rgba(0,0,0,0.5)] text-foreground rounded-full" />
                            <div className="ml-2 text-[16px] font-normal">{t("Username")}</div>
                        </div>
                        <ChevronDown />
                    </div>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-50 rounded-none rounded-b-md" align="center" side="bottom" sideOffset={9}>

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
                                        <Link href={pathname} locale={opt.locale} className="w-full">
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
                    <DropdownMenuItem className="justify-between" /* //TODO: onClick={() => onLogout()} */>
                        <span>{t('Logout')}</span>
                        <LogOut />
                    </DropdownMenuItem>
                </DropdownMenuGroup>

            </DropdownMenuContent>

        </DropdownMenu>
    )
}
