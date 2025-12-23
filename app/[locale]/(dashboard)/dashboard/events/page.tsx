"use client"

import { Button } from "@/components/ui/button";
import { ArrowDownWideNarrow } from "lucide-react";
import { useEffect, useState } from "react";
import { EventoApi, PostEventRequest } from "@/types/api/events";
import { EventService } from "@/services/event.service";
import { EventCreate } from "@/components/Dashboard/Event/EventCreate";
import { getCookie } from "cookies-next";
import { EventCard } from "@/components/Dashboard/Event/EventCard";

export default function EventPage() {

    const [events, setEvents] = useState<EventoApi[]>([])
    const [loadingCreate, setLoadingCreate] = useState(false);

    const raw = getCookie('userData');
    const userData = raw ? JSON.parse(raw as string) : '';

    const fetchEvents = async () => {
        const data = await EventService.getAll({
            idPerfilOrganizador: userData.perfilOrganizador.id_perfil_organizador,
        });
        setEvents(data.eventos);
    };

    useEffect(() => {
        fetchEvents()
    }, [])


    const handleCreateEvent = async (payload: PostEventRequest) => {
        setLoadingCreate(true);
        try {
            await EventService.postEvent(payload);
            await fetchEvents();
            return true;
        } catch (error) {
            console.error("Error al crear evento", error);
            return false; // ❌ error
        } finally {
            setLoadingCreate(false);
        }
    };



    return (

        <div className="p-4">

            <div className="flex justify-between items-center border-b-2 pl-2 py-2">
                <h1 className="text-2xl">Events</h1>
                <div className="space-x-2">
                    <Button variant="outline" aria-label="Submit">
                        <span>Sort by</span>
                        <ArrowDownWideNarrow />
                    </Button>
                    <EventCreate onCreate={handleCreateEvent} loading={loadingCreate} organizerId={userData?.perfilOrganizador?.id_perfil_organizador} />
                </div>
            </div>

            <div className="flex flex-wrap gap-4 p-4 w-full justify-evenly">
                {events.map((eve) => (
                    <EventCard key={eve.idEvento} event={eve} />
                ))}
            </div>
        </div >
    );
}