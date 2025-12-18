"use client"

import { useTranslations } from "next-intl";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

type InputFieldConfig = {
    id: string;
    name: string;
    type: string;
    placeholder?: string;
    required: boolean;
    label: string;
    className?: string;
    gridCols?: string;
};

type SignupFormData = {
    name: string;
    lastName: string;
    password: string;
    confirmPassword: string;
};

type Props = {
    onSubmit: (data: SignupFormData) => void;
};


const signupFields: InputFieldConfig[] = [
    {
        id: "name",
        name: "name",
        type: "text",
        label: "name",
        placeholder: "Aaron",
        required: true,
        gridCols: "col-span-1"
    },
    {
        id: "lastName",
        name: "lastName",
        type: "text",
        label: "lastName",
        placeholder: "Gomez",
        required: true,
        gridCols: "col-span-1"
    },
    {
        id: "password",
        name: "password",
        type: "password",
        label: "createPassword",
        required: true,
        gridCols: "col-span-2"
    },
    {
        id: "confirmPassword",
        name: "confirmPassword",
        type: "password",
        label: "confirmPassword",
        required: true,
        gridCols: "col-span-2"
    }
];

export const UserDetailsForm = ({ onSubmit }: Props) => {

    const c = useTranslations("common");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries()) as SignupFormData;

        if (data.password !== data.confirmPassword) {
            return;
        }

        onSubmit(data);
    };

    return (
        <form id="signup-form" className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
            {signupFields.map(field => (
                <div key={field.id} className={`grid gap-2 ${field.gridCols ?? ""}`}>
                    <Label htmlFor={field.id}>{c(field.label)}</Label>
                    <Input
                        id={field.id}
                        placeholder={field.placeholder}
                        name={field.name}
                        required={field.required}
                        className={field.className}
                        type={field.type}
                    />
                </div>
            ))}

            <Button type="submit" className='rounded-full h-10 mt-5 w-35 col-span-2 place-self-center cursor-pointer'>
                {c("signUp")}
            </Button>
        </form>
    )
}
