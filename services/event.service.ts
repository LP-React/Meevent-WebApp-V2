import { http } from "@/lib/http";
import { GetEventResponse, GetEventsListResponse, GetEventsQuery, PostEventRequest, PostEventResponse, PutEventRequest, PutEventResponse } from "@/types/api/events";

export const EventService = {

    getAll: (params?: GetEventsQuery) =>
        http<GetEventsListResponse>(
            "/api/eventos/getEventos",
            {
                params,
            }
        ),

    getBySlug: (slug: string) =>
        http<GetEventResponse>(`/api/eventos/getslug/${slug}`),


    postEvent: (payload: PostEventRequest) =>
        http<PostEventResponse>("/api/eventos/insertEvento", {
            method: "POST",
            data: payload,
        }),

    putEvent: (id: number, payload: PutEventRequest) =>
        http<PutEventResponse>(`/api/eventos/updateEvento/${id}`, {
            method: "PUT",
            data: payload,
        }),
};
