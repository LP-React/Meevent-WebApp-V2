import { useTranslations } from 'next-intl'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import { Card, CardContent } from '../ui/card'

export const EventGood = () => {
  const t = useTranslations('Eventos')

  const carouselItems = [
    {
      id: 1,
      title: "Highlights",
      description: '12 hours',
      description2: 'In person',
    },
    {
      id: 2,
      title: 'Refund Policy',
      description: 'Refunds up to 7 days before event',
      description2: '',
    },
  ]

  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold mb-4">
        {t("good")}
      </h2>

      <Carousel opts={{ align: "start" }} className="w-full">
        <CarouselContent>
          {carouselItems.map((item) => (
            <CarouselItem
              key={item.id}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="h-full">
                <CardContent className="flex flex-col gap-3 p-6">
                  <span className="font-semibold">
                    {item.title}
                  </span>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {item.description2}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}
