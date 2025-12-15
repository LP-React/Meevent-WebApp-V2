import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { useTranslations } from 'next-intl'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { Bike, BusFront, Calendar, Car, CarFront, Flag, Footprints, MapPin } from 'lucide-react'
import { FieldSeparator, } from "@/components/ui/field"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'

export const Evento = () => {
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
        <div className='h-dvh'>
            <div className='w-full mb-4'>
                <img src="./limaEvent.jpg" alt="asd" />
            </div>
            <CardHeader className='gap-5 mb-5 xl:grid-cols-2 xl:items-center'>
                <div className='gap-5 grid'>
                    <CardTitle className='font-black text-2xl'>{t('titleE')}{/* Nombre event */}</CardTitle>
                    <div className='flex gap-2 items-center'>
                        <Avatar>
                            <AvatarImage src="./gatoPerfil.jpg" />
                            <AvatarFallback>??</AvatarFallback>
                        </Avatar>
                        <div>
                            <p>{t('by')}Rutas OrtegaEvents{/* Nombre del organizador */}</p>
                        </div>
                        <Button variant="outline">{t('follow')}</Button>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <div className='flex gap-2'>
                            <MapPin className='w-5' />
                            <p>Av. Marquez civil{/* Direccion mas na */}</p>
                        </div>
                        <div className='flex gap-2'>
                            <Calendar className='w-5' />
                            <p>Dec 27 from 8am to 8pm GMT-5{/* Direccion mas na */}</p>
                        </div>
                    </div>
                </div>

                <Card className="rounded-2xl border-t bg-background hidden xl:block">
                <CardHeader className="flex items-center justify-between">
                    <div>
                        <p className="font-semibold">$50</p>
                        <CardDescription>Dec 27 - 8:00 AM GMT-5</CardDescription>
                    </div>
                    <Button>{t('Get tickets')}</Button>
                </CardHeader>
            </Card>
            </CardHeader>

            <FieldSeparator />

            <CardHeader className='mt-2'>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger className='text-2xl flex items-center'>{t("overiew")}</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Our flagship product combines cutting-edge technology with sleek
                                design. Built with premium materials, it offers unparalleled
                                performance and reliability.
                            </p>

                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardHeader>

            <FieldSeparator />

            <CardHeader className="mt-5 mb-5">
                <CardTitle className='text-2xl'>{t('good')}</CardTitle>

                <Carousel opts={{ align: "start" }} className="relative w-full">
                    <CarouselContent className="w-52 
                    sm:w-72
                    md:w-full">
                        {carouselItems.map((item) => (
                            <CarouselItem
                                key={item.id}
                                className="md:basis-1/2 lg:basis-1/3"
                            >
                                <div className="p-1">
                                    <Card className='md:h-56'>
                                        <CardContent className="flex aspect-square flex-col items-start justify-start p-6 gap-3">
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
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </CardHeader>

            <FieldSeparator />

            <CardHeader className='mt-5 mb-5'>
                <CardTitle className='text-2xl mb-2'>{t('Location')}</CardTitle>
                <div className='md:flex md:gap-2'>

                    <div className='md:w-[50%]'>
                        <div className='grid gap-2'>
                            <CardDescription className='font-semibold text-black'>The mansion Mateo Pumacahua</CardDescription>
                            <CardDescription>Av. Marquez civil</CardDescription>
                            <CardDescription className='mb-5'>Chorrillos, Provincia de Lima 34012</CardDescription>
                        </div>

                        <img src="./maps.png" alt="" className='rounded-2xl w-full md:hidden' />
                        <div>
                            <CardTitle className='mt-4 mb-5'>{t('howDo')}</CardTitle>
                            <div className='mt-3 flex justify-around'>
                                <div className='flex flex-col gap-5'>
                                    <div className='flex gap-2'>
                                        <CarFront />
                                        <CardDescription>Driving</CardDescription>
                                    </div>
                                    <div className='flex gap-2'>
                                        <BusFront />
                                        <CardDescription>Public transport</CardDescription>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-5'>
                                    <div className='flex gap-2'>
                                        <Bike />
                                        <CardDescription>Biking</CardDescription>
                                    </div>
                                    <div className='flex gap-2'>
                                        <Footprints />
                                        <CardDescription>Walking</CardDescription>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <img src="./maps.png" alt="" className='rounded-2xl w-auto hidden md:block md:w-[50%]' />
                </div>
            </CardHeader>

            <FieldSeparator />

            <CardHeader className='mt-5 mb-5'>
                <CardTitle className='text-2xl mb-2'>{t('Organized')}</CardTitle>
                <Card className='bg-gray-100 border-none 
                md:h-auto'>
                    <CardHeader className='
                    md:flex 
                    md:gap-5
                    md:items-center
                    md:justify-around'>
                        <div className='flex justify-center mb-3
                        md:m-0'>
                            <Avatar className='w-20 h-20'>
                                <AvatarImage src="./gatoPerfil.jpg" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                        <div>
                            <div className='mb-3 text-center
                            md:text-start'>
                                <CardTitle>Rutas OrtegaEvets{/* Nombre de organizador */}</CardTitle>
                            </div>

                            <div className='flex justify-evenly 
                            md:gap-10'>
                                <div>
                                    <CardDescription>{t('Followers')}</CardDescription>
                                    <p className='font-semibold'>1.6k</p>
                                </div>
                                <div>
                                    <CardDescription>{t('Events')}</CardDescription>
                                    <p className='font-semibold'>44</p>
                                </div>
                                <div>
                                    <CardDescription>{t('Hosting')}</CardDescription>
                                    <p className='font-semibold'>1.6k</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-evenly mt-2
                        md:mt-0
                        md:gap-2
                        md:grid
                        md:grid-cols-2 '>
                            <Button variant="outline" className='w-[40%]
                            md:w-auto'>{t('Contact')}</Button>
                            <Button className='w-[40%]
                            md:w-auto'>{t('follow')}</Button>
                        </div>
                    </CardHeader>
                </Card>
            </CardHeader>

            <CardHeader className='flex text-blue-500 justify-center my-10'>
                <Flag />
                <CardTitle>{t('Report')}</CardTitle>
            </CardHeader>

            <FieldSeparator />

            <Card className="fixed bottom-0 left-0 right-0 z-50 rounded-none border-t bg-background">
                <CardHeader className="flex items-center justify-between">
                    <div>
                        <p className="font-semibold">$50</p>
                        <CardDescription>Dec 27 - 8:00 AM GMT-5</CardDescription>
                    </div>
                    <Button>{t('Get tickets')}</Button>
                </CardHeader>
            </Card>
        </div>
    )
}
