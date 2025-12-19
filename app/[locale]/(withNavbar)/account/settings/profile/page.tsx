import { PersonalInfoCard } from "@/components/UserSettings/PersonalInfoCard";
import { ProfileHeaderCard } from "@/components/UserSettings/ProfileHeaderCard";
import { UsuarioApi } from "@/types/api/users";
import { cookies } from "next/headers";

export default async function ProfilePage() {

    const cookieStore = await cookies();
    const raw = cookieStore.get("userData")?.value;
    const userData: UsuarioApi = raw ? JSON.parse(raw) : null;

    return (
        <div className="grid grid-cols-1 gap-3">
            <ProfileHeaderCard user={userData} />
            <PersonalInfoCard user={userData} />
        </div >
    );
}