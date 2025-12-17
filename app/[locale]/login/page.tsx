import { LoginForm } from "@/components/Login/LoginForm"
import { LoginInfo } from '../../../components/Login/LoginInfo';

export default function LoginPage() {

  
  return (
    <div className="
      bg-[url('/fondo.jpg')] bg-black/55 bg-blend-multiply bg-cover 
      gap-3 grid grid-cols-1 h-dvh
      sm:grid-cols-1 sm:p-0 
      md:p-4 
      lg:grid-cols-[2fr_1.5fr] 
      xl:grid-cols-[2fr_1.5fr]
    ">
      <LoginInfo />
      <LoginForm />
    </div>
  )
}
