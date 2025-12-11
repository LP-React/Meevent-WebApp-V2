import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useTranslations } from 'next-intl'


export const FormOrgPri = ({
  values,
  onChange
}: {
  values: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const t = useTranslations("organizador");

  return (
    <div className="flex flex-col gap-5 mb-5">

      <div className="grid  gap-3">
        <div className="grid gap-2">
          <Label htmlFor="nameOrg">{t("name")}</Label>
          <Input
            id="nameOrg"
            name="nameOrg"
            type="text"
            placeholder="LibrosCarlos"
            value={values.nameOrg || ""}
            onChange={onChange}
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="direc">{t("direccion")}</Label>
          <Input
            id="direc"
            name="direc"
            type="text"
            placeholder="Av. Cordillera Vilcanota"
            value={values.direc || ""}
            onChange={onChange}
            required
          />
        </div>
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
      </div>




    </div>
  );
};