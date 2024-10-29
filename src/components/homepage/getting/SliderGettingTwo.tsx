import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"

export const SliderGettingTwo = () => {
    return (
        <Carousel
            opts={{
                align: "start",
                loop:true
            }}
            className="w-[calc(100%-20rem)]"
        >
            <CarouselContent>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                        <div className="p-1 flex flex-col gap-y-4 items-center text-center">
                            <Image src={'/images/home-improvement.webp'} alt="home-improvement" width={200} height={100} className="rounded-t aspect-square" />
                            <h4 className="text-blue-site text-lg font-bold">Home Improvement</h4>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                        <div className="p-1 flex flex-col gap-y-4 items-center text-center">
                            <Image src={'/images/bathroom-remodeling.webp'} alt="bathroom" width={200} height={100} className="rounded-t aspect-square" />
                            <h4 className="text-blue-site text-lg font-bold">Bathroom Remodeling</h4>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                        <div className="p-1 flex flex-col gap-y-4 items-center text-center">
                            <Image src={'/images/home-improvement.webp'} alt="home-improvement" width={200} height={100} className="rounded-t aspect-square" />
                            <h4 className="text-blue-site text-lg font-bold">Home Improvement</h4>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                        <div className="p-1 flex flex-col gap-y-4 items-center text-center">
                            <Image src={'/images/bathroom-remodeling.webp'} alt="bathroom" width={200} height={100} className="rounded-t aspect-square" />
                            <h4 className="text-blue-site text-lg font-bold">Bathroom Remodeling</h4>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                        <div className="p-1 flex flex-col gap-y-4 items-center text-center">
                            <Image src={'/images/home-improvement.webp'} alt="home-improvement" width={200} height={100} className="rounded-t aspect-square" />
                            <h4 className="text-blue-site text-lg font-bold">Home Improvement</h4>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                        <div className="p-1 flex flex-col gap-y-4 items-center text-center">
                            <Image src={'/images/bathroom-remodeling.webp'} alt="bathroom" width={200} height={100} className="rounded-t aspect-square" />
                            <h4 className="text-blue-site text-lg font-bold">Bathroom Remodeling</h4>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                        <div className="p-1 flex flex-col gap-y-4 items-center text-center">
                            <Image src={'/images/home-improvement.webp'} alt="home-improvement" width={200} height={100} className="rounded-t aspect-square" />
                            <h4 className="text-blue-site text-lg font-bold">Home Improvement</h4>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                        <div className="p-1 flex flex-col gap-y-4 items-center text-center">
                            <Image src={'/images/bathroom-remodeling.webp'} alt="bathroom" width={200} height={100} className="rounded-t aspect-square" />
                            <h4 className="text-blue-site text-lg font-bold">Bathroom Remodeling</h4>
                        </div>
                    </CarouselItem>
        
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
