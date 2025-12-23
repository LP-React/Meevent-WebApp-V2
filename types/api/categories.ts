export interface GetAllCategories {
    exitoso: boolean;
    mensaje: string;
    totalCategoriasEvento: number;
    categoriasEvento: CategoriasEvento[];
}

export interface CategoriasEvento {
    idCategoriaEvento: number;
    nombreCategoria: string;
    slugCategoria: string;
    estado: boolean;
}


export interface GetCategoryById {
    exitoso: boolean;
    mensaje: string;
    categoria: Categoria;
}

export interface Categoria {
    idCategoriaEvento: number;
    nombreCategoria: string;
    slugCategoria: string;
    estado: boolean;
}
