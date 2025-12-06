import { useTranslations } from "next-intl";
import ButtonGoogle from "@/components/ButtonGoogle"

export default function Home() {

  const t = useTranslations('Navbar')

  return (
    <div className="flex min-h-screen items-center justify-center font-sans  bg-background text-foreground bg-">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight">
            {t('title')}
          </h1>
          <ButtonGoogle/>
        </div>
      </main>
    </div>
  );
}
