import { Container, Footer, PreFooter, SectionBgResources, SliderFaqs } from "@/components";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


export default function FaqsPage() {
    return (
        <div className="flex flex-col bg-inherit">
            <SectionBgResources title="FAQs" text="Welcome to our FAQs page, where we provide clear, concise answers to common questions about our listing, our directory services, and general inquiries. Explore this resource to gain better insights and understanding, and if you have a question that isn’t covered, feel free to reach out to us directly." />
            <div className="w-full bg-bg-gray-section">
                <Container>
                    <section className="w-full py-12 bg-inherit grid grid-cols-1 lg:grid-cols-3 gap-x-20">
                        <div className="lg:col-span-2 flex flex-col gap-y-6">
                            <h2 className="text-blue-site text-lg font-bold">How do I find a home service professional in my area?</h2>
                            <p>
                                To locate a home service professional near you, utilize our search tool and specify your project type or preferred business features. Our robust filtering options allow you to refine your search based on services, location, professional type, and more. This makes it easy to find the ideal company that meet your requirements for your next project.
                            </p>
                            <div className="flex flex-col gap-y-10">
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>Can I find home service professional for any project on your directory?</AccordionTrigger>
                                        <AccordionContent>
                                            Our directory is a comprehensive source for a variety of home service services. While we strive to cover an extensive range, we’re always expanding our listings to accommodate more industries. Your feedback is invaluable to us. So if there’s a particular service or industry you’re looking for and can’t find, let us know, and we’ll try our best to include it.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>Is there a cost to use the directory?</AccordionTrigger>
                                        <AccordionContent>
                                            Our home service directory is a free resource for patients. We provide a platform where you can effortlessly search for home service professionals without any fees. We believe that access to useful and up-to-date information should be available to everyone at no cost.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>How are home service professional vetted before being listed?</AccordionTrigger>
                                        <AccordionContent>
                                            Home service professionals on our directory are vetted through a verification process that includes checking credentials, licensure, and good standing across online platforms. We also consider patient reviews and feedback to ensure we present you with reputable service providers.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-4">
                                        <AccordionTrigger>How do you rate the businesses?</AccordionTrigger>
                                        <AccordionContent>
                                            We have a rating system for the home service professionals in our directory using our own comprehensive research across various platforms. Additionally, users can view individual listings to see real client reviews and leave their own feedback. This ensures that our ratings are based on thorough analysis while also providing transparency and opportunities for user input.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-5">
                                        <AccordionTrigger>How do I get in touch with a business I find in the directory?</AccordionTrigger>
                                        <AccordionContent>
                                            You can get in touch with any business listed in the directory by accessing their profile, where you’ll find contact information such as phone numbers, addresses, and sometimes contact forms to send emails directly to them.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-6">
                                        <AccordionTrigger>How can I list my business in the directory?</AccordionTrigger>
                                        <AccordionContent>
                                            Home service professional can request to be added to our directory through the ‘For Pros’ section, or the ‘Join As a Pro’ button on the top bar. You’ll need to provide details about you and your business, which we’ll verify before making your profile available to potential clients.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-7">
                                        <AccordionTrigger>Is my personal information safe when I use the directory?</AccordionTrigger>
                                        <AccordionContent>
                                            We prioritize the privacy and security of our users. All personal information is securely stored and is strictly confidential. We use industry-standard security measures to protect your data and do not share it with third parties without your explicit consent.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-8">
                                        <AccordionTrigger>What if I have a complaint about a business listed in the directory?</AccordionTrigger>
                                        <AccordionContent>
                                            We take all feedback and complaints seriously. If you have concerns about a business listed in our directory, please reach out to us with the details of your experience. We review each complaint carefully and take appropriate actions in line with our commitment to maintaining high standards in our directory.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                        <div className="lg:col-span-1 flex flex-col gap-y-6">
                            <form className="w-full">
                                <input
                                    type="text"
                                    placeholder="Search professionals, services..."
                                    className="w-full py-2 px-4 rounded border border-slate-300"
                                />
                            </form>
                            <SliderFaqs />
                        </div>
                    </section>
                </Container>
            </div>
            <PreFooter />
            <Footer />
        </div>
    );
}