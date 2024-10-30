import { CardFromOurExperts, Container, Footer, Pagination, PreFooter, SliderBlog } from "@/components";

export default function BlogPage() {
    return (
        <div className="w-full flex flex-col">
            <section className="flex flex-col items-center justify-center bg-[url('/images/hsd-bg05.webp')] w-full min-h-[50dvh] py-10">
                <Container>
                    <div className="flex flex-col">
                        <div className="flex flex-col items-center text-center gap-y-6 text-slate-100">
                            <h1 className="text-5xl font-extrabold">Our Blog</h1>
                            <p className="text-lg max-w-4xl">Discover practical advice and expert insights on all things home improvement. Our seasoned professionals share their knowledge to help you tackle projects with confidence and achieve the best results for your home.</p>
                            <div className="w-full max-w-3xl">
                                <form className="w-full relative">
                                    <input type="search"
                                        className="bg-white w-full rounded outline-none py-3 pl-4 pr-10 text-black" placeholder="Search our blog" />
                                    <svg width={16} height={16} className="absolute transform top-1/2 -translate-y-1/2 right-4" fill="#94a3b8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                                </form>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <Container>
                <section className="bg-bg-gray-section w-full py-10 grid grid-cols-1 md:grid-cols-3 gap-x-20 gap-y-10 items-start">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:col-span-2">
                        <CardFromOurExperts />
                        <CardFromOurExperts />
                        <CardFromOurExperts />
                        <CardFromOurExperts />
                        <div className="flex items-center justify-center w-full md:col-span-2">
                            <Pagination />
                        </div>
                    </div>
                    <div className="md:col-span-1 flex flex-col gap-y-6 text-center items-center">
                        <h2 className="text-blue-site font-bold text-xl">Featured Professionals</h2>
                        <SliderBlog />
                    </div>
                </section>
            </Container>
            <PreFooter />
            <Footer />
        </div>
    );
}