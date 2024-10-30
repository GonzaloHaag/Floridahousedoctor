import { Container, Footer, PreFooter, SectionBgResources, SliderFaqs } from "@/components";


const labelsItems = [
    {
        id: 'faq1',
        spanTitle: 'Can I find home service professional for any project on your directory?',
        textDespegable: 'Our directory is a comprehensive source for a variety of home service services. While we strive to cover an extensive range, we’re always expanding our listings to accommodate more industries. Your feedback is invaluable to us. So if there’s a particular service or industry you’re looking for and can’t find, let us know, and we’ll try our best to include it.'
    },
    {
        id: 'faq2',
        spanTitle: 'Is there a cost to use the directory?',
        textDespegable: 'Our home service directory is a free resource for patients. We provide a platform where you can effortlessly search for home service professionals without any fees. We believe that access to useful and up-to-date information should be available to everyone at no cost.'
    },
    {
        id: 'faq3',
        spanTitle: 'How are home service professional vetted before being listed?',
        textDespegable: 'Home service professionals on our directory are vetted through a verification process that includes checking credentials, licensure, and good standing across online platforms. We also consider patient reviews and feedback to ensure we present you with reputable service providers.'
    }
]
export default function FaqsPage() {
    return (
        <div className="flex flex-col bg-inherit">
            <SectionBgResources title="FAQs" text="Welcome to our FAQs page, where we provide clear, concise answers to common questions about our listing, our directory services, and general inquiries. Explore this resource to gain better insights and understanding, and if you have a question that isn’t covered, feel free to reach out to us directly." />
            <Container>
                <section className="w-full py-12 bg-bg-gray-section grid grid-cols-1 lg:grid-cols-3 gap-x-20">
                    <div className="lg:col-span-2 flex flex-col gap-y-6">
                        <h2 className="text-blue-site text-lg font-bold">How do I find a home service professional in my area?</h2>
                        <p>
                            To locate a home service professional near you, utilize our search tool and specify your project type or preferred business features. Our robust filtering options allow you to refine your search based on services, location, professional type, and more. This makes it easy to find the ideal company that meet your requirements for your next project.
                        </p>
                        <div className="flex flex-col gap-y-10">
                            {
                                labelsItems.map((labelItem) => (
                                    <div key={labelItem.id} className="flex flex-col p-2 rounded">
                                        <input type="checkbox" hidden id={labelItem.id} className="peer" />
                                        <label htmlFor={labelItem.id} className="w-full py-2 font-bold flex items-center justify-between cursor-pointer select-none">
                                            <span className="text-sm md:text-lg">{labelItem.spanTitle}</span>
                                            <div>
                                                <svg width={20} height={20} fill="#174996" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" /></svg>
                                            </div>
                                        </label>
                                        <div className="w-full overflow-hidden max-h-0 transition-all duration-300 peer-checked:max-h-96 mt-2">
                                            <p>
                                                {labelItem.textDespegable}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            }

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
            <PreFooter />
            <Footer />
        </div>
    );
}