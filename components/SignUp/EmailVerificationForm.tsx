"use client"
import { useState } from "react";
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";

type EmailVerificationData = {
    email: string;
    confirmEmail: string;
};

interface Props {
    onSubmit: (email: string) => void;
}

export const EmailVerificationForm = ({ onSubmit }: Props) => {

    const c = useTranslations("common");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries()) as EmailVerificationData;

        if (data.email !== data.confirmEmail) return;

        onSubmit(data.email);
    };

    return (
        <form id="signup-form" className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
            <div className="col-span-2 grid gap-2">
                <Label htmlFor="email">{c("email")}</Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    className="h-10"
                />
            </div>

            <div className="col-span-2 grid gap-2">
                <Label htmlFor="confirmEmail">{c("confirmEmail")}</Label>
                <Input
                    id="confirmEmail"
                    name="confirmEmail"
                    type="email"
                    placeholder="m@example.com"
                    required
                    className="h-10"
                />
            </div>

            <Button type="submit" className='rounded-full mt-5 h-10 w-35 col-span-2 justify-self-center cursor-pointer'>
                {c("next")}
            </Button>
        </form>

    )
}
