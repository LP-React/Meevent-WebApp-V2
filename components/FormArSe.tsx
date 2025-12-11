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




export const FormArSe = ({
  values,
  onChange,
}: {
  values: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const t = useTranslations("artista");

  const socialFields = [
    { name: "web", placeholder: "Sitio web" },
    { name: "fb", placeholder: "Facebook" },
    { name: "ig", placeholder: "Instagram" },
    { name: "tik", placeholder: "TikTok" },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="grid gap-3">
        <Label>{t("redesAr")}</Label>

        {socialFields.map((field) => (
          <Input
            key={field.name}
            id={field.name}
            name={field.name}
            type="text"
            placeholder={field.placeholder}
            value={values[field.name] || ""}
            onChange={onChange}
            required
            className="h-8"
          />
        ))}
      </div>
    </div>
  );
};