import { EventService } from '@/services/event.service';
import { getTranslations } from 'next-intl/server';
import { EventCard } from '@/components/EventCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export default async function Home() {

  const c = await getTranslations("common")

  const now = new Date()

  const oneMonthLater = new Date(now)
  oneMonthLater.setMonth(oneMonthLater.getMonth() + 1)


  const eventsFree = await EventService.getAll({ eventoGratuito: true })
  const eventsOnline = await EventService.getAll({ eventoOnline: true })
  const eventsThisMonth = await EventService.getAll({
    fchDesde: now.toISOString(),
    fchHasta: oneMonthLater.toISOString(),
  })

  return (
    <main className="mx-auto min-h-screen w-[80%] py-28">
      {/* Título */}
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-semibold">Eventos Gratuitos</h3>
      </div>

      {/* Carrusel */}
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {eventsFree.eventos.map(event => (
            <CarouselItem
              key={event.idEvento}
              className="basis-full sm:basis-1/2 lg:basis-1/4"
            >
              <EventCard event={event} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>




      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-semibold">Eventos Online</h3>
      </div>

      {/* Carrusel */}
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {eventsOnline.eventos.map(event => (
            <CarouselItem
              key={event.idEvento}
              className="basis-full sm:basis-1/2 lg:basis-1/4"
            >
              <EventCard event={event} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>





      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-semibold">Eventos de este mes</h3>
      </div>

      {/* Carrusel */}
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {eventsThisMonth.eventos.map(event => (
            <CarouselItem
              key={event.idEvento}
              className="basis-full sm:basis-1/2 lg:basis-1/4"
            >
              <EventCard event={event} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  );
}
