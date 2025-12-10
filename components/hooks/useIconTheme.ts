import { setCookie } from "cookies-next";
import { useTheme } from "next-themes";
import { useState } from "react";

export const useIconTheme = (themeCookie: string) => {
    const { theme, setTheme } = useTheme();
    const [iconTheme, setIconTheme] = useState(themeCookie)

    const toggleTheme = () => {
        if (theme == 'light') {
            setTheme("dark");
            setCookie('theme', 'dark');
            setIconTheme('dark')
        } else {
            setTheme("light");
            setCookie('theme', 'light');
            setIconTheme('light')
        }
    }

    return {
        iconTheme, toggleTheme
    }
}