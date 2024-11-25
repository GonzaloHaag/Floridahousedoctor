import Image from "next/image"

export const ItemsOurSolutions = () => {
    return (
        <div className="flex flex-col gap-y-6 mt-4">
            <div className="flex flex-col text-center md:text-start md:flex-row items-center gap-4">
                <Image src={'/images/list-your-businness/free-listing.webp'} priority={false} loading="lazy" alt="free listing" width={150} height={150} className="rounded aspect-square" />
                <div className="flex flex-col gap-y-1">
                    <span className="text-slate-900 font-bold text-lg">Free Listing</span>
                    <p className="text-slate-700">
                        Get listed in our directory at no cost. This service allows you to establish an online presence and connect with potential clients.
                    </p>
                </div>
            </div>

            <div className="flex flex-col text-center md:text-start md:flex-row items-center gap-4">
                <Image src={'/images/list-your-businness/featured-listing-150x150.webp'} priority={false} loading="lazy" alt="featured listing" width={150} height={150} className="rounded aspect-square" />
                <div className="flex flex-col gap-y-1">
                    <span className="text-slate-900 font-bold text-lg">Featured Listing</span>
                    <p className="text-slate-700">
                        Opt for a featured listing to increase your visibility. Featured profiles appear prominently, drawing more attention and engagement from visitors.
                    </p>
                </div>
            </div>

            <div className="flex flex-col text-center md:text-start md:flex-row items-center gap-4">
                <Image src={'/images/list-your-businness/website-design-150x150.webp'} priority={false} loading="lazy" alt="website desing services" width={150} height={150} className="rounded aspect-square" />
                <div className="flex flex-col gap-y-1">
                    <span className="text-slate-900 font-bold text-lg">Website Design Services</span>
                    <p className="text-slate-700">
                        We offer professional website design services to create a compelling online presence for your practice, ensuring it stands out in the digital landscape.
                    </p>
                </div>
            </div>

            <div className="flex flex-col text-center md:text-start md:flex-row items-center gap-4">
                <Image src={'/images/list-your-businness/marketing-solutions-150x150.webp'} priority={false} loading="lazy" alt="marketing solutions" width={150} height={150} className="rounded aspect-square" />
                <div className="flex flex-col gap-y-1">
                    <span className="text-slate-900 font-bold text-lg">Marketing Solutions</span>
                    <p className="text-slate-700">
                        Elevate your marketing strategy with our specialized solutions, including social media marketing and content marketing.
                    </p>
                </div>
            </div>
        </div>
    )
}
