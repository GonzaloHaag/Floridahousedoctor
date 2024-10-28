export const PreFooter = () => {
    return (
        <section className="w-full bg-[url('/images/hsd-bg05.webp')] bg-cover bg-center py-24 flex flex-col items-center justify-center">
            <div className="flex flex-col gap-y-6 text-center items-center text-slate-100 max-w-3xl mx-auto">
                <h5 className="text-5xl font-bold">Discover Home Improvement Insights</h5>
                <p>
                    Subscribe to our newsletter for the latest updates on home improvement trends, expert advice, and exclusive content. Stay informed with renovation tips and the newest developments in home services delivered straight to your inbox.
                </p>
                <div className="flex items-center gap-x-2">
                    <svg width={16} height={16} fill="#f1f5f9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" /></svg>
                    <span>We respect your privacy and never share your data with third parties.</span>
                </div>
            </div>
        </section>
    )
}
