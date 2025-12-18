import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Pencil } from "lucide-react"
import { UsuarioApi } from "@/types/api/users"
import { getTranslations } from "next-intl/server"

interface Props {
    user: UsuarioApi
    onEdit?: () => void
}

export const PersonalInfoCard = async ({ user, onEdit }: Props) => {

    const [firstName, ...lastName] = user.nombre_completo.split(" ")
    const c = await getTranslations("common")

    return (
        <Card className="p-2 py-5">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base">
                    Personal information
                </CardTitle>

                <Button variant="outline" size="sm" onClick={onEdit}>
                    <Pencil className="mr-2 h-4 w-4" />
                    {c("edit")}
                </Button>
            </CardHeader>

            <CardContent className="grid grid-cols-2 gap-6 text-sm">
                <InfoItem label="First name" value={firstName} />
                <InfoItem label="Last name" value={lastName.join(" ")} />
                <InfoItem label="Email address" value={user.correo_electronico} />
                <InfoItem label="Phone" value={user.numero_telefono ?? "—"} />
                <InfoItem
                    label="Birthdate"
                    value={user.fecha_nacimiento ?? "—"}
                />
                <InfoItem
                    label="Profile type"
                    value={user.tipo_usuario}
                    capitalize
                />
            </CardContent>
        </Card>
    )
}

const InfoItem = ({
    label,
    value,
    capitalize,
}: {
    label: string
    value: string
    capitalize?: boolean
}) => (
    <div>
        <p className="text-muted-foreground mb-1">{label}</p>
        <p className={`font-medium ${capitalize ? "capitalize" : ""}`}>
            {value}
        </p>
    </div>
)
