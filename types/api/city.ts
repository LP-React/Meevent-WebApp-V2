export interface GetCities {
    exitoso: boolean;
    mensaje: string;
    totalCiudades: number;
    ciudades: Ciudad[];
}

export interface GetCitiesQuery {
    idPais?: number;
}


export interface Ciudad {
    idCiudad: number;
    nombreCiudad: string;
}

