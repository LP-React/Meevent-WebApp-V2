export interface UsuarioApi {
    id_usuario: number;
    nombre_completo: string;
    correo_electronico: string;
    numero_telefono: string;
    imagen_perfil_url: null | string;
    fecha_nacimiento: string | null;
    tipo_usuario: "artista" | "normal" | "organizador";
}

export interface GetUsersResponse {
    exitoso: boolean;
    mensaje: string;
    usuarios: UsuarioApi[];
}