'use client'

import { Link, usePathname } from "@/i18n/navigations"
import { useTranslations } from "next-intl"
import clsx from "clsx"

const settingLinks = [
    { href: "/account/settings/profile", label: "profile" },
    { href: "/account/settings/security", label: "security" },
]

export const SettingsSidebar = () => {
    const pathname = usePathname()
    const c = useTranslations("common")

    return (
        <ul className="flex flex-col gap-2">
            {settingLinks.map((link) => {
                const isActive = pathname === link.href

                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={clsx(
                            "py-2 px-3 rounded-md transition-colors",
                            isActive
                                ? "bg-muted-foreground text-primary-foreground font-medium"
                                : "hover:bg-muted"
                        )}
                    >
                        {c(link.label)}
                    </Link>
                )
            })}
        </ul>
    )
}
