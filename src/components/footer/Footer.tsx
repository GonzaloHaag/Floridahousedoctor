import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
    return (
        <footer className="bg-[#091d3c] bg-[url('/images/hsd-bg03.webp')] bg-cover bg-center pt-12 text-slate-100">
            <div className="w-full container mx-auto max-w-7xl px-8">
                <div className="grid grid-cols-1 gap-8 px-4 py-6 lg:py-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col gap-y-4">
                        <Image src={'/images/hsd-logo-w.webp'} alt="logo" width={240} height={60} />
                        <p className="text-slate-300">
                            Welcome to our home service directory, your trusted resource for finding home improvement excellence since 2023. Connect with top professionals, explore a wide range of services, and stay informed with the latest tips and trends in home improvement.
                        </p>
                        <div className="flex items-center gap-x-4">
                            <Link href={'/facebook'} title="facebook">
                                <svg width={25} height={25} fill="#3B5998" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" /></svg>
                            </Link>
                            <Link href={'twitter'} title="twiiter">
                                <svg width={25} height={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
                            </Link>
                            <Link href={'/facebook'} title="facebook">
                                <svg width={25} height={30} fill="#3B5998" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" /></svg>
                            </Link>

                            <Link href={'twitter'} title="twiiter">
                                <svg width={25} height={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
                            </Link>

                        </div>
                    </div>
                    <div className="flex flex-col gap-y-7">
                        <h2 className="text-2xl font-extrabold text-slate-100 md:mt-2">Quick Links</h2>
                        <ul className="text-slate-300 list-disc pl-5">
                            <li className="mb-4">
                                <Link href="#" className="hover:underline">Home</Link>
                            </li>
                            <li className="mb-4">
                                <Link href="#" className="hover:underline">About Us</Link>
                            </li>
                            <li className="mb-4">
                                <Link href="#" className="hover:underline">Find a Pro</Link>
                            </li>
                            <li className="mb-4">
                                <Link href="#" className="hover:underline">Our Blog</Link>
                            </li>
                            <li className="mb-4">
                                <Link href="#" className="hover:underline">Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-y-7">
                        <h2 className="text-2xl font-extrabold text-slate-100 md:mt-2">Resources</h2>
                        <ul className="text-slate-300 list-disc pl-5">
                            <li className="mb-4">
                                <Link href="#" className="hover:underline">Browse by Professional Type</Link>
                            </li>
                            <li className="mb-4">
                                <Link href="#" className="hover:underline">Browse by Project Type
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link href="#" className="hover:underline">Browse by Business Highlights</Link>
                            </li>
                            <li className="mb-4">
                                <Link href="#" className="hover:underline">Privacy Policy</Link>
                            </li>
                            <li className="mb-4">
                                <Link href="#" className="hover:underline">Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-y-7">
                        <h2 className="text-2xl font-extrabold text-slate-100 md:mt-2">Connect with Us</h2>
                        <ul className="text-slate-300 list-disc pl-5">
                            <li className="mb-4">
                                <Link href="#" className="hover:underline">Get Listed</Link>
                            </li>
                            <li className="mb-4">
                                <Link href="#" className="hover:underline">Get Featured</Link>
                            </li>
                            <li className="mb-4">
                                <Link href="#" className="hover:underline">Professional FAQs</Link>
                            </li>
                            <li className="mb-4">
                                <Link href="#" className="hover:underline">Customer FAQs</Link>
                            </li>
                            <li className="mb-4">
                                <Link href="#" className="hover:underline">Marketing Solutions</Link>
                            </li>
                        </ul>
                    </div>
                
                </div>
                <div className="px-4 py-6 md:flex md:justify-center md:items-center border-t border-t-slate-700">
                    <span className="text-base text-slate-300 sm:text-center">Copyright 2024 – Local Directory Fortune. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>

    )
}
