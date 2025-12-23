"use client"

import { useTranslations } from "next-intl";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { CityComboBox } from "./CityCombobox";
import { useEffect, useEffectEvent, useState } from "react";
import { CitiesService } from "@/services/cities.service";
import { Ciudad } from "@/types/api/city";

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
    organizerName: string;
    cityId: number;
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
        id: "organizerName",
        name: "organizerName",
        type: "text",
        label: "organizerName",
        placeholder: "Meevent...",
        required: true,
        gridCols: "col-span-1"
    }
];

const signupFieldsPassword: InputFieldConfig[] =
    [

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
    ]

export const OrganizerDetailsForm = ({ onSubmit }: Props) => {

    const c = useTranslations("common");
    const [cities, setCities] = useState<Ciudad[]>([])
    const [cityId, setCityId] = useState<number | null>(null)


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!cityId) {
            console.warn("Debe seleccionar una ciudad");
            return;
        }

        const formData = new FormData(e.currentTarget);

        const data: SignupFormData = {
            name: String(formData.get("name")),
            lastName: String(formData.get("lastName")),
            password: String(formData.get("password")),
            confirmPassword: String(formData.get("confirmPassword")),
            organizerName: String(formData.get("organizerName")),
            cityId
        };

        if (data.password !== data.confirmPassword) {
            return;
        }

        onSubmit(data);
    };

    useEffect(() => {
        const fetchCities = async () => {
            const resp = await CitiesService.getAll()
            setCities(resp.ciudades)
        }
        fetchCities()
    }, [])

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
            <div className="grid gap-2">
                <Label>{c("city")}</Label>
                <CityComboBox cities={cities} onSelectCity={(id) => setCityId(id)} />
            </div>

            {signupFieldsPassword.map(field => (
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
