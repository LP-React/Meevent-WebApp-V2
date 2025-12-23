import { http } from "@/lib/http";
import { GetLocales, GetLocalesQuery } from "@/types/api/locales";

export const LocalesService = {

    getAll: (params?: GetLocalesQuery) =>
        http<GetLocales>("/api/locales/getLocales",
            {
                params,
            }),

    // getBySlug: (id: number) =>
    //     http<GetCategoryById>(`/api/CategoriasEvento/BuscarCategoria/${id}`),


    // postEvent: (payload: PostEventRequest) =>
    //     http<PostEventResponse>("/api/eventos/insertEvento", {
    //         method: "POST",
    //         data: payload,
    //     }),
};
