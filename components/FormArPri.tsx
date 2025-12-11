import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useTranslations } from 'next-intl'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const FormArPri = ({
  values,
  onChange
}: {
  values: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const t = useTranslations("artista");

  return (
    <div className="flex flex-col gap-5 mb-5">

      <div className="grid  gap-2">
        <div className="grid gap-2">
          <Label htmlFor="nameAr">{t("name")}</Label>
          <Input
            id="nameAr"
            name="nameAr"
            type="text"
            placeholder="VoladorSIS"
            value={values.nameAr || ""}
            onChange={onChange}
            required
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="genre">{t("NameArt")}</Label>

          <Select
            value={values.genre || ""}
            onValueChange={(value) =>
              onChange({
                target: {
                  name: "genre",
                  value
                }
              } as any)
            }
          >
            <SelectTrigger id="genre" className="w-auto">
              <SelectValue placeholder="Selecciona género" />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                <SelectItem value="clasica">Música Clásica</SelectItem>
                <SelectItem value="jazz">Jazz</SelectItem>
                <SelectItem value="pop">Pop</SelectItem>
                <SelectItem value="hiphop">Hip Hop</SelectItem>
                <SelectItem value="electronica">Electrónica</SelectItem>
                <SelectItem value="country">Country</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      

    </div>
  );
};