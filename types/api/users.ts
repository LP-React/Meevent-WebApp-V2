export interface UsuarioApi {
    id_usuario: number;
    nombre_completo: string;
    tipo_usuario: string;
    correo_electronico: string;
    numero_telefono: string;
    imagen_perfil_url: string;
    fecha_nacimiento: string;
    email_verificado: boolean;
    cuenta_activa: boolean;
    ubicacion: Ubicacion;
    perfilArtista: null;
    perfilOrganizador: PerfilOrganizador;
}

export interface PerfilOrganizador {
    id_perfil_organizador: number;
    nombre_organizador: string;
    descripcion_organizador: string;
    direccion_organizador: string;
    telefono_contacto: string;
    sitio_web: string;
    logo_url: string;
    facebook_url: string;
    instagram_url: string;
    tiktok_url: string;
    twitter_url: string;
}

export interface Ubicacion {
    id_ciudad: number;
    nombre_ciudad: string;
    id_pais: number;
    nombre_pais: string;
    codigo_iso: string;
}


export interface GetUsersResponse {
    exitoso: boolean;
    mensaje: string;
    usuarios: UsuarioApi[];
}

export interface PatchUserRequest {
    id_usuario?: number;
    nombre_completo?: string;
    id_ciudad?: number;
    numero_telefono?: string;
    imagen_perfil_url?: string;
    nombre_artistico?: string;
    biografia_artista?: string;
    genero_musical?: string;
    nombre_organizador?: string;
    descripcion_organizador?: string;
    telefono_contacto?: string;
}

export interface PatchUserResponse {
    exitoso: boolean;
    mensaje: string;
    usuarioActualizado: UsuarioApi;
}
