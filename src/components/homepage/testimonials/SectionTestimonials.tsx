import Image from "next/image"
import { SliderTestimonials } from "./SliderTestimonials"

export const SectionTestimonials = () => {
    return (
        <section className="w-full min-h-[90vh] bg-[url('/images/hsd-bg04.webp')] bg-blue-site bg-cover bg-center py-20 px-8 md:p-20">
            <div className="flex flex-col gap-y-4 text-center items-center text-slate-100">
                <h4 className="text-3xl md:text-5xl font-bold">Real Stories, Genuine Experiences</h4>
                <p className="text-lg w-full md:max-w-4xl">
                    Hear from our professionals and clients about their successful home improvement projects. Their testimonials reflect the positive impact and strong connections made possible by our dedicated home service community.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10 w-full md:max-w-[1600px] mx-auto items-center mt-10">
                <Image src={'/images/handshake.webp'} alt="handshake" width={600} height={600} />
                <SliderTestimonials />
            </div>
        </section>
    )
}
