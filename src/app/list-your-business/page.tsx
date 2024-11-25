import { Container, Footer, ItemsOurSolutions, ItemWorks, LinkListYourBusinness, SectionTestimonials } from "@/components";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "List Your Businness | Home Services Directory",
    description: "Services Directory Description",
  };
  
export default function ListYourBusinnesPage() {
    return (
        <div className="flex flex-col bg-inherit">
            <section className="flex flex-col py-6 gap-y-4 px-4 items-center justify-center text-center bg-[url('/images/hsd-bg05.webp')] w-full min-h-[27rem] bg-cover bg-center text-slate-100">
                <h1 className="text-3xl md:text-5xl font-black">List Your Home Service Business</h1>
                <p className="md:text-lg max-w-4xl">
                    On this page, you’ll find clear guidance on how our platform works, the benefits it offers, and how you can make the most of our directory. Whether you’re claiming an existing listing or creating a new one, our streamlined process is tailored to fit your needs.
                </p>
            </section>
            <Container>
                <div className="w-full flex flex-col lg:grid lg:grid-cols-6 gap-x-16 mt-10 mb-20 bg-inherit">
                    <div className="flex flex-col lg:col-span-2 lg:sticky lg:top-0 lg:self-start w-full">
                        <LinkListYourBusinness
                            href="#how-it-works"
                            titleLink="how-it-works"
                            icon={<svg width={18} height={18} className="fill-blue-site transition-colors duration-300 group-hover:fill-slate-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>}
                            title="How it works?"
                        />
                        <LinkListYourBusinness
                            href="#why-choose-us"
                            titleLink="why-choose-us"
                            icon={<svg width={18} height={18} className="fill-blue-site transition-colors duration-300 group-hover:fill-slate-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z" /></svg>}
                            title="Why Choose Us?"
                        />
                        <LinkListYourBusinness
                            href="#solutions"
                            titleLink="solutions"
                            icon={<svg width={18} height={18} className="fill-blue-site transition-colors duration-300 group-hover:fill-slate-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M480 32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L381.7 53c-48 48-113.1 75-181 75l-8.7 0-32 0-96 0c-35.3 0-64 28.7-64 64l0 96c0 35.3 28.7 64 64 64l0 128c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-128 8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-147.6c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4L480 32zm-64 76.7L416 240l0 131.3C357.2 317.8 280.5 288 200.7 288l-8.7 0 0-96 8.7 0c79.8 0 156.5-29.8 215.3-83.3z" /></svg>}
                            title="Our Solutions"
                        />
                        <LinkListYourBusinness
                            href="#"
                            titleLink="get-started"
                            icon={<svg width={18} height={18} className="fill-blue-site transition-colors duration-300 group-hover:fill-slate-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152L0 424c0 48.6 39.4 88 88 88l272 0c48.6 0 88-39.4 88-88l0-112c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 22.1-17.9 40-40 40L88 464c-22.1 0-40-17.9-40-40l0-272c0-22.1 17.9-40 40-40l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 64z" /></svg>}
                            title="Get Listed"
                        />
                        <LinkListYourBusinness
                            href="#faqs"
                            titleLink="faqs"
                            icon={<svg width={18} height={18} className="fill-blue-site transition-colors duration-300 group-hover:fill-slate-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>}
                            title="FAQs"
                        />
                    </div>
                    <div className="flex flex-col gap-y-6 col-span-4 mt-8">
                        <div className="flex flex-col gap-y-2">
                            <h2 className="text-2xl text-blue-site text-center font-extrabold">Connecting Home Service Professionals to Clients</h2>
                            <p>
                                Welcome, respected home service professionals, to your dedicated portal within our directory. Our mission is to close the gap between your services and clients seeking exceptional home improvements. This portal is crafted to support your journey with us, whether you’re registering your services or enhancing your existing profile.
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-4 scroll-mt-10" id="how-it-works">
                            <h2 className="font-extrabold text-2xl text-blue-site">How it works?</h2>
                            <ItemWorks
                                title="Fill Out the Contact Form"
                                text="Let us know if you’re updating an existing profile or adding a new listing. Provide comprehensive details about your home improvement services, including specialties, areas served, and any specific requests."
                            />
                            <ItemWorks title="Submit Your Details" text="Once you complete the form with the required information, submit it to us for review." />
                            <ItemWorks title="Review and Verification" text="Our team will review your submission, verifying the details for accuracy and completeness." />
                            <ItemWorks title="Confirmation and Follow-Up" text="After review, we’ll reach out to you with a confirmation and next steps, whether it’s to finalize claiming your listing or to guide you through the process of being added to our directory." />
                            <ItemWorks title="Broaden Your Professional Reach" text="Being part of our directory connects you with a wider client base, helping to extend your professional footprint and enhance your online visibility" />
                        </div>
                        <hr />
                        <div className="flex flex-col gap-y-2 scroll-mt-10" id="why-choose-us">
                            <h2 className="text-2xl text-blue-site text-center font-extrabold">Why Choose Us?</h2>
                            <p className="text-slate-800">
                                Step into the spotlight with our directory, your new partner in home improvement excellence. We’re here to showcase your services to clients who are looking for experts like you. It’s a breeze to get listed and tap into the power of targeted marketing. We’re in the business of connecting – not just professionals to clients, but you to a future of growth and opportunity. Joining us means joining a network that supports and celebrates your work. Skip the red tape and management mazes; with us, it’s all about giving you the freedom to focus on what you do best – improving homes.
                            </p>
                        </div>
                        <hr />
                        <div className="flex flex-col gap-y-2 scroll-mt-10" id="solutions">
                            <h2 className="text-2xl text-blue-site text-center font-extrabold">Our Solutions</h2>
                            <p className="text-slate-800">
                                We offer a suite of solutions tailored to meet the diverse needs of home service professionals seeking to enhance their online presence and reach out to more potential clients.
                            </p>
                            <ItemsOurSolutions />
                        </div>
                        <hr />
                        <div className="flex flex-col gap-y-2 scroll-mt-10" id="faqs">
                            <h2 className="text-2xl text-slate-900 text-center font-extrabold">FAQs</h2>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="md:text-lg">How can I list my business in the directory?</AccordionTrigger>
                                    <AccordionContent>
                                        You can request to be listed by filling out our submission form with details about your business type, services offered, location, and contact information. Our team will review and verify your information before listing.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="md:text-lg">Is there a fee to be listed in the directory?</AccordionTrigger>
                                    <AccordionContent>
                                        We offer a free basic listing option. However, for enhanced visibility and features, you can opt for our paid featured listing service.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="md:text-lg">How does the featured listing work?</AccordionTrigger>
                                    <AccordionContent>
                                        A featured listing gives your profile a prominent placement in our directory, increasing visibility and potential engagement. It includes additional features like highlighted profiles and priority placement in search results.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger className="md:text-lg">Can I update my listing information after it&apos;s live?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes, you can update your listing information. Simply contact us with the changes you want to make, and our team will assist you in updating your profile.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-5">
                                    <AccordionTrigger className="md:text-lg">How do you ensure the quality and accuracy of listings?</AccordionTrigger>
                                    <AccordionContent>
                                        Our team conducts a thorough verification process for each listing to ensure accuracy and maintain the quality of our directory.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-6">
                                    <AccordionTrigger className="md:text-lg">Can I track how many people view my profile?</AccordionTrigger>
                                    <AccordionContent>
                                        Currently, we do not provide individual profile view tracking, but we are constantly updating our services and may offer this feature in the future.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-7">
                                    <AccordionTrigger className="md:text-lg">Who do I contact for support?</AccordionTrigger>
                                    <AccordionContent>
                                        For general support requests or questions, please use the form on our ‘Contact Us’ page. Our team is ready to assist you with any inquiries or issues you may have.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </Container>
            <SectionTestimonials />
            <Footer />
        </div>
    );
}