'use client'

import { useState } from 'react'

import { useTranslations } from 'next-intl'
import { setCookie } from 'cookies-next'

import { SignupRequest } from '@/types/api/auth'
import { AuthService } from '@/services/auth.service'

import { CardContent, CardDescription, CardTitle } from '../ui/card'

import { EmailVerificationForm } from './EmailVerificationForm'
import { UserSelectProfileForm } from './UserSelectProfileForm'
import { UserDetailsForm } from './UserDetailsForm'
import { SignUpSuccess } from './SignUpSuccess'
import { SignIn } from '../SignInButton'


export const SignUpCardContent = () => {

    const t = useTranslations('signUp');
    const c = useTranslations('common');
    const [step, setStep] = useState(1);


    const [userData, setUserData] = useState<SignupRequest>({
        correo_electronico: "",
        nombre_completo: "",
        contrasena: "",
        tipo_usuario: ""
    })

    const verifyEmail = async (email: string) => {

        const response = await AuthService.verifyEmail(email);

        if (response) {
            console.warn("Ya existe una cuenta con el correo: " + email)
            return
        }

        setUserData(prev => ({
            ...prev,
            correo_electronico: email
        }))

        setStep(2);
    }

    const signUp = async (data: any) => {

        const payload = {
            ...userData,
            nombre_completo: `${data.name} ${data.lastName}`,
            contrasena: data.password
        }

        try {
            await AuthService.signup(payload);
            const loginResp = await AuthService.login({
                correo_electronico: payload.correo_electronico,
                contrasena: payload.contrasena
            })

            loginResp.exitoso && setCookie("userData", loginResp.usuario)
            setStep(4);

        } catch (e) { }
    }


    return (
        <CardContent className="my-18">
            <CardTitle className="mb-2 sm:text-5xl text-4xl md:text-4xl md:text-center">{c("createAccount")}</CardTitle>
            <CardDescription className="md:text-center mb-6">{t("cardSubtitle")}</CardDescription>

            <div className="w-full">

                <div className="grid grid-cols-3 gap-2 mb-5 w-[70%] m-auto">
                    <div className={`h-2 rounded-bl-3xl rounded-tr-3xl ${step >= 2 ? "bg-green-300" : "outline"} `} />
                    <div className={`h-2 rounded-bl-3xl rounded-tr-3xl ${step >= 3 ? "bg-green-300" : "outline"} `} />
                    <div className={`h-2 rounded-bl-3xl rounded-tr-3xl ${step >= 4 ? "bg-green-300" : "outline"} `} />
                </div>

                {step === 1 && (<EmailVerificationForm onSubmit={verifyEmail} />)}

                {step === 2 && (<UserSelectProfileForm onSubmit={(data) => {
                    setUserData(prev => ({
                        ...prev,
                        tipo_usuario: data.profile
                    }))
                    setStep(3);
                }} />)
                }

                {step === 3 && (<UserDetailsForm onSubmit={signUp} />)}

                {step === 4 && (<SignUpSuccess />)}

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
