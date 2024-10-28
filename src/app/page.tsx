import { Container, Footer, PreFooter, Search, SectionExpert, SectionFeaturedProfessionals, SectionFromOurExperts, SectionGetting, SectionTestimonials } from "@/components";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full min-h-dvh bg-[url('/images/hsd-bg01.webp')] bg-cover bg-center flex flex-col justify-center text-slate-100">
        <Container>
          <div className="flex flex-col gap-y-4 w-[50%]">
            <h1 className="text-6xl font-bold w-full text-pretty leading-[1.1em]">
              Experience the Best in Home <span className="text-yellow-site">Building</span>
            </h1>
            <p className="w-full font-medium text-lg">
              Effortlessly find top professionals for all your home improvement projects with our directory. From repairs and inspections to building and upgrades, connect with trusted experts quickly and easily.
            </p>
            <Search />
            <span className="text-lg">Popular Searches: HVAC, Plumbing, Kitchen Remodeling, Home Inspection,…</span>

            <div className="flex items-center gap-x-4 justify-start text-slate-100 h-36">
              <div className="flex flex-col gap-y-4 justify-center items-center text-center bg-[#466DAB] rounded h-full w-36 px-2">
                <svg width={40} height={40} fill="#f1f5f9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path d="M480 48c0-26.5-21.5-48-48-48L336 0c-26.5 0-48 21.5-48 48l0 48-64 0 0-72c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 72-64 0 0-72c0-13.3-10.7-24-24-24S64 10.7 64 24l0 72L48 96C21.5 96 0 117.5 0 144l0 96L0 464c0 26.5 21.5 48 48 48l256 0 32 0 96 0 160 0c26.5 0 48-21.5 48-48l0-224c0-26.5-21.5-48-48-48l-112 0 0-144zm96 320l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16zM240 416l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16zM128 400c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32zM560 256c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0zM256 176l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16zM112 160c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0zM256 304c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32zM112 320l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16zm304-48l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16zM400 64c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0zm16 112l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16z" />
                </svg>
                <p className="font-bold leading-5">Professionals & Projects</p>
              </div>

              <div className="flex flex-col gap-y-4 justify-center items-center text-center bg-[#466DAB] rounded h-full w-36 px-2">
                <svg width={40} height={40} fill="#f1f5f9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M192 0c-41.8 0-77.4 26.7-90.5 64L64 64C28.7 64 0 92.7 0 128L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-37.5 0C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM72 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zM72 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 0c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z" /></svg>
                <p className="font-bold leading-5">Wide Range of Search Options</p>
              </div>

              <div className="flex flex-col gap-y-4 justify-center items-center text-center bg-[#466DAB] rounded h-full w-36 px-2">
                <svg width={40} height={40} fill="#f1f5f9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0L133.9 0c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0L487.4 0C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z" />
                </svg>
                <p className="font-bold leading-5">Real Client Reviews</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <div className="w-full bg-bg-gray-section py-16 flex flex-col gap-y-10">
        <SectionFeaturedProfessionals />
        <section className="w-full bg-inherit">
          <Container>
            <div className="w-full flex items-center gap-x-10 bg-[url('/images/hsd-bg02.webp')] bg-cover bg-no-repeat bg-center bg-blue-site px-10 min-h-[440px] rounded">
              <div className="text-slate-100 max-w-[16.25rem] flex flex-col gap-y-2">
                <h3 className="text-2xl font-bold flex items-center gap-x-3"><span className="text-slate-700 text-lg">■</span>How It Works<span className="text-slate-700 text-lg">■</span></h3>
                <p className="font-bold text-[2.5rem] leading-tight">
                  Your Easy Path to Home Excellence
                </p>
              </div>
              <div className="grid grid-cols-3 gap-x-10">
                <div className="bg-white rounded px-2 flex flex-col gap-y-4 items-center text-center py-6">
                  <Image src={'/images/step1.webp'} alt="step1" width={300} height={300} />
                  <h3 className="text-2xl text-blue-site font-bold">SEARCH</h3>
                </div>
                <div className="bg-white rounded px-2 flex flex-col gap-y-4 items-center text-center py-6">
                  <Image src={'/images/step2.webp'} alt="step1" width={300} height={300} />
                  <h3 className="text-2xl text-blue-site font-bold">BROWSE</h3>
                </div>
                <div className="bg-white rounded px-2 flex flex-col gap-y-4 items-center text-center py-6">
                  <Image src={'/images/step3.webp'} alt="step1" width={300} height={300} />
                  <h3 className="text-2xl text-blue-site font-bold">CONNECT</h3>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <SectionGetting />
        <SectionExpert />
        <SectionTestimonials />
        <SectionFromOurExperts />
      </div>
      <PreFooter />
      <Footer />
    </div>
  );
}
