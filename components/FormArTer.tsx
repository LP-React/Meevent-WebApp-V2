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




export const FormArTer = ({
  values,
  onChange,
}: {
  values: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const t = useTranslations("artista");

const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-5">
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