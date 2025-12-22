"use client"

import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/ui/sidebar"
import { ChevronRight } from "lucide-react"

export const SidebarButton = () => {
    const { toggleSidebar } = useSidebar()

    return (
        <Button variant="outline" size="icon" aria-label="Sidebar" onClick={toggleSidebar}
            className="absolute right-0 top-[50%] -translate-y-1/2 translate-x-1/2 !w-6 !h-12 [&>svg]:!w-5 [&>svg]:!h-6 bg-instant-black">
            <ChevronRight />
        </Button>
    )
}
