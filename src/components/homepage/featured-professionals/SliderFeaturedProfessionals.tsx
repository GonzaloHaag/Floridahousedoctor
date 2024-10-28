
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { CardSliderProfessional } from "./CardSliderProfessional"

export const SliderFeaturedProfessionals = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop:true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
            <CardSliderProfessional />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
