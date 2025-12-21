import { http } from "@/lib/http";
import { GetEventResponse, GetEventsListResponse, GetEventsQuery, PostEventRequest, PostEventResponse } from "@/types/api/events";

export const EventService = {

    getAll: (params?: GetEventsQuery) =>
        http<GetEventsListResponse>(
            "/api/eventos/listarEventosCompletos",
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
};
