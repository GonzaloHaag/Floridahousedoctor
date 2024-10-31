import { Container, ExpertsContainer, Footer, PreFooter, Search, SectionFeaturedProfessionals, SectionTestimonials } from "@/components";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ProfessionalPage() {
    return (
        <div className="flex flex-col w-full bg-inherit">
            <section className="flex flex-col items-center justify-center bg-[url('/images/hsd-bg05.webp')] w-full min-h-[50dvh] py-10">
                <Container>
                    <div className="flex flex-col">
                        <div className="flex flex-col items-center text-center gap-y-6 text-slate-100">
                            <h1 className="text-5xl font-extrabold">Find A Professional</h1>
                            <p className="text-lg max-w-4xl">Easily connect with top professionals tailored to your specific home improvement needs. Our personalized pro search ensures you find the perfect expert for every project, making your home upgrades seamless and efficient.</p>
                            <div className="w-full max-w-3xl">
                                <Search />
                            </div>
                        </div>
                        <div className="hidden md:grid grid-cols-4 items-center gap-x-10 mt-12">
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="All Business Highlights" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="apple">Eco-Friendly</SelectItem>
                                        <SelectItem value="banana">Evening Consultations</SelectItem>
                                        <SelectItem value="blueberry">Family Owned</SelectItem>
                                        <SelectItem value="grapes">Free Consultation</SelectItem>
                                        <SelectItem value="pineapple">Free Estimate</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="All Cities" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="apple">New York</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="All Professional Types" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="apple">Carpenters</SelectItem>
                                        <SelectItem value="banana">Cleaning Services</SelectItem>
                                        <SelectItem value="blueberry">Electricians</SelectItem>
                                        <SelectItem value="grapes">Handyman</SelectItem>
                                        <SelectItem value="pineapple">Home Remodeling</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="All Service Types" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="apple">Bathroom Remodeling</SelectItem>
                                        <SelectItem value="banana">Door Repair</SelectItem>
                                        <SelectItem value="blueberry">Electrical Installations</SelectItem>
                                        <SelectItem value="grapes">Electronics Recovery</SelectItem>
                                        <SelectItem value="pineapple">Fence Repair</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="w-full bg-inherit py-10 bg-bg-gray-section">
                <Container>
                    <div className="flex flex-col gap-y-6">
                    <div className="grid grid-cols-1 gap-y-6 md:hidden">
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="All Business Highlights" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="apple">Eco-Friendly</SelectItem>
                                        <SelectItem value="banana">Evening Consultations</SelectItem>
                                        <SelectItem value="blueberry">Family Owned</SelectItem>
                                        <SelectItem value="grapes">Free Consultation</SelectItem>
                                        <SelectItem value="pineapple">Free Estimate</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="All Cities" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="apple">New York</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="All Professional Types" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="apple">Carpenters</SelectItem>
                                        <SelectItem value="banana">Cleaning Services</SelectItem>
                                        <SelectItem value="blueberry">Electricians</SelectItem>
                                        <SelectItem value="grapes">Handyman</SelectItem>
                                        <SelectItem value="pineapple">Home Remodeling</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="All Service Types" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="apple">Bathroom Remodeling</SelectItem>
                                        <SelectItem value="banana">Door Repair</SelectItem>
                                        <SelectItem value="blueberry">Electrical Installations</SelectItem>
                                        <SelectItem value="grapes">Electronics Recovery</SelectItem>
                                        <SelectItem value="pineapple">Fence Repair</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <ExpertsContainer />
                        <button type="button" className="w-max mx-auto flex items-center gap-x-3 bg-blue-site text-xl px-6 py-2 text-slate-100 rounded hover:bg-yellow-site transition-colors duration-300 mt-10">
                            <span>Load More</span>
                            <svg width={20} height={20} fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M386.3 160L336 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z" /></svg>
                        </button>
                    </div>
                </Container>
            </section>
            <SectionTestimonials />
            <SectionFeaturedProfessionals className="py-10" />

            <PreFooter />
            <Footer />
        </div>
    );
}