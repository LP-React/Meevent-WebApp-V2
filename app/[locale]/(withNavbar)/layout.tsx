import { Navbar } from "@/components/Navbar";
import { cookies } from "next/headers";

export default async function WithNavbarLayout({ children }: { children: React.ReactNode; }) {

    const cookieStore = await cookies();
    const themeCookie = cookieStore.get("theme")?.value || "system";
    const raw = cookieStore.get("userData")?.value;
    const userData = raw ? JSON.parse(raw) : null;

    return (
        <>
            <Navbar cookieTheme={themeCookie} cookieUser={userData} />
            {children}
        </>
    );
}