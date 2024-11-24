import Link from "next/link";

export default function NotFound() {
    return (
        <main className="h-screen w-full flex flex-col justify-center items-center bg-blue-site">
            <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
            <div className="bg-yellow-site px-2 text-sm rounded rotate-12 absolute">
                Page Not Found
            </div>
            <button className="mt-5">
                <div
                    className="relative inline-block text-sm font-medium text-slate-900 group active:text-orange-500 focus:outline-none focus:ring"
                >
                    <span
                        className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-slate-100 group-hover:translate-y-0 group-hover:translate-x-0"
                    ></span>

                    <span className="relative block px-8 py-3 bg-slate-100 border border-current">
                        <Link href={'/'} title="Home">Go Home</Link>
                    </span>
                </div>
            </button>
        </main>
    )
}