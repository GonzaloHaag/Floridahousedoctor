import Link from "next/link";

const navItems = [
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

]

export const NavLinks = () => {
    return (
        <nav className="flex items-center gap-x-6 text-base font-normal">
            {
                navItems.map((navItem) => (
                    <div key={navItem.id} className="relative py-3 group cursor-pointer">
                        <Link href={navItem.href} title={navItem.title} className="group flex items-center gap-x-2 hover:text-slate-600 transition-colors duration-300">
                            {navItem.title}
                            {
                                navItem.submenu && (
                                    <svg width={12} height={12} className="group-hover:fill-slate-600 transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                                )
                            }
                        </Link>
                        {
                            navItem.submenu && (
                                <ul className="absolute top-12 -left-2 transform opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-yellow-site flex flex-col items-start px-4 gap-y-2 py-5 min-w-[15rem] rounded text-slate-100 transition-all duration-300">
                                    <svg width={25} height={25} fill="#e6a424" className="absolute -top-3 left-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" /></svg>
                                    {
                                        navItem.submenu.map((itemSubmenu) => (
                                            <Link key={itemSubmenu.title} href={itemSubmenu.href} className="text-start hover:bg-black/5 py-2 px-6 rounded w-full">
                                                {itemSubmenu.title}
                                            </Link>
                                        ))
                                    }
                                </ul>
                            )
                        }
                    </div>
                ))
            }
        </nav>
    )
}
