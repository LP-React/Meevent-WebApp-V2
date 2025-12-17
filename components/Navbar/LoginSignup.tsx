import { PreviousLink } from '../utils/PreviousLink'
import { Button } from '../ui/button'
import { getTranslations } from 'next-intl/server'

export const LoginSignup = async () => {

    const t = await getTranslations('Navbar')

    return (
        <div className="flex justify-between items-center w-[165px]">
            <PreviousLink href="/login" className="text-foreground transition duration-200 hover:text-red-500 text-[14px] font-medium" >
                {t('login')}
            </PreviousLink>
            <PreviousLink href="/signup">
                <Button className="text-background transition duration-200 hover:bg-red-500 hover:text-foreground cursor-pointer" size="sm">
                    {t('sign_up')}
                </Button>
            </PreviousLink>
        </div>
    )
}
