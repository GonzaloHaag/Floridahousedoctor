import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"

export const SliderGetting = () => {
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
                            <Image src={'/images/general-contractor.webp'} alt="contractor" width={200} height={100} className="rounded-t" />
                            <h4 className="text-blue-site text-lg font-bold">General Contractors</h4>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                        <div className="p-1 flex flex-col gap-y-4 items-center text-center">
                            <Image src={'/images/electrician.webp'} alt="contractor" width={200} height={100} className="rounded-t" />
                            <h4 className="text-blue-site text-lg font-bold">Electricians</h4>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                        <div className="p-1 flex flex-col gap-y-4 items-center text-center">
                            <Image src={'/images/general-contractor.webp'} alt="contractor" width={200} height={100} className="rounded-t" />
                            <h4 className="text-blue-site text-lg font-bold">General Contractors</h4>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                        <div className="p-1 flex flex-col gap-y-4 items-center text-center">
                            <Image src={'/images/electrician.webp'} alt="contractor" width={200} height={100} className="rounded-t" />
                            <h4 className="text-blue-site text-lg font-bold">Electricians</h4>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                        <div className="p-1 flex flex-col gap-y-4 items-center text-center">
                            <Image src={'/images/general-contractor.webp'} alt="contractor" width={200} height={100} className="rounded-t" />
                            <h4 className="text-blue-site text-lg font-bold">General Contractors</h4>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                        <div className="p-1 flex flex-col gap-y-4 items-center text-center">
                            <Image src={'/images/electrician.webp'} alt="contractor" width={200} height={100} className="rounded-t" />
                            <h4 className="text-blue-site text-lg font-bold">Electricians</h4>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                        <div className="p-1 flex flex-col gap-y-4 items-center text-center">
                            <Image src={'/images/general-contractor.webp'} alt="contractor" width={200} height={100} className="rounded-t" />
                            <h4 className="text-blue-site text-lg font-bold">General Contractors</h4>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                        <div className="p-1 flex flex-col gap-y-4 items-center text-center">
                            <Image src={'/images/electrician.webp'} alt="contractor" width={200} height={100} className="rounded-t" />
                            <h4 className="text-blue-site text-lg font-bold">Electricians</h4>
                        </div>
                    </CarouselItem>
        
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}