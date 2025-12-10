import { LoginForm } from "@/components/LoginForm"
import { cookies } from "next/headers"
import { getTranslations } from "next-intl/server"
import { LoginInfo } from '../../../components/LoginInfo';

export default async function LoginPage() {

  const cookieStore = await cookies();
  const themeCookie = cookieStore.get("theme")?.value || "system";

  return (
    <div className="
      bg-[url('/fondo.jpg')] bg-black/55 bg-blend-multiply bg-cover h-dvh
      gap-3 grid grid-cols-1 
      sm:grid-cols-1 sm:p-0 
      md:p-4 lg:grid-cols-[2fr_1.5fr] 
      xl:grid-cols-[2fr_1.5fr]
    ">
      <LoginInfo />
      <LoginForm themeCookie={themeCookie}/>
    </div>
  )
}
