import { UsuarioApi } from "@/types/api/users"
import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"
import { Pencil } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { getTranslations } from "next-intl/server"

interface Props {
    user: UsuarioApi,
}

export const ProfileHeaderCard = async ({ user }: Props) => {

    const c = await getTranslations("common")

    return (
        <Card className="p-2">
            <CardContent className="flex items-center justify-between p-6">
                <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                        <AvatarImage src={user.imagen_perfil_url ?? undefined} />
                        <AvatarFallback>
                            {user.nombre_completo.charAt(0).toUpperCase()}
                        </AvatarFallback>
                    </Avatar>

                    <div>
                        <p className="text-lg font-semibold">{user.nombre_completo}</p>
                        <p className="text-sm text-muted-foreground capitalize">
                            {user.tipo_usuario}
                        </p>
                    </div>
                </div>

                <Button variant="outline" size="sm">
                    <Pencil className="mr-2 h-4 w-4" />
                    {c("edit")}
                </Button>
            </CardContent>
        </Card>
    )
}
