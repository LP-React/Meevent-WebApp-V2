export interface GetLocales {
    exitoso: boolean;
    mensaje: string;
    totalLocales: number;
    locales: Local[];
}

export interface GetLocalesQuery {
    idCiudad?: number;
}



export interface Local {
    idLocal: number;
    nombreLocal: string;
    capacidadLocal: number;
    direccionLocal: string;
    ciudadId: number;
    slugLocal: string;
    latitud: number;
    longitud: number;
}
