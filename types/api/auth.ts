import { UsuarioApi } from "./users";


/* LOGIN */
export interface LoginRequest {
    correo_electronico: string;
    contrasena: string;
}

export interface LoginResponse {
    exitoso: boolean;
    mensaje: string;
    token: string;
    usuario: UsuarioApi;
}

/* SINGUP */
export interface SignupRequest {
    nombre_completo: string;
    correo_electronico: string;
    contrasena: string;
    numero_telefono?: string;
    imagen_perfil_url?: string;
    fecha_nacimiento?: string;
    tipo_usuario: string
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
