import { Container } from "@/components/container-max-width/Container"
import { TitleIconText } from "../title-icon-text/TitleIconText"
import { FiltersExperts } from "./FiltersExperts"
import { ExpertsContainer } from "./ExpertsContainer"

export const SectionExpert = () => {
  return (
    <section className="w-full bg-inherit mt-20">
        <Container>
            <TitleIconText 
            iconSvg={<svg width={30} height={30} fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M218.3 8.5c12.3-11.3 31.2-11.3 43.4 0l208 192c6.7 6.2 10.3 14.8 10.3 23.5l-144 0c-19.1 0-36.3 8.4-48 21.7l0-37.7c0-8.8-7.2-16-16-16l-64 0c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l64 0 0 128-160 0c-26.5 0-48-21.5-48-48l0-112-32 0c-13.2 0-25-8.1-29.8-20.3s-1.6-26.2 8.1-35.2l208-192zM352 304l0 144 192 0 0-144-192 0zm-48-16c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32l0 160 32 0c8.8 0 16 7.2 16 16c0 26.5-21.5 48-48 48l-48 0-192 0-48 0c-26.5 0-48-21.5-48-48c0-8.8 7.2-16 16-16l32 0 0-160z"/></svg>}
            subTitle="Match Your Project with the Best"
            title="Expert Search Made Easy"
            text="Easily connect with top professionals tailored to your specific home improvement needs. Our personalized pro search ensures you find the perfect expert for every project, making your home upgrades seamless and efficient"
            />
            <div className="flex flex-col gap-y-10 mt-10">
                <FiltersExperts />
                <ExpertsContainer />
                <button type="button" className="w-max mx-auto flex items-center gap-x-3 bg-blue-site text-xl px-6 py-2 text-slate-100 rounded hover:bg-yellow-site transition-colors duration-300">
                    <span>Load More</span>
                    <svg width={20} height={20} fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M386.3 160L336 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z"/></svg>
                </button>
            </div>
        </Container>
    </section>
  )
}
