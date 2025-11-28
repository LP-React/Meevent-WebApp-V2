"use client"
import { useTranslations } from "next-intl"
import Link from "next/link"

export const Footer = () => {
  const t = useTranslations('Footer')
  return (
    <footer className="w-full flex border border-b-black transition duration-300 justify-center items-center">
      <img src="/logo.png" alt="" className="h-[20px]" />
      <div className="max-h-52 flex flex-col flex-wrap mx-[150px] text-[18px]">
        <Link href="#" className="text-center px-6 py-4 no-underline font-inter transition duration-200 hover:text-red-500 ">{t("faq")}</Link>
        <Link href="#" className="text-center px-6 py-4 no-underline font-inter hover:text-red-500 ">{t("about_us")}</Link>
        <Link href="#" className="text-center px-6 py-4 no-underline font-inter hover:text-red-500 ">{t("policy_and_privacity")}</Link>
        <Link href="#" className="text-center px-6 py-4 no-underline font-inter hover:text-red-500 ">{t("find_events")}</Link>
        <Link href="#" className="text-center px-6 py-4 no-underline font-inter hover:text-red-500 ">{t("create_events")}</Link>
        <Link href="#" className="text-center px-6 py-4 no-underline font-inter hover:text-red-500 ">{t("find_plans")}</Link>
        <Link href="#" className="text-center px-6 py-4 no-underline font-inter hover:text-red-500 ">{t("create_plan")}</Link>
      </div>
    </footer>

  )
}
