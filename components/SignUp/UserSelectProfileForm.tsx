"use client"
import { useTranslations } from "next-intl";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Building, Star, User } from "lucide-react";
import { useState } from "react";

interface Props {
    onSubmit: (profile: string) => void;
}

const profiles = [
    {
        id: "normal",
        label: "user",
        icon: User,
        description: "userDescription"
    },
    {
        id: "artista",
        label: "artist",
        icon: Star,
        description: "artistDescription"
    },
    {
        id: "organizador",
        label: "organizer",
        icon: Building,
        description: "organizerDescription"
    }
]

export const UserSelectProfileForm = ({ onSubmit }: Props) => {

    const c = useTranslations("common");
    const [selectedProfile, setSelectedProfile] = useState<string | null>(null);


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!selectedProfile) return;
        onSubmit(selectedProfile);
    };

    return (
        <form id="userProfile-form" className="grid grid-cols-1 gap-4 place-items-center w-[80%] m-auto" onSubmit={handleSubmit}>
            {
                profiles.map((prof) => {
                    const isSelected = selectedProfile === prof.id;
                    return (
                        <Button
                            key={prof.id}
                            variant={isSelected ? "default" : "outline"}
                            type="button"
                            onClick={() => setSelectedProfile(prof.id)}
                            className="flex w-full h-25 p-4 items-center cursor-pointer gap-1"
                        >
                            <div className="flex flex-col justify-center items-center w-20 h-20 shrink-0">
                                <div>
                                    <prof.icon className="mb-2" />
                                </div>
                                <Label>{c(prof.label)}</Label>
                            </div>
                            <div className="w-0.5 bg-muted-foreground h-[85%] shrink-0 min-w-0" />
                            <p className="text-start flex-1 wrap-break-word min-w-0 pl-2">{c(prof.description)}</p>
                        </Button>
                    )
                })
            }

            <Button type="submit" className='rounded-full mt-5 h-10 w-35 col-span-1 justify-self-center cursor-pointer' disabled={!selectedProfile}>
                {c("next")}
            </Button>
        </form>
    )
}
