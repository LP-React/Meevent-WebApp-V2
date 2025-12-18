import { Link, useRouter } from "@/i18n/navigations"
import { CircleCheckBig } from "lucide-react"
import { useTranslations } from "next-intl"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"


export const SignUpSuccess = () => {

    const t = useTranslations("signUp")

    const searchParams = useSearchParams()
    const router = useRouter()

    const [seconds, setSeconds] = useState(5)

    const rawRedirect = searchParams.get('redirect')
    const redirect =
        rawRedirect && rawRedirect.startsWith('/') ? rawRedirect : '/'


    useEffect(() => {
        if (seconds === 0) {
            router.push(redirect)
            return
        }

        const timer = setTimeout(() => {
            setSeconds((prev) => prev - 1)
        }, 1000)

        return () => clearTimeout(timer)
    }, [seconds, redirect, router])

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center justify-center h-40">
                <CircleCheckBig size={50} />
                <span className="text-2xl mt-4">
                    {t("accountCreated")}
                </span>
            </div>
            <span className="mt-2 text-sm text-muted-foreground">
                {t("signupRedirect")}{' '}
                <Link href={redirect} className="font-medium underline hover:text-foreground transition-all">
                    {`meveent.com${redirect}`}
                </Link>

            </span>
            <p className="mt-2 text-sm text-muted-foreground">
                {t('inSeconds', { seconds })}
            </p>
        </div>
    )
}
