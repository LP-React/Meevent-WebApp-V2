export interface EventoApi {
    idEvento: number;
    tituloEvento: string;
    slugEvento: string;
    descripcionEvento: string;
    descripcionCorta: string;
    fechaInicio: string;
    fechaFin: string;
    zonaHoraria: string;
    estadoEvento: string;
    estadoEventoCliente: string;
    estadoEventoAdmin: string;
    capacidadEvento: number;
    eventoGratuito: boolean;
    eventoOnline: boolean;
    imagenPortadaUrl: string;
    fechaCreacion: string;
    fechaActualizacion: string;
    organizador: Organizador;
    subcategoria: Subcategoria;
    ubicacion: Ubicacion;
}

export interface Organizador {
    idPerfilOrganizador: number;
    nombreOrganizador: string;
    descripcionOrganizador: string;
    sitioWeb: string;
    logoUrl: string;
    facebookUrl: string;
    instagramUrl: string;
    tiktokUrl: string;
    twitterUrl: string;
    direccionOrganizador: string;
    telefonoContacto: string;
}

export interface Subcategoria {
    idSubcategoriaEvento: number;
    nombreSubcategoria: string;
    slugSubcategoria: string;
    categoria: Categoria;
}

export interface Categoria {
    idCategoriaEvento: number;
    nombreCategoria: string;
    slugCategoria: string;
    iconoUrl: string;
}

export interface Ubicacion {
    idPais: number;
    nombrePais: string;
    codigoISO: string;
    idCiudad: number;
    nombreCiudad: string;
    idLocal: number;
    nombreLocal: string;
    capacidadLocal: number;
    direccionLocal: string;
    latitud: number;
    longitud: number;
}

/* /api/eventos/listarEventosCompletos */
export interface GetEventsListResponse {
    exitoso: boolean;
    mensaje: string;
    total_Eventos: number;
    eventos: EventoApi[];
}

/* QUERYS PARA EL GETALL */
export interface GetEventsQuery {
    idPerfilOrganizador?: number;
    titulo?: string;
    eventoGratuito?: boolean;
    eventoOnline?: boolean;
    estadoEvento?: string;
    idSubCategoria?: string;
    fchDesde?: string;
    fchHasta?: string;
}

/* GET 1 EVENT */
export interface GetEventResponse {
    exitoso: boolean;
    mensaje: string;
    evento: EventoApi;
}

/* POST REQUEST */
export interface PostEventRequest {
    tituloEvento: string;
    descripcionEvento: string;
    descripcionCorta: string;
    fechaInicio: string;
    fechaFin: string;
    zonaHoraria: string;
    capacidadEvento: number;
    eventoGratuito: boolean;
    eventoOnline: boolean;
    estadoEvento: string;
    imagenPortadaUrl: string;
    perfilOrganizadorId: number;
    subcategoriaEventoId: number;
    localId: number | null;
}


/* POST RESPONSE */
export interface PostEventResponse {
    exitoso: boolean;
    mensaje: string;
    evento: EventoApi;
}

/* POST STRUCTURE */
export interface Post {
    tituloEvento: string;
    descripcionEvento: string;
    descripcionCorta: string;
    fechaInicio: string;
    fechaFin: string;
    zonaHoraria: string;
    capacidadEvento: number;
    eventoGratuito: boolean;
    eventoOnline: boolean;
    estadoEvento: string;
    imagenPortadaUrl: string;
    perfilOrganizadorId: number;
    subcategoriaEventoId: number;
    localId: number;
}


/* PUT */

export interface PutEventRequest {
    tituloEvento: string;
    descripcionEvento: string;
    descripcionCorta: string;
    fechaInicio: string;
    fechaFin: string;
    zonaHoraria: string;
    estadoEvento: string;
    capacidadEvento: number;
    eventoGratuito: boolean;
    eventoOnline: boolean;
    imagenPortadaUrl: string;
    subcategoriaEventoId: number;
    localId: number;
}

export interface PutEventResponse {
    exitoso: boolean;
    mensaje: string;
    evento: EventoApi;
}
