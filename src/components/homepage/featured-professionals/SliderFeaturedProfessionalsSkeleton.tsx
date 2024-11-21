
export const SliderFeaturedProfessionalsSkeleton = () => {
    return (
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-x-4">
            {
                Array.from({ length: 4 }).map((_, index) => (
                    <div key={ index } className="flex flex-col gap-y-2">
                        <div className="bg-gray-300 rounded w-full animate-pulse h-[18.25rem]"></div>
                        <div className="flex flex-col gap-y-2 px-4">
                            <div className="w-full h-10 bg-gray-300 animate-pulse"></div>
                            <div className="w-full h-6 bg-gray-300 animate-pulse"></div>
                            <div className="w-full h-8 bg-gray-300 animate-pulse"></div>
                            <div className="w-full h-8 bg-gray-300 animate-pulse"></div>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}
