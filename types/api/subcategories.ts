export interface GetAllSubcategories {
    exitoso: boolean;
    mensaje: string;
    totalSubCategoriasEvento: number;
    subcategoriaEventos: SubcategoriaEvento[];
}

export interface SubcategoriaEvento {
    idSubcategoriaEvento: number;
    nombreSubcategoria: string;
    slugSubcategoria: string;
    categoriaEventoId: number;
    estado: boolean;
}

export interface GetSubcategoryByID {
    exitoso: boolean;
    mensaje: string;
    subcategoria: Subcategoria;
}

export interface Subcategoria {
    idSubcategoriaEvento: number;
    nombreSubcategoria: string;
    slugSubcategoria: string;
    categoriaEventoId: number;
    estado: boolean;
}
