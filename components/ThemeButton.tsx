"use client"

import { Moon, Sun } from "lucide-react"
import { useIconTheme } from "./hooks/useIconTheme"
import { Button } from "./ui/button"

interface Props {
    themeCookie: string
}

export const ThemeButton = ({ themeCookie }: Props) => {

    const { iconTheme, toggleTheme } = useIconTheme(themeCookie)
    return (
        <Button variant="outline" size="sm" onClick={toggleTheme} className="cursor-pointer">
            {iconTheme == 'dark' ? <Moon /> : <Sun />}
        </Button>
    )
}
