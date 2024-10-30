import { Container } from "@/components/container-max-width/Container"
import { TitleIconText } from "../title-icon-text/TitleIconText"
import { CardFromOurExperts } from "./CardFromOurExperts"
import { Pagination } from "@/components/Pagination"

export const SectionFromOurExperts = () => {
  return (
    <section className="w-full bg-inherit pt-10">
      <Container>
        <div className="flex flex-col gap-y-6 bg-inherit">
          <TitleIconText
            iconSvg={<svg width={30} height={30} fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" /></svg>}
            subTitle="Home Improvement Tips"
            title="From Our Experts to Your Screen"
            text="Discover practical advice and expert insights on all things home improvement. Our seasoned professionals share their knowledge to help you tackle projects with confidence and achieve the best results for your home."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
            <CardFromOurExperts />
            <CardFromOurExperts />
            <CardFromOurExperts />
          </div>

          <Pagination />
        </div>
      </Container>
    </section>
  )
}
