import { UsuarioApi } from "./users";

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