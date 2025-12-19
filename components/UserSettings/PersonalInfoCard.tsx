import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UsuarioApi } from "@/types/api/users"
import { getTranslations } from "next-intl/server"
import { EditInformationDialog } from "./EditInformationDialog"

interface Props {
    user: UsuarioApi
}

export const PersonalInfoCard = async ({ user }: Props) => {

    const t = await getTranslations("settingsPage")

    return (
        <Card className="p-2 py-5">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base">
                    {t("personalInformation")}
                </CardTitle>
                <EditInformationDialog user={user}/>
            </CardHeader>

            <CardContent className="grid grid-cols-2 gap-6 text-sm">
                <InfoItem label="First name" value={user.nombre_completo} />
                <InfoItem label="Email address" value={user.correo_electronico} />
                <InfoItem label="Phone" value={user.numero_telefono ?? "—"} />
                <InfoItem label="Birthdate" value={user.fecha_nacimiento ?? "—"} />
                <InfoItem label="Profile type" value={user.tipo_usuario} capitalize />
            </CardContent>
        </Card>
    )
}

const InfoItem = ({ label, value, capitalize, }: {
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
