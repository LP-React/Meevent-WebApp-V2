import { ProfileHeaderCard } from "@/components/UserSettings/ProfileHeaderCard";
import { UsuarioApi } from "@/types/api/users";
import { cookies } from "next/headers";
import Image from "next/image";

export default async function ProfilePage() {

    const cookieStore = await cookies();
    const raw = cookieStore.get("userData")?.value;
    const userData: UsuarioApi = raw ? JSON.parse(raw) : null;

    return (
        <div className="">

            <ProfileHeaderCard userData={userData} />


            <div>
                <h4></h4>

            </div>

            <div>
                {userData.fecha_nacimiento}
            </div>
            <div>
                {userData.numero_telefono}
            </div>
        </div >
    );
}