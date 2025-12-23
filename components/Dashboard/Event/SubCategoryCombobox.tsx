"use client"

import {  ChevronsUpDownIcon } from "lucide-react"
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
import { SubcategoriaEvento } from "@/types/api/subcategories"
import { useState } from "react"

interface Props {
    subcategories: SubcategoriaEvento[];
    onSelectSubCategory: (id: number) => void
}

export function SubCategoryComboBox({ subcategories, onSelectSubCategory }: Props) {

    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    const t = useTranslations("formPostEvent")

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
                        ? subcategories.find((cat) => cat.nombreSubcategoria === value)?.nombreSubcategoria
                        : t("selectSubcategory")}
                    <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[250px] h-[200px] p-0">
                <Command>
                    <CommandInput placeholder={t("searchSubCategory")} />
                    <CommandList>
                        <CommandEmpty>{t("noSubcategoriesFound")}</CommandEmpty>
                        <CommandGroup>
                            {subcategories.map((sub) => (
                                <CommandItem
                                    key={sub.idSubcategoriaEvento}
                                    value={sub.nombreSubcategoria}
                                    onSelect={() => {
                                        setValue(sub.nombreSubcategoria)
                                        onSelectSubCategory(sub.idSubcategoriaEvento)
                                        setOpen(false)
                                    }}
                                >
                                    {sub.nombreSubcategoria}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}