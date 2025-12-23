import { UsuarioApi } from "./users";

/* LOGIN */
export interface LoginRequest {
    correo_electronico: string;
    contrasenia: string;
}

export interface LoginResponse {
    exitoso: boolean;
    mensaje: string;
    token: string;
    usuario: UsuarioApi;
}

/* SINGUP */
export interface SignupRequest {
    correo_electronico: string;
    tipo_usuario: "normal" | "organizador" | "artista";
    nombre_completo: string;
    contrasenia: string;
    id_ciudad: number;
    telefono_contacto?: string;
    numero_telefono?: string;
    imagen_perfil_url?: string;
    fecha_nacimiento?: string;
    nombre_artistico?: string;
    biografia_artista?: string;
    genero_musical?: string;
    nombre_organizador?: string;
    descripcion_organizador?: string;
}

export interface SignupResponse {
    exitoso: boolean;
    mensaje: string;
}

export interface verifyEmailRequest {
    correo_electronico: string;
}

export interface verifyEmailResponse {
    exitoso: boolean;
    mensaje: string;
    correoExiste: boolean;
}
