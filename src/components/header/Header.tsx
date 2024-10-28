import Image from "next/image"
import Link from "next/link"
import { NavLinks } from "./NavLinks"

export const Header = () => {
    return (
        <header className="w-full flex flex-col">
            <div className="w-full bg-blue-site flex items-center min-h-10">
                <div className="w-full container mx-auto max-w-7xl px-8 flex items-center justify-between text-slate-100">
                    <div className="flex items-center gap-x-1">
                        <svg width={14} height={14} fill="#f1f5f9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4l54.1 0 109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109 0-54.1c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                        </svg>
                        <p className="text-sm">Premium Home Service Provider Directory</p>
                    </div>

                    <div className="flex items-center gap-x-0">
                        <p className="text-sm">Enhance Your Business:</p>
                        <Link href={'/list-your-business'} title="list-your-business" className="flex items-center text-sm gap-x-2 bg-inherit hover:bg-yellow-site transition-colors duration-200 px-2 py-1 rounded">
                            <span>Join As a Pro</span>
                            <svg width={18} height={18} fill="#f1f5f9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM625 177L497 305c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L591 143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-white w-full flex items-center border-b-2 min-h-24">
                <div className="w-full container mx-auto max-w-7xl px-8 flex items-center justify-between">
                    <Link href={'/'} title="Home page">
                        <Image src={'/images/hsd-logo.webp'} alt="Logo hsd" width={250} height={60} />
                    </Link>
                    <div className="flex items-center gap-x-20">
                        <NavLinks />
                        <Link href={'/professional'} title="Professional" aria-label="Find A Professional" className="flex items-center gap-x-1 text-[15px] bg-blue-site font-bold py-3 px-4 rounded text-slate-100 hover:bg-yellow-site transition-colors duration-300 ">
                            <span>Find A Profesional</span>
                            <svg width={14} height={14} fill="#f1f5f9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4l54.1 0 109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109 0-54.1c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
