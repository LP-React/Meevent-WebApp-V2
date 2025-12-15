import { Link } from '@/i18n/navigations'
import { getTranslations } from 'next-intl/server'

import { ArrowLeft } from 'lucide-react'

export const LoginInfo = async () => {

    const t = await getTranslations('login');
    const c = await getTranslations('common');

    return (
        <div className="hidden bg-transparent h-full flex-col justify-between sm:hidden lg:flex lg:p-10 xl:p-10">
            <div className="flex justify-between items-center">
                <span className="text-white text-3xl">{c("meevent")}</span>
                <Link href="/" className='flex text-white'>
                    <ArrowLeft className="mr-1 " />
                    {c("backTo")}
                </Link>
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
