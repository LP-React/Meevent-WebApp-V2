import { SignIn } from "@/components/SignInButton"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "@/i18n/navigations"
import { ArrowLeft, Chromium, Eye } from "lucide-react"
import { useTranslations } from "next-intl"

export default function LoginPage() {
  const t = useTranslations('Login')
  return (
    <div>
      <div className="bg-[url('/fondo.jpg')] bg-black/55 bg-blend-multiply grid  grid-cols-1 sm:grid-cols-1 sm:p-0 gap-3 bg-cover h-dvh md:p-4 lg:grid-cols-[2fr_1.5fr] xl:grid-cols-[2fr_1.5fr]">
        <Card className="hidden bg-transparent h-full flex-col justify-between p-10 border-none sm:hidden lg:flex lg:p-1 xl:p-10">
          <CardHeader className="flex justify-between items-center">
            <CardTitle className="text-white text-3xl">Meevent</CardTitle>
            <Link href="./">
              <CardAction className="flex text-white ">
                <ArrowLeft className="mr-1" />{t("BackTo")}
              </CardAction>
            </Link>
          </CardHeader>

          <div className="p-5">
            <CardTitle className="text-white text-5xl mb-5">
              Edit Smarter. Export Faster.
              <p>Create Anywhere.</p>
            </CardTitle>

            <CardDescription className="text-white opacity-80">
              From quick social media clips to full-length videos our powerful editor
              <p>lets you work across devices.</p>
            </CardDescription>

          </div>
        </Card>

        <Card className="flex rounded-none justify-center p-1 sm:p-5 sm:rounded-none md:rounded-xl md:p-8 lg:p-1 xl:p-10">
          <CardHeader className="mb-4">
            <CardTitle className="text-5xl mb-2">{t("Welcome")}</CardTitle>
            <CardDescription>
              {t("Log")}
            </CardDescription>

          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">{t("Email")}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    className="h-12"
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">{t("Password")}</Label>
                  </div>
                  <div className="relative">
                    <Input id="password" type="password" required className="h-12" />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="flex justify-between mt-1 mb-5">
                    <div className="flex items-center">
                      <Checkbox className="mr-1" />
                      <span>{t("Remember")}</span>
                    </div>
                    <Link href="/account/reset-password" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                      {t("ForgotPassword")}
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full rounded-full h-12">
              {t("Login")}
            </Button>
            <div className="flex items-center w-full my-4">
              <div className="grow border-t border-gray-300 dark:border-gray-700"></div>
              <span className="shrink-0 mx-4 text-sm text-muted-foreground">
                {t("OrConnect")}
              </span>
              <div className="grow border-t border-gray-300 dark:border-gray-700"></div>
            </div>
            <SignIn />
            <div className="mt-5">
              <p>{t("DontHave")} <Link href="#" className="font-bold">{t("Sign")}</Link></p>
            </div>
          </CardFooter>
        </Card>

      </div>
    </div>
  )
}
