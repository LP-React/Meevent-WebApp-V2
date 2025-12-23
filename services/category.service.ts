import { http } from "@/lib/http";
import { GetAllCategories, GetCategoryById } from "@/types/api/categories";

export const CategoryService = {

    getAll: () =>
        http<GetAllCategories>("/api/CategoriasEvento/ListarCategorias"),

    getBySlug: (id: number) =>
        http<GetCategoryById>(`/api/CategoriasEvento/BuscarCategoria/${id}`),


    // postEvent: (payload: PostEventRequest) =>
    //     http<PostEventResponse>("/api/eventos/insertEvento", {
    //         method: "POST",
    //         data: payload,
    //     }),
};
