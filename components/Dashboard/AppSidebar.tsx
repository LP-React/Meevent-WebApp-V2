"use client"

import { ChevronDown, ChevronUp, User2, PanelsTopLeft, Gamepad2, FolderPen } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { SidebarButton } from "./SidebarButton"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@radix-ui/react-collapsible';
import { Link } from "@/i18n/navigations";
import { UsuarioApi } from "@/types/api/users";
import { useTranslations } from "next-intl";
import { deleteCookie } from "cookies-next";
import { signOut } from "next-auth/react"
import { ThemeButton } from "../utils/ThemeButton"
import { LanguageButton } from "../utils/LanguageButton"
import { Separator } from "../ui/separator"
import { Button } from "../ui/button"


// Menu items.
const sidebarData = [
    {
        label: "maintance",
        icon: FolderPen,
        link: "/dashboard/",
        sublinks: [
            {
                label: "events",
                link: "/dashboard/events",
                icon: Gamepad2
            }
        ]
    },
    {
        label: "profile",
        icon: PanelsTopLeft,
        link: "/dashboard/profile-reviews",
        sublinks: [
            {
                label: "organizerProfile",
                link: "/dashboard/profile",
                icon: Gamepad2
            }
        ]
    },
]

interface Props {
    userData: UsuarioApi
    themeCookie: string
}

export function AppSidebar({ userData, themeCookie }: Props) {

    const t = useTranslations("organizerSidebar")
    const c = useTranslations("common")

    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem >
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    {
                                        userData?.perfilOrganizador?.nombre_organizador
                                    }
                                    <ChevronDown className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>{t("application")}</SidebarGroupLabel>
                    <SidebarGroupContent>
                        {
                            sidebarData.map((opt) => (
                                <SidebarMenu key={opt.label}>
                                    <Collapsible defaultOpen className="group/collapsible">
                                        <SidebarMenuItem>
                                            <CollapsibleTrigger asChild>
                                                <SidebarMenuButton>
                                                    <opt.icon />
                                                    <span>
                                                        {t(opt.label)}
                                                    </span>
                                                    <ChevronDown className="ml-auto" />
                                                </SidebarMenuButton>
                                            </CollapsibleTrigger>
                                            <CollapsibleContent>
                                                <SidebarMenuSub>
                                                    {
                                                        opt.sublinks.map((sub) => (
                                                            <SidebarMenuSubItem key={sub.label}>
                                                                <Link href={sub.link} className="flex">
                                                                    {/* <sub.icon /> */}
                                                                    <span>
                                                                        {t(sub.label)}
                                                                    </span>
                                                                </Link>
                                                            </SidebarMenuSubItem>
                                                        ))
                                                    }
                                                </SidebarMenuSub>
                                            </CollapsibleContent>
                                        </SidebarMenuItem>
                                    </Collapsible>
                                </SidebarMenu>
                            ))
                        }
                    </SidebarGroupContent>
                </SidebarGroup>

            </SidebarContent>

            <SidebarFooter>
                <SidebarMenu>

                    <SidebarMenuItem className="flex items-center justify-between">
                        <span className="font-semibold">{c("theme")}: </span>
                        <ThemeButton themeCookie={themeCookie} variant={"outline"} size={"icon-sm"} />
                    </SidebarMenuItem>
                    <SidebarMenuItem className="flex items-center justify-between mt-2 mb-2">
                        <span className="font-semibold">{c("languageText")}: </span>
                        <LanguageButton />
                    </SidebarMenuItem>
                    <Separator />
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <User2 /> {userData.nombre_completo}
                                    <ChevronUp className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                side="right"
                                className="w-full ml-2"
                            >
                                <DropdownMenuItem onClick={() => { deleteCookie("userData"), signOut({ callbackUrl: "/" }) }} className="w-full">
                                    <Button variant={"destructive"}>
                                        {c("logout")}
                                    </Button>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>

            <SidebarButton />
        </Sidebar >
    )
}