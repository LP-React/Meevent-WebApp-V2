"use client"

import { useTranslations } from "next-intl"
import Link from "next/link"


export const Nabvar = () => {

    const t = useTranslations('HomePage')

    return (
        <div className="top-0 w-full h-[50px] flex  justify-evenly items-center border-b border-2 text-[18px] transition duration-200 p-[0.1px] z-100">

            <Link href="/" className="h-[40%]">
                <img src="/logo.png" alt="" className="h-full" />
            </Link>

            <div className="w-[900px] flex justify-evenly">
                <Link href="#" className="no-underline text-black transition duration-200 hover:text-red-500">{t("find_event")}</Link>
                <Link href="#" className="no-underline text-black transition duration-200 hover:text-red-500">{t("create_event")}</Link>
                <Link href="#" className="no-underline text-black transition duration-200 hover:text-red-500">{t("find_plans")}</Link>
                <Link href="#" className="no-underline text-black transition duration-200 hover:text-red-500">{t("create_plan")}</Link>
            </div>


            <div className="h-full w-[360px] flex justify-evenly items-center">

                <div className="flex items-center justify-evenly w-[70px]">
                    <div className="cursor-pointer transition duration-200 hover:text-red-500">EN</div>
                    <div className="cursor-pointer transition duration-200 hover:text-red-500">ES</div>
                </div>

                <img src="#" alt="" className="h-[22px] cursor-pointer" />


                {/* Sin session */}
                <div className="flex justify-evenly w-[220px]">
                    <Link href="#" className="no-underline text-black transition duration-200 hover:text-red-500">{t('sign_up')}</Link>
                    <Link href="#" className="no-underline text-black transition duration-200 hover:text-red-500">{t('login')}</Link>
                </div>


                {/* Con session */}
                <div className="flex justify-center items-center h-full cursor-pointer transition duration-200 hover:text-red-500">
                    <img src="#" alt="" className="h-[75%] shadow-sm" />
                    <div className="ml-2.5">Nombre-X</div>
                </div>


                <div className="cursor-pointer transition duration-200 hover:text-red-500">
                    {/* icono de cerrar session */}
                </div>


            </div>

        </div>
    )
}
