"use client"

import { Moon, Sun } from "lucide-react"
import { useIconTheme } from "../hooks/useIconTheme"
import { Button } from "../ui/button"
import { ComponentProps } from "react";

type Props = {
    themeCookie: string;
} & Omit<ComponentProps<typeof Button>, "onClick">;

export const ThemeButton = ({ themeCookie, ...props }: Props) => {

    const { iconTheme, toggleTheme } = useIconTheme(themeCookie)
    return (
        <Button size="icon" onClick={toggleTheme} className="cursor-pointer" {...props}>
            {iconTheme == 'dark' ? <Moon /> : <Sun />}
        </Button>
    )
}
