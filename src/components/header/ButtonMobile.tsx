'use client';

import { useState } from "react";
import { NavLinksMobile } from "./NavLinksMobile";

export const ButtonMobile = () => {

    const [toggleMenuMobile,setToggleMenuMobile] = useState(false);

    const handleClickMenuToggleMobile = () => {
        setToggleMenuMobile(!toggleMenuMobile);
    }
    return (
        <div className="block lg:hidden">
            <button
            onClick={ handleClickMenuToggleMobile } 
            type="button" 
            id="button-menu-toggle" 
            className="flex flex-col justify-center size-9 border-0 bg-transparent gap-2">
                <div className={`bg-blue-site h-1 w-full rounded-[5px] transition-all duration-500 origin-left ${toggleMenuMobile && 'transform rotate-45'}`}></div>
                <div className={`bg-blue-site h-1 w-full rounded-[5px] transition-all duration-500 origin-left ${toggleMenuMobile && 'opacity-0'}`}></div>
                <div className={`bg-blue-site h-1 w-full rounded-[5px] transition-all duration-500 origin-left ${toggleMenuMobile && 'transform -rotate-45'}`}></div>
            </button>
            <div className={`absolute z-10 inset-x-0 mx-8 mt-2 bg-blue-site shadow-lg rounded top-full overflow-hidden transition-[max-height] duration-500 ${ toggleMenuMobile ? 'max-h-[50rem]' : 'max-h-0'}`}>
                <NavLinksMobile setToggleMenuMobile={ setToggleMenuMobile } />
            </div>
        </div>
    )
}
