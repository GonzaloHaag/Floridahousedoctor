import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"

export const SliderByCity = () => {
    return (
        <Carousel
            opts={{
                align: "start",
                loop: true
            }}
            className="w-full"
        >
            <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                    <div className="flex flex-col gap-y-4 items-center text-center">
                        <Image src={'/images/city/albany.jpg'} alt="albany" sizes="100vw" width={0} height={0} className="w-full h-full rounded-t aspect-square" />
                        <span className="text-lg font-bold text-blue-site">Albany</span>
                    </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                    <div className="flex flex-col gap-y-4 items-center text-center">
                        <Image src={'/images/city/binghamton.jpg'} alt="binghamton" sizes="100vw" width={0} height={0} className="w-full h-full rounded-t aspect-square" />
                        <span className="text-lg font-bold text-blue-site">Binghamton</span>
                    </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                    <div className="flex flex-col gap-y-4 items-center text-center">
                        <Image src={'/images/city/albany.jpg'} alt="albany" sizes="100vw" width={0} height={0} className="w-full h-full rounded-t aspect-square" />
                        <span className="text-lg font-bold text-blue-site">Albany</span>
                    </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                    <div className="flex flex-col gap-y-4 items-center text-center">
                        <Image src={'/images/city/binghamton.jpg'} alt="binghamton" sizes="100vw" width={0} height={0} className="w-full h-full rounded-t aspect-square" />
                        <span className="text-lg font-bold text-blue-site">Binghamton</span>
                    </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                    <div className="flex flex-col gap-y-4 items-center text-center">
                        <Image src={'/images/city/albany.jpg'} alt="albany" sizes="100vw" width={0} height={0} className="w-full h-full rounded-t aspect-square" />
                        <span className="text-lg font-bold text-blue-site">Albany</span>
                    </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                    <div className="flex flex-col gap-y-4 items-center text-center">
                        <Image src={'/images/city/binghamton.jpg'} alt="binghamton" sizes="100vw" width={0} height={0} className="w-full h-full rounded-t aspect-square" />
                        <span className="text-lg font-bold text-blue-site">Binghamton</span>
                    </div>
                </CarouselItem>
              
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
