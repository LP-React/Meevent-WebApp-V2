import { Link } from "@/i18n/navigations";
import { getTranslations } from "next-intl/server";

const settingLinks = [
    { href: "/account/settings/profile", label: "profile" },
    { href: "/account/settings/security", label: "security" },
    // { href: "/account/settings/delete", label: "find_plans" },
]
export default async function SettingsLayout({ children }: { children: React.ReactNode; }) {

    const c = await getTranslations("common")
    const t = await getTranslations("settingsLayout")



    return (
        <main className="mt-15">
            <div>
                <h1 className="text-3xl">{c("settings")}</h1>
                <p>{t("description")}</p>
            </div>
            <div className="grid w-40 justify-center grid-cols-1 grid-rows-2 items-center bg-background">
                {settingLinks.map((link) => (
                    <Link key={link.label} href={link.href} className="py-2 px-3">
                        {c(link.label)}
                    </Link>
                ))}
            </div>
            {children}
        </main>
    );
}