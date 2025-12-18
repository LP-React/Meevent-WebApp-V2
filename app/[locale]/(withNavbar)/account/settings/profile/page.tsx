import { User } from "@/types/domain/user";
import { cookies } from "next/headers";
import Image from "next/image";

export default async function ProfilePage() {

    const cookieStore = await cookies();
    const raw = cookieStore.get("userData")?.value;
    const userData: User = raw ? JSON.parse(raw) : null;

    return (
        <div className="">
            <div>
                <Image src={userData.url_profile || ""} height={90} width={90} alt={userData.fullname} />
            </div>
        </div>
    );
}