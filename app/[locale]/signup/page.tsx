import { Card } from "@/components/ui/card";
import { SignUpCardHeader } from "@/components/SignUp/SignUpCardHeader";
import { SignUpCardFooter } from "@/components/SignUp/SignUpCardFooter";
import { SignUpCardContent } from "@/components/SignUp/SignUpCardContent";
import { SignupInfo } from "@/components/SignupInfo";

export default function SignUpPage() {

    return (
        <div className="bg-[url('/bg2.jpg')] bg-black/55 bg-blend-multiply grid  grid-cols-1 sm:grid-cols-1 sm:p-0 gap-3 bg-cover h-dvh md:p-4 lg:grid-cols-[2fr_1.5fr] xl:grid-cols-[1.5fr_2fr]">
            <Card className="rounded-none flex justify-evenly p-4 sm:p-8 sm:rounded-none md:rounded-xl md:p-26 lg:p-1 xl:p-10">

                <SignUpCardHeader />

                <SignUpCardContent />

                {/* <SignUpCardFooter /> */}

            </Card>

            <SignupInfo />

        </div>
    )
}
