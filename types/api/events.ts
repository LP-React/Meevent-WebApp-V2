export interface Evento {
    idEvento: number;
    tituloEvento: string;
    slugEvento: string;
    descripcionCorta: string;
    fechaInicio: string;
    fechaFin: string;
    zonaHoraria: string;
    estadoEvento: "borrador" | "publicado";
    eventoGratuito: boolean;
    eventoOnline: boolean;
    imagenPortadaUrl: null;
    nombreOrganizador: string;
    nombreCategoria: string;
    nombreSubcategoria: string;
    nombreLocal: string;
}

export interface GetEventsListResponse {
    exitoso: boolean;
    mensaje: string;
    total_Eventos: number;
    eventos: Evento[];
}

export interface GetEventResponse {
    exitoso: boolean;
    mensaje: string;
    evento: Evento;
}