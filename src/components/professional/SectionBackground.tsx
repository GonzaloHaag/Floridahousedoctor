import { Container } from "../container-max-width/Container";
import { Search } from "../Search";

interface Props {
    title: string;
    text: string;
}
export const SectionBackground = ({ title, text }: Props) => {
    return (
        <section className="flex flex-col items-center justify-center bg-[url('/images/hsd-bg05.webp')] w-full min-h-[50dvh] py-10">
            <Container>
                <div className="flex flex-col">
                    <div className="flex flex-col items-center text-center gap-y-6 text-slate-100">
                        <h1 className="text-5xl font-extrabold">{title}</h1>
                        <p className="text-lg max-w-4xl">{text}</p>
                        <div className="w-full max-w-3xl">
                            <Search />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
