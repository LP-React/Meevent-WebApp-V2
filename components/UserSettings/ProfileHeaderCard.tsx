import { UsuarioApi } from "@/types/api/users"
import Image from "next/image"
import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"
import { Pencil } from "lucide-react"

interface Props {
    userData: UsuarioApi,
    onEdit?: () => void
}

export const ProfileHeaderCard = ({ userData, onEdit }: Props) => {
    return (
        <Card>
            <CardContent className="flex items-center justify-between p-6">
                <div className="flex items-center gap-4">
                    {/* <Avatar className="h-16 w-16">
                        <AvatarImage src={user.url_profile ?? undefined} />
                        <AvatarFallback>
                            {user.fullname.charAt(0).toUpperCase()}
                        </AvatarFallback>
                    </Avatar> */}

                    <div>
                        <p className="text-lg font-semibold">{userData.nombre_completo}</p>
                        <p className="text-sm text-muted-foreground capitalize">
                            {userData.tipo_usuario}
                        </p>
                    </div>
                </div>

                <Button variant="outline" size="sm" onClick={onEdit}>
                    <Pencil className="mr-2 h-4 w-4" />
                    Edit
                </Button>
            </CardContent>
        </Card>
    )
}
