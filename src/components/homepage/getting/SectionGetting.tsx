import { Container } from "@/components/container-max-width/Container"
import { TitleIconText } from "../title-icon-text/TitleIconText"
import Link from "next/link"
import { SliderGetting } from "./SliderGetting"
import { SliderGettingTwo } from "./SliderGettingTwo"

export const SectionGetting = () => {
    return (
        <section className="w-full bg-inherit">
            <Container>
                <div className="flex flex-col gap-y-6 bg-inherit">
                    <TitleIconText
                        iconSvg={<svg width={30} height={30} fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M96 0C60.7 0 32 28.7 32 64l0 384c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L96 0zM208 288l64 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64zM496 192c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64z" /></svg>}
                        subTitle="Your Address Book"
                        title="For Getting Everything Done Right"
                        text="Easily find and connect with top-rated professionals to ensure all your home improvement projects are completed to perfection. Your go-to directory for trusted services" />

                    <div className="flex flex-col sm:flex-row gap-x-8 gap-y-6 items-center">
                        <div className="bg-blue-site w-full sm:w-[20rem] flex flex-col gap-y-4 items-start justify-center py-6 sm:min-h-[20rem] px-6 rounded sm:rounded-tr-none sm:rounded-br-none">
                            <div className="flex gap-x-2 items-center">
                                <div className="bg-white p-2 rounded">
                                    <svg width={30} height={30} fill="#174996" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM609.3 512l-137.8 0c5.4-9.4 8.6-20.3 8.6-32l0-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2l61.4 0C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" /></svg>
                                </div>
                                <p className="text-2xl font-bold text-slate-100 max-w-40 leading-7">Browse By Professionals</p>
                            </div>
                            <Link href={'/professionals'} title="Professionals" className="flex w-max items-center gap-x-2 bg-inherit py-2 px-4 text-slate-100 font-semibold hover:bg-yellow-site transition-colors duration-300 rounded">
                                <span>All Professional Types</span>
                                <svg width={20} height={20} fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM297 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L120 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l214.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L409 239c9.4 9.4 9.4 24.6 0 33.9L297 385z" /></svg>
                            </Link>
                        </div>
                        <SliderGetting />
                    </div>


                    <div className="flex flex-col sm:flex-row gap-x-8 gap-y-6 items-center">
                        <div className="bg-blue-site w-full sm:w-[20rem] flex flex-col gap-y-4 items-start justify-center py-6 sm:min-h-[20rem] px-6 rounded sm:rounded-tr-none sm:rounded-br-none">
                            <div className="flex gap-x-2 items-center">
                                <div className="bg-white p-2 rounded">
                                    <svg width={30} height={30} fill="#174996" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c.2 35.5-28.5 64.3-64 64.3l-320.4 0c-35.3 0-64-28.7-64-64l0-160.4-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L416 100.7 416 64c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 121 52.8 46.4c8 7 12 15 11 24zM248 192c-13.3 0-24 10.7-24 24l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-80c0-13.3-10.7-24-24-24l-80 0z" /></svg>
                                </div>
                                <p className="text-2xl font-bold text-slate-100 max-w-40 leading-7">Browse By Project Types</p>
                            </div>
                            <Link href={'/professionals'} title="Professionals" className="flex w-max items-center gap-x-2 bg-inherit py-2 px-4 text-slate-100 font-semibold hover:bg-yellow-site transition-colors duration-300 rounded">
                                <span>All Project Types</span>
                                <svg width={20} height={20} fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM297 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L120 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l214.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L409 239c9.4 9.4 9.4 24.6 0 33.9L297 385z" /></svg>
                            </Link>
                        </div>
                        <SliderGettingTwo />
                    </div>


                </div>
            </Container>
        </section>
    )
}
