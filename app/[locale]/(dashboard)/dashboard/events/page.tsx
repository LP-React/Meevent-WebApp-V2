"use client"

import { Button } from "@/components/ui/button";
import { ArrowDownWideNarrow } from "lucide-react";
import { useEffect, useState } from "react";
import { EventoApi, PostEventRequest } from "@/types/api/events";
import { EventService } from "@/services/event.service";
import { EventCreate } from "@/components/Dashboard/Event/EventCreate";

export default function GamesPage() {

    const [events, setEvents] = useState<EventoApi[]>([])
    const [loadingCreate, setLoadingCreate] = useState(false);


    const fetchEvents = async () => {
        const data = await EventService.getAll({
            idPerfilOrganizador: 2,
        });

        setEvents(data.eventos);
    };


    useEffect(() => {
        fetchEvents()
    }, [])


    const handleCreateEvent = async (payload: PostEventRequest) => {
        setLoadingCreate(true);
        try {
            console.log(payload)
            await EventService.postEvent(payload);
            await fetchEvents(); // refresca lista
            return true; // ✅ éxito
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
                <h1 className="text-2xl">Games</h1>
                <div className="space-x-2">
                    <Button variant="outline" aria-label="Submit">
                        <span>Sort by</span>
                        <ArrowDownWideNarrow />
                    </Button>

                    <EventCreate
                        onCreate={handleCreateEvent}
                        loading={loadingCreate}
                    />
                </div>
            </div>

            <div className="flex flex-wrap space-x-4 space-y-4 p-2">
                {events.map((eve) => (

                    // even. &&
                    // <GameCard game={gam} key={gam.idGame} />
                    <div key={eve.idEvento}>{eve.tituloEvento}</div>
                ))}
            </div>
        </div >
    );
}