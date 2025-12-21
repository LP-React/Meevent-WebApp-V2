import { ChevronDown, ChevronUp, Home, Inbox, Search, Settings, User2, GalleryThumbnails, PanelsTopLeft, Gamepad2, FolderPen } from "lucide-react"

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


// Menu items.
const sidebarData = [
    {
        title: "Maintance",
        icon: FolderPen,
        link: "/dashboard/",
        sublinks: [
            {
                title: "Events",
                link: "/dashboard/events",
                icon: Gamepad2
            },
            {
                title: "Tickets",
                link: "/dashboard/events",
                icon: Gamepad2
            },
            {
                title: "Categories",
                link: "/dashboard/categories",
                icon: Gamepad2
            },
            {
                title: "Subcategories",
                link: "/dashboard/subcategories",
                icon: Gamepad2
            },
        ]
    },
    {
        title: "Profile",
        icon: PanelsTopLeft,
        link: "/dashboard/profile-reviews",
        sublinks: [
            {
                title: "Reviews",
                link: "/dashboard/profile-reviews",
                icon: Gamepad2
            },
            {
                title: "Carousel",
                link: "/admin/dashboard/carousel",
                icon: Gamepad2
            }
        ]
    },
]

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem >
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    Select Workspace
                                    <ChevronDown className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                                <DropdownMenuItem>
                                    <span>Acme Inc</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>Acme Corp.</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        {
                            sidebarData.map((opt) => (
                                <SidebarMenu key={opt.title}>
                                    <Collapsible defaultOpen className="group/collapsible">
                                        <SidebarMenuItem>
                                            <CollapsibleTrigger asChild>
                                                <SidebarMenuButton>
                                                    <opt.icon />
                                                    <span>
                                                        {opt.title}
                                                    </span>
                                                    <ChevronDown className="ml-auto" />
                                                </SidebarMenuButton>
                                            </CollapsibleTrigger>
                                            <CollapsibleContent>
                                                <SidebarMenuSub>
                                                    {
                                                        opt.sublinks.map((sub) => (
                                                            <SidebarMenuSubItem key={sub.title}>
                                                                <Link href={sub.link} className="flex">
                                                                    {/* <sub.icon /> */}
                                                                    <span>
                                                                        {sub.title}
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
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <User2 /> Username
                                    <ChevronUp className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                side="top"
                                className="w-[--radix-popper-anchor-width]"
                            >
                                <DropdownMenuItem>
                                    <span>Account</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>Billing</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>Sign out</span>
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