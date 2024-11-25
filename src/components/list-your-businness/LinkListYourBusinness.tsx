import Link from "next/link";

interface Props {
  href:string;
  titleLink:string;
  icon:React.ReactNode;
  title:string;
}

export const LinkListYourBusinness = ({ href,titleLink,icon,title } : Props ) => {
  return (
    <Link href={href} title={titleLink} className="w-full flex items-center gap-x-2 bg-inherit py-4 px-4 rounded-t border-b border-b-slate-300 group transition-colors duration-300 hover:bg-blue-site">
      {icon}
      <span className="text-xl text-slate-900 font-semibold transition-colors duration-300 group-hover:text-slate-100">{title}</span>
    </Link>
  )
}
