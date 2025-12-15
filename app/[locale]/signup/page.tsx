import { SignupInfo } from "@/components/SignUp/SignupInfo";
import { SignUpForm } from "@/components/SignUp/SignUpForm";

export default function SignUpPage() {
    return (
        <div className="
        bg-[url('/bg2.jpg')] bg-black/55 bg-blend-multiply bg-cover
        grid grid-cols-1 gap-3 h-dvh
        sm:p-0 sm:grid-cols-1 
        md:p-4 
        lg:grid-cols-[2fr_1.5fr] 
        xl:grid-cols-[1.5fr_2fr]
        ">

            <SignUpForm />
            <SignupInfo />

        </div>
    )
}
