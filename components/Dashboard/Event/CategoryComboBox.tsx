"use client"


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
import { CategoriasEvento } from "@/types/api/categories"
import { ChevronsUpDownIcon } from "lucide-react"
import { useTranslations } from "next-intl"
import { useState } from "react"

interface Props {
    categories: CategoriasEvento[];
    onSelectCategory: (id: number) => void
}

export function CategoryComboBox({ categories, onSelectCategory }: Props) {

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
                        ? categories.find((cat) => cat.nombreCategoria === value)?.nombreCategoria
                        : t("selectCategory")}
                    <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[250px] h-[200px] p-0">
                <Command>
                    <CommandInput placeholder={t("searchCategory")} />
                    <CommandList>
                        <CommandEmpty>{t("noCategoriesFound")}</CommandEmpty>
                        <CommandGroup>
                            {categories.map((cat) => (
                                <CommandItem
                                    key={cat.idCategoriaEvento}
                                    value={cat.nombreCategoria}
                                    onSelect={() => {
                                        setValue(cat.nombreCategoria)
                                        onSelectCategory(cat.idCategoriaEvento)
                                        setOpen(false)
                                    }}
                                >
                                    {cat.nombreCategoria}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}