import { SettingsSidebar } from "@/components/UserSettings/SettingSidebar";
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
        <main className="mt-18 w-[80%] h-[85dvh] m-auto">

            <div className="w-full h-full grid grid-cols-[1fr_4fr] gap-2">
                <SettingsSidebar />

                <div className="border-l-2 pl-3">
                    {children}
                </div>
            </div>
        </main>
    );
}