import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { UsuarioApi } from "@/types/api/users"
import { getTranslations } from "next-intl/server"
import { EditPasswordDialog } from "./EditPasswordDialog"

interface Props {
    user: UsuarioApi
}

export const NewPasswordCard = async ({ user }: Props) => {

    const c = await getTranslations("common")

    return (
        <Card className="p-2 py-5">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base">
                    {c("changePassword")}
                </CardTitle>
                <EditPasswordDialog user={user}/>
            </CardHeader>
        </Card>
    )
}
