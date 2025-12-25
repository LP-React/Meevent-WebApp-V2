"use client"

import { ChevronsUpDownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useTranslations } from "next-intl"
import { useState } from "react"
import { Ciudad } from "@/types/api/city"

interface Props {
    cities: Ciudad[];
    onSelectCity: (id: number) => void
}

export function CityComboBox({ cities, onSelectCity }: Props) {

    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    const t = useTranslations("common")

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between"
                >
                    {value
                        ? cities.find((cit) => cit.nombreCiudad === value)?.nombreCiudad
                        : t("selectCity")}
                    <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[250px] h-[200px] p-0">
                <Command>
                    <CommandInput placeholder={t("searchSubCategory")} />
                    <CommandList>
                        <CommandEmpty>{t("noSubcategoriesFound")}</CommandEmpty>
                        <CommandGroup>
                            {cities.map((cit) => (
                                <CommandItem
                                    key={cit.idCiudad}
                                    value={cit.nombreCiudad}
                                    onSelect={() => {
                                        setValue(cit.nombreCiudad)
                                        onSelectCity(cit.idCiudad)
                                        setOpen(false)
                                    }}
                                >
                                    {cit.nombreCiudad}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}