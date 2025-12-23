import { http } from "@/lib/http";
import { GetAllSubcategories, GetSubcategoryByID } from "@/types/api/subcategories";

export const SubCategoryService = {

    getAll: () =>
        http<GetAllSubcategories>("/api/SubcategoriasEvento/ListarSubCategorias"),

    getBySlug: (id: number) =>
        http<GetSubcategoryByID>(`/api/SubcategoriasEvento/BuscarSubCategorias/${id}`),


    // postEvent: (payload: PostEventRequest) =>
    //     http<PostEventResponse>("/api/eventos/insertEvento", {
    //         method: "POST",
    //         data: payload,
    //     }),
};
