interface Props {
    iconSvg: React.ReactNode;
    subTitle:string;
    title:string;
    text:string;
}
export const TitleIconText = ({ iconSvg,title,subTitle,text } : Props ) => {
    return (
        <div className="flex flex-col items-center justify-center text-center gap-y-4">
            <div className="bg-blue-site rounded p-2">
               {iconSvg}
            </div>
            <p className="flex items-center gap-x-2 text-2xl font-semibold text-yellow-site leading-none">
                <span className="text-slate-800 mb-1">■</span>{subTitle}<span className="text-slate-800 mb-1">■</span>
            </p>
            <h2 className="text-blue-site text-[45px] font-bold leading-none">{title}</h2>
            <p className="text-slate-800 text-lg max-w-3xl">
                {text}
            </p>
        </div>
    )
}
