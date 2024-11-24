'use server';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { CardSliderProfessional } from "./CardSliderProfessional"
import { getPlumbers } from "@/actions";

export const SliderFeaturedProfessionals = async () => {
  const respuesta = await getPlumbers();
  if (!respuesta.ok) {
    return;
  }
  const plumbers = respuesta.plumbers;
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full relative px-2"
    >
      <CarouselContent>
        {
          plumbers?.map((plumber) => (
            <CarouselItem key={plumber.id} className="md:basis-1/2 lg:basis-1/4 relative">
              <CardSliderProfessional 
              plumber_imageUrl={ plumber.Image_URL } 
              plumber_rating={ plumber.Rating } 
              plumber_category={ plumber.Category } 
              plumber_name={ plumber.Name }
              plumber_phone={ plumber.Phone }
              plumber_address={ plumber.Full_Address }
              />
            </CarouselItem>
          ))
        }
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
