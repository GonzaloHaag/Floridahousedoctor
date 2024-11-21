import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const SectionFaqs = () => {
    return (
        <div className="flex flex-col gap-y-6">
            <div className="flex items-center gap-x-2">
                <svg width={30} height={30} fill="#174996" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>
                <h4 className="text-xl font-semibold">FAQs</h4>
            </div>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Are your services available on holidays?</AccordionTrigger>
                    <AccordionContent>
                        Our services are available on select holidays. Please contact us in advance to schedule an appointment during a holiday. We strive to be flexible and meet your needs.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>What is your response time for inquiries or service requests?</AccordionTrigger>
                    <AccordionContent>
                        We aim to respond to all inquiries within 24 hours. For urgent service requests, please use our dedicated hotline for a quicker response.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Can you provide references or testimonials from past clients?</AccordionTrigger>
                    <AccordionContent>
                        Absolutely! We believe that our clients’ satisfaction speaks volumes. Upon request, we can provide references and testimonials from past projects so you can hear directly about the quality of our work and client service.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>What kind of warranty or guarantee do you offer on your work?</AccordionTrigger>
                    <AccordionContent>
                        We stand behind the quality of our work with a comprehensive warranty that covers all labor and materials for a specified period. Details of the warranty can be provided during our initial consultation and are tailored to the specific services provided.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>How do you ensure project timelines are met?</AccordionTrigger>
                    <AccordionContent>
                        We prioritize clear communication and careful planning from the outset of every project. Each project begins with a detailed timeline, outlining key milestones and deliverables. We maintain regular updates and check-ins with you to ensure that the project stays on track and any potential delays are addressed proactively. Our goal is to complete your project on time without compromising the quality of our work.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
