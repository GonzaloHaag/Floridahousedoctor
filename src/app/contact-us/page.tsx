import { Container, Footer, SectionBgResources, SectionTestimonials } from "@/components";
import Link from "next/link";

export default function ContactUsPage() {
    return (
        <div className="flex flex-col bg-inherit">
            <SectionBgResources title="Contact Us" text="Have questions or need assistance? We’re here to help. Whether you’re seeking more information about our directory, need help finding a professional for your project, or have inquiries about listing your business, our dedicated team is ready to assist you." />

            <section className="w-full bg-bg-gray-section py-12">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-20">
                        <div className="lg:col-span-1 flex flex-col gap-y-4">
                            <h2 className="text-blue-site text-2xl font-bold text-center">Let’s Get in Touch!</h2>
                            <p className="text-start">Please fill out the form below with your details and inquiry. Whether you have a question, feedback, or need specific information, we’re here to assist you. Provide as much detail as possible in your message so we can offer the best assistance. After submitting the form, one of our team members will get in touch with you as soon as possible.</p>
                            <p className="text-start">If you are a home service profesional seeking to list your business or need assistance related to your existing listing, please visit our dedicated page for professionals. There, you’ll find a tailored contact form to address your specific needs.</p>
                            <Link href={'/list-business'} title="list business" className="text-blue-site font-bold text-lg w-full bg-white hover:bg-blue-site transition-colors duration-300 hover:text-slate-100 flex items-center gap-x-2 justify-center py-2 rounded group">
                               <span>Professional Contact</span>
                               <svg width={20} height={20} fill="#174996" className="group-hover:fill-slate-100 transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/></svg>
                            </Link>
                        </div>
                        <form className="lg:col-span-2 flex flex-col gap-y-6 rounded py-6 px-4">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-6">
                                <input type="text" placeholder="Name" className="w-full py-3 px-4 rounded bg-inherit border border-slate-300" />
                                <input type="tel" placeholder="Phone number" className="w-full py-3 px-4 rounded bg-inherit border border-slate-300" />
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-6">
                                <input type="email" placeholder="Email Address" className="w-full py-3 px-4 rounded bg-inherit border border-slate-300" />
                                <select className="w-full py-3 px-4 rounded bg-inherit border border-slate-300">
                                    <option>
                                        How can we help?
                                    </option>
                                    <option>
                                        General Inquiry
                                    </option>
                                    <option>
                                        Feedback
                                    </option>
                                    <option>
                                       Business Inquiry
                                    </option>
                                </select>
                            </div>
                            <textarea placeholder="Message" rows={6} className="w-full py-3 px-4 rounded bg-inherit border border-slate-300" />
                            <button type="submit" title="submit" className="w-max bg-blue-site text-slate-100 py-4 px-12 mx-auto rounded flex items-center gap-x-2 hover:bg-yellow-site transition-colors duration-300">
                                <span>Submit</span>
                                <svg width={25} height={25} fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376l0 103.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"/></svg>
                            </button>
                        </form>
                    </div>
                </Container>
            </section>
            <SectionTestimonials />
            <Footer />
        </div>
    );
}