interface Props {
    title:string;
    text:string;
}
export const ItemWorks = ({ title,text }:Props) => {
    return (
        <div className="flex flex-col gap-y-2">
            <div className="flex items-center gap-x-2">
                <svg width={20} height={20} className="fill-blue-site" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                <span className="text-lg font-bold">{title}</span>
            </div>
            <p className="text-base text-slate-600">
                {text}
            </p>
        </div>
    )
}
