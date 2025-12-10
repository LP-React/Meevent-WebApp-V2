import React, { useState } from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useTranslations } from 'next-intl'
import { ChevronDownIcon, Eye, EyeOff } from 'lucide-react'
import { Link } from "@/i18n/navigations"
import { Button } from './ui/button'
import { Calendar } from './ui/calendar'

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"




export const FormUsSe = ({
  values,
  onChange,
  date,
  setDate
}: {
  values: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  date: Date | undefined;
  setDate: (d: Date | undefined) => void;
}) => {
  const t = useTranslations("Register");
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-5">

      <div className="grid grid-cols-2 gap-2">

        <div className="grid gap-2">
          <Label htmlFor="number">{t("numero")}</Label>
          <Input
            id="number"
            name="number"
            type="number"
            placeholder="907 305 447"
            value={values.number || ""}
            onChange={onChange}
            required
            className="h-8"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="fechaN">{t("fechaN")}</Label>

          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                id="fechaN"
                className="w-48 justify-between font-normal h-8"
              >
                {date ? date.toLocaleDateString() : "Selecciona fecha"}
                <ChevronDownIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={(d) => {
                  setDate(d);
                  setOpen(false);
                }}
              />
            </PopoverContent>
          </Popover>
        </div>

      </div>

      <div className="grid gap-3">
        <Label htmlFor="password">{t("Password")}</Label>

        <div className="relative">
          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={values.password || ""}
            onChange={onChange}
            required
            className="h-8"
          />

          <div
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff className='h-4 w-4 text-muted-foreground'/> : <Eye className='h-4 w-4 text-muted-foreground'/>}
          </div>
        </div>
      </div>

    </div>
  );
};
