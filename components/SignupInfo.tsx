import { Link } from "@/i18n/navigations"
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { getTranslations } from "next-intl/server";
import { ArrowLeft } from "lucide-react";


export const SignupInfo = async () => {

    const c = await getTranslations('common');

    return (
        <Card className="hidden bg-transparent h-full flex-col justify-between p-10 border-none sm:hidden lg:flex lg:p-10 xl:p-10">
            <CardHeader className="flex justify-between items-center">
                <CardTitle className="text-white text-3xl">Meevent</CardTitle>
                <Link href="./">
                    <CardAction className="flex text-white ">
                        <ArrowLeft className="mr-1" />{c("backTo")}
                    </CardAction>
                </Link>
            </CardHeader>

            <div className="p-5">
                <CardTitle className="text-white text-5xl mb-5">
                    Edit Smarter. Export Faster.
                    <p>Create Anywhere.</p>
                </CardTitle>

                <CardDescription className="text-white opacity-80">
                    From quick social media clips to full-length videos our powerful editor
                    <p>lets you work across devices.</p>
                </CardDescription>
            </div>
        </Card>
    )
}
