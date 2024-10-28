import { CardSliderProfessional } from "../homepage/featured-professionals/CardSliderProfessional"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"

export const SliderBlog = () => {
    return (
        <Carousel 
        opts={{
            align:'start',
            loop:true
        }}
        className="w-full">
            <CarouselContent>
                <CarouselItem>
                    <CardSliderProfessional />
                </CarouselItem>
                <CarouselItem>
                    <CardSliderProfessional />
                </CarouselItem>
                <CarouselItem>
                    <CardSliderProfessional />
                </CarouselItem>
                <CarouselItem>
                    <CardSliderProfessional />
                </CarouselItem>
                <CarouselItem>
                    <CardSliderProfessional />
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
