import { Link } from "@/i18n/navigations"
import { getTranslations } from "next-intl/server";
import { ArrowLeft } from "lucide-react";


export const SignupInfo = async () => {

    const t = await getTranslations('signUp');
    const c = await getTranslations('common');

    return (
        <div className="hidden bg-transparent h-full flex-col justify-between p-10 border-none sm:hidden lg:flex lg:p-10 xl:p-10">
            <div className="flex justify-between items-center">
                <Link href="/" className='flex text-white'>
                    <ArrowLeft className="mr-1 " />
                    {c("backTo")}
                </Link>
                <span className="text-white text-3xl">{c("meevent")}</span>
            </div>

            <div className="text-white mb-10">
                <h1 className='text-5xl w-[70%]  mb-10'>
                    {t("loginTitle")}
                </h1>
                <p className='w-[80%]'>
                    {t("loginInfo")}
                </p>
            </div>
        </div>
    )
}
