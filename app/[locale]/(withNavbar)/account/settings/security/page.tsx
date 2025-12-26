
import { Separator } from "@/components/ui/separator";
import { DisableAccountCard } from "@/components/UserSettings/DisableAccountCard";
import { NewPasswordCard } from "@/components/UserSettings/NewPasswordCard";
import { UsuarioApi } from "@/types/api/users";
import { cookies } from "next/headers";

export default async function SecurityPage() {

    const cookieStore = await cookies();
    const raw = cookieStore.get("userData")?.value;
    const userData: UsuarioApi = raw ? JSON.parse(raw) : null;

    return (
        <div>
            <NewPasswordCard user={userData} />
            <Separator  className="my-2"/>
            <DisableAccountCard user={userData} />
        </div>
    );
}