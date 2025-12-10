import React, { useState } from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useTranslations } from 'next-intl'
import { Eye, EyeOff } from 'lucide-react'
import { Link } from "@/i18n/navigations"
import { Button } from './ui/button'


export const FormUsPri = ({
  values,
  onChange
}: {
  values: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const t = useTranslations("Register");

  return (
    <div className="flex flex-col gap-5 mb-5">

      <div className="grid grid-cols-2 gap-2">
        <div className="grid gap-2">
          <Label htmlFor="name">{t("name")}</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Aaron"
            value={values.name || ""}
            onChange={onChange}
            required
            className="h-8"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="lastName">{t("lastName")}</Label>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Gomez"
            value={values.lastName || ""}
            onChange={onChange}
            required
            className="h-8"
          />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="email">{t("Email")}</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="m@example.com"
          value={values.email || ""}
          onChange={onChange}
          required
          className="h-8"
        />
      </div>

    </div>
  );
};