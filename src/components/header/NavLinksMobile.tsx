'use client';
import Link from "next/link"
import { useState } from "react";

interface Props {
  setToggleMenuMobile: (value: boolean) => void
}
const navItemsMobile = [
  {
    id: 1,
    title: 'Home',
    href: '/'
  },
  {
    id: 2,
    title: 'Find a Professional',
    href: '/professional',
    submenu: [
      {
        title: 'All professionals',
        href: '/professional'
      },
      {
        title: 'By Type',
        href: '/professional/by-type'
      },
      {
        title: 'By Service',
        href: '/professional/by-service'
      },
      {
        title: 'By Location',
        href: '/professional/by-city'
      },

    ]
  },
  {
    id: 3,
    title: 'Resources',
    href: '#',
    submenu: [
      {
        title: 'About Us',
        href: '/about-us'
      },
      {
        title: 'Our Blog',
        href: '/blog'
      },
      {
        title: 'FAQs',
        href: '/faqs'
      },
      {
        title: 'Contact Us',
        href: '/contact-us'
      },
    ]
  },
  {
    id: 4,
    title: 'For Pros',
    href: '/list-your-business',
    submenu: [
      {
        title: 'Get Listed',
        href: '/list-your-business'
      },
      {
        title: 'Get Featured',
        href: '/get-featured'
      },
    ]
  },

];

export const NavLinksMobile = ({ setToggleMenuMobile } : Props ) => {

  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label)
  }
  return (
    <nav className="w-full text-slate-100 text-base">
      <ul className="flex flex-col gap-y-4 p-4">
        {
          navItemsMobile.map((navItemMob) => (
            <li key={navItemMob.id} className="border-b border-slate-600/60 py-2 px-6 rounded-t">
              <div className="flex items-center justify-between">
                <Link href={navItemMob.href} title={navItemMob.title} onClick={() => setToggleMenuMobile( false )}>
                  {navItemMob.title}
                </Link>
                {
                  navItemMob.submenu && (
                    <button
                      onClick={() => toggleSubmenu(navItemMob.title)}
                      type="button"
                      aria-label="Open submenu"
                      className="flex items-center justify-center p-2 bg-slate-200/40 rounded-full">
                      <svg width={14} height={14} fill="white" className={`transition-transform duration-200 ${openSubmenu === navItemMob.title ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                    </button>
                  )
                }
              </div>
              {
                navItemMob.submenu && openSubmenu === navItemMob.title && (
                  <ul className="bg-inherit px-8 py-2 mt-4 flex flex-col gap-y-4">
                    {
                      navItemMob.submenu.map((itemSub,i) => (
                        <Link key={i} href={itemSub.href} title={itemSub.title} onClick={() => setToggleMenuMobile( false )}>
                          {itemSub.title}
                        </Link>
                      ))
                    }
                  </ul>
                )
              }
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
