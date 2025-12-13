'use client'

import { useEffect, useState } from 'react'
import { CardContent, CardDescription, CardTitle } from '../ui/card'
import { EmailVerificationForm } from './EmailVerificationForm'
import { SignIn } from '../SignInButton'
import { useTranslations } from 'next-intl'
import { UserSelectProfileForm } from './UserSelectProfileForm'
import { UserDetailsForm } from './UserDetailsForm'

export const SignUpCardContent = () => {

    const t = useTranslations('signUp');
    const c = useTranslations('common');
    const [step, setStep] = useState(1);

    const [userData, setUserData] = useState({})

    useEffect(() => {
        console.log(userData);
    }, [userData])


    return (
        <CardContent className="my-18">
            <CardTitle className="mb-2 sm:text-5xl text-4xl md:text-4xl md:text-center">{c("createAccount")}</CardTitle>
            <CardDescription className="md:text-center mb-6">{t("sign")}</CardDescription>

            <div className="w-full">

                <div className="grid grid-cols-3 gap-2 mb-5 w-[70%] m-auto">
                    <div className={`h-2 rounded-bl-3xl rounded-tr-3xl ${step >= 2 ? "bg-green-300" : "outline"} `} />
                    <div className={`h-2 rounded-bl-3xl rounded-tr-3xl ${step >= 3 ? "bg-green-300" : "outline"} `} />
                    <div className={`h-2 rounded-bl-3xl rounded-tr-3xl ${step >= 4 ? "bg-green-300" : "outline"} `} />
                </div>

                {step === 1 && (<EmailVerificationForm onSubmit={(data) => {
                    setUserData(prev => ({
                        ...prev,
                        email: data.email
                    }))
                    setStep(2);
                }} />)
                }

                {step === 2 && (<UserSelectProfileForm onSubmit={(data) => {
                    setUserData(prev => ({
                        ...prev,
                        userType: data.profile
                    }))
                    setStep(3);
                }} />)
                }

                {step === 3 && (<UserDetailsForm onSubmit={(data) => {
                    setUserData(prev => ({
                        ...prev,
                        fullname: `${data.name + ' ' + data.lastName}`,
                        password: data.password
                    }))
                    setStep(3);
                    setStep(3);
                }} />)
                }

                {step === 1 && (
                    <div className='mt-23 flex flex-col items-center justify-center'>
                        <div className="flex items-center w-full justify-center my-4">
                            <div className="grow border-t mr-2" />
                            <span className='shrink-0 mx-4 text-sm text-muted-foreground'>{c("orContinueWith")}</span>
                            <div className="grow border-t mr-2" />
                        </div>
                        <div className='w-52'>
                            <SignIn />
                        </div>
                    </div>
                )}

            </div>


        </CardContent>
    )
}
