import React, { useState } from 'react'
import { Button } from './ui/button'
import { useTranslations } from 'next-intl'
import { FormArPri } from './FormArPri'
import { FormArSe } from './FormArSe'
import { FormArTer } from './FormArTer'



export const FormArMulti = () => {
  const t = useTranslations("Register");

  const [step, setStep] = useState(1);

  const [form, setForm] = useState<any>({
    nameAr: "",
    genre: "",
    web: "",
    fb: "",
    ig: "",
    tik: "",
    password: ""
  });


  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Cabro el que lee menos yo osea Aaron:");
    console.log({
      ...form,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">

      <div className="grid grid-cols-3 gap-2 mb-5">
        <div className={`h-2 rounded-bl-3xl rounded-tr-3xl ${step >= 1 ? "bg-black" : "outline"} `} />
        <div className={`h-2 rounded-bl-3xl rounded-tr-3xl ${step >= 2 ? "bg-black" : "outline"} `} />
        <div className={`h-2 rounded-bl-3xl rounded-tr-3xl ${step === 3 ? "bg-black" : "outline"} `} />
      </div>

      {step === 1 && (
        <FormArPri values={form} onChange={onChange} />
      )}

      {step === 2 && (
        <FormArSe values={form} onChange={onChange} />
      )}
      {step === 3 && (
        <FormArTer values={form} onChange={onChange}/>
      )}

      <div className="flex justify-evenly mt-4">
  {step > 1 && (
    <Button
      variant="outline"
      onClick={() => setStep(step - 1)}
      type="button"
    >
      Atrás
    </Button>
  )}

  {step < 3 ? (
    <Button onClick={() => setStep(step + 1)} type="button">
      Siguiente
    </Button>
  ) : (
    <Button type="submit">Ingresar</Button>
  )}
</div>

    </form>
  );
};
