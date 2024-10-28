import { Container, Footer, SectionBackground, SectionTestimonials, SliderByService } from "@/components";

export default function ProfessionalByServicePage() {
    return (
        <div className="w-full flex flex-col bg-inherit">
            <SectionBackground title="Browse by Services" text="Navigate through our extensive directory by service type to find the exact professional you need. From plumbing and electrical work to remodeling and landscaping, our categorized listings make it easy to locate top-rated experts for your specific home improvement projects." />

            <section className="w-full bg-bg-gray-section py-20 flex flex-col gap-y-6">
                <Container>
                    <div className="flex flex-col gap-y-2 bg-inherit items-center text-center">
                        <svg width={30} height={30} fill="#e6a424" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40 0 32 0 352 256 0 0-352 0-32 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM96 96L64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l32 0L96 96zM416 480l32 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-32 0 0 384zM224 208c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 48 48 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-48 0 0 48c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l48 0 0-48z" /></svg>
                        <h2 className="text-4xl text-blue-site font-extrabold">Popular Services</h2>
                    </div>
                    <div className="mt-10 bg-inherit flex flex-col gap-y-20">
                        <SliderByService />
                        <div className="flex items-center gap-x-1">
                            <svg width={40} height={40} fill="#e6a424" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40 0 32 0 352 256 0 0-352 0-32 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM96 96L64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l32 0L96 96zM416 480l32 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-32 0 0 384zM224 208c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 48 48 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-48 0 0 48c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l48 0 0-48z" /></svg>
                            <span className="text-2xl text-blue-site font-bold">All Services</span>
                        </div>
                    </div>
                </Container>
            </section>
            <SectionTestimonials />
            <Footer />
        </div>
    );
}