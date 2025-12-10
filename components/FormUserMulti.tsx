import React, { useState } from 'react'
import { FormUsPri } from './FormUsPri'
import { FormUsSe } from './FormUsSe'
import { Button } from './ui/button'
import { useTranslations } from 'next-intl'



export const FormUserMulti = () => {
  const t = useTranslations("Register");

  const [step, setStep] = useState(1);

  const [form, setForm] = useState<any>({
    name: "",
    lastName: "",
    email: "",
    number: "",
    password: "",
  });

  const [date, setDate] = useState<Date | undefined>(undefined);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Cabro el que lee menos yo osea Aaron:");
    console.log({
      ...form,
      birthDate: date,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">

      <div className="grid grid-cols-2 gap-2 mb-5">
        <div className={`h-2 rounded-bl-3xl rounded-tr-3xl ${step >= 1 ? "bg-black" : "outline"} `}/>
        <div className={`h-2 rounded-bl-3xl rounded-tr-3xl ${step === 2 ? "bg-black" : "outline"} `}/>
      </div>

      {step === 1 && (
        <FormUsPri values={form} onChange={onChange} />
      )}

      {step === 2 && (
        <FormUsSe values={form} onChange={onChange} date={date} setDate={setDate} />
      )}

      <div className="flex justify-evenly mt-4">
        {step > 1 && (
          <Button variant="outline" onClick={() => setStep(step - 1)} type="button">
            Atrás
          </Button>
        )}

        {step < 2 ? (
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
