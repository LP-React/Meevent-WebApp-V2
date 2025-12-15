import { CardFooter } from '../ui/card'
import { Button } from '../ui/button'
import { SignIn } from '../SignInButton'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigations'

export const LoginCardFooter = async () => {

        const t = await getTranslations('login')
        const c = await getTranslations('common')

    return (
        <CardFooter className="flex-col gap-0 sm:gap-4">
            <Button type="submit" className="w-full rounded-full h-12">
                {c("login")}
            </Button>
            <div className="flex items-center w-full my-2 sm:my-4">
                <div className="grow border-t border-gray-300 dark:border-gray-700"></div>
                <span className="shrink-0 mx-4 text-sm text-muted-foreground">
                    {c("orConnect")}
                </span>
                <div className="grow border-t border-gray-300 dark:border-gray-700"></div>
            </div>
            <SignIn />
            <div className="mt-5">
                <p>{t("dontHaveAnAccount")} <Link href="/signup" className="font-bold">{c("signUp")}</Link></p>
            </div>
        </CardFooter>
    )
}
