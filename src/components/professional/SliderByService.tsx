import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import Image from 'next/image';
export const SliderByService = () => {
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
                        <Image src={'/images/bathroom-remodeling.webp'} alt="bathroom remodeling" sizes="100vw" width={0} height={0} className="w-full h-full rounded aspect-square" />
                        <span className="text-lg font-bold text-blue-site">Bathroom Remodeling</span>
                    </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                    <div className="flex flex-col gap-y-4 items-center text-center">
                        <Image src={'/images/home-improvement.webp'} alt="home improvement" sizes="100vw" width={0} height={0} className="w-full h-full rounded aspect-square" />
                        <span className="text-lg font-bold text-blue-site">Home Improvement</span>
                    </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                    <div className="flex flex-col gap-y-4 items-center text-center">
                        <Image src={'/images/bathroom-remodeling.webp'} alt="bathroom remodeling" sizes="100vw" width={0} height={0} className="w-full h-full rounded aspect-square" />
                        <span className="text-lg font-bold text-blue-site">Bathroom Remodeling</span>
                    </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                    <div className="flex flex-col gap-y-4 items-center text-center">
                        <Image src={'/images/home-improvement.webp'} alt="home improvement" sizes="100vw" width={0} height={0} className="w-full h-full rounded aspect-square" />
                        <span className="text-lg font-bold text-blue-site">Home Improvement</span>
                    </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                    <div className="flex flex-col gap-y-4 items-center text-center">
                        <Image src={'/images/bathroom-remodeling.webp'} alt="bathroom remodeling" sizes="100vw" width={0} height={0} className="w-full h-full rounded aspect-square" />
                        <span className="text-lg font-bold text-blue-site">Bathroom Remodeling</span>
                    </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                    <div className="flex flex-col gap-y-4 items-center text-center">
                        <Image src={'/images/home-improvement.webp'} alt="home improvement" sizes="100vw" width={0} height={0} className="w-full h-full rounded aspect-square" />
                        <span className="text-lg font-bold text-blue-site">Home Improvement</span>
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
