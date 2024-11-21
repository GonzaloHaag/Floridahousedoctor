import { getPlumbers } from "@/actions";
import { CardSliderProfessional } from "../homepage/featured-professionals/CardSliderProfessional"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"

export const SliderFaqs = async () => {
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
            className="w-full"
        >
            <CarouselContent>
                {
                    plumbers?.map((plumber) => (
                        <CarouselItem key={plumber.id} className="relative">
                            <CardSliderProfessional
                                plumber_imageUrl={plumber.Image_URL}
                                plumber_rating={plumber.Rating}
                                plumber_category={plumber.Category}
                                plumber_name={plumber.Name}
                                plumber_phone={plumber.Phone}
                                plumber_address={plumber.Full_Address}
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
