import { http } from "@/lib/http";
import { GetCities, GetCitiesQuery } from "@/types/api/city";

export const CitiesService = {

    getAll: (params?: GetCitiesQuery) =>
        http<GetCities>("/api/ciudades/getCiudades",
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
