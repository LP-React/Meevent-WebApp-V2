import { http } from "@/lib/http";
import { GetEventResponse, GetEventsListResponse } from "@/types/api/events";

export const EventService = {
    getAll: () =>
        http<GetEventsListResponse>("/api/eventos/getEventos"),

    getBySlug: (slug: string) =>
        http<GetEventResponse>(`/api/eventos/getslug/${slug}`),

    // patchEvent: async (id: number, payload: PatchUserRequest) =>
    //     http<PatchUserResponse>(`/api/Usuarios/editarUsuario/${id}`, {
    //         method: "PATCH",
    //         data: payload
    //     })

};
