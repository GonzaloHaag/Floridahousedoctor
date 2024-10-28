import Image from "next/image"
import Link from "next/link"

export const CardSliderProfessional = () => {
    return (
        <div className="flex flex-col gap-y-2 rounded group bg-white">
            <div className="relative overflow-hidden rounded">
                <Link href={'/professional/prime-plumbing'} title="plumbers" className="rounded">
                    <Image src={'/images/plumber1.webp'} alt="plumber" width={0} height={0} sizes="100vw" className="relative w-full h-full rounded transition-transform duration-500 hover:scale-125" />
                </Link>
                <div className="absolute top-0 left-0 flex items-center gap-x-2 bg-yellow-site text-slate-100 py-1 px-2 rounded-br">
                    <svg width={16} height={16} fill="#f1f5f9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
                    <span className="font-semibold">Our Rating: 4/5</span>
                </div>
                <Link href={'/plumbers'} className="absolute bottom-0 right-0 flex items-center gap-x-2 bg-blue-site text-slate-100 py-1 px-2 rounded-tl">
                    <svg width={16} height={16} fill="#f1f5f9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M176 56l0 40 160 0 0-40c0-4.4-3.6-8-8-8L184 48c-4.4 0-8 3.6-8 8zM128 96l0-40c0-30.9 25.1-56 56-56L328 0c30.9 0 56 25.1 56 56l0 40 0 32 0 352-256 0 0-352 0-32zM64 96l32 0 0 384-32 0c-35.3 0-64-28.7-64-64L0 160c0-35.3 28.7-64 64-64zM448 480l-32 0 0-384 32 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64z" /></svg>
                    <span>Plumbers</span>
                </Link>
            </div>
            <div className="flex flex-col gap-y-2 px-4">
                <h3 className="text-blue-site font-semibold text-xl">Prime Plumbing</h3>
                <div className="flex items-center gap-x-2 font-normal">
                    <svg width={12} height={12} fill="#174996" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64L80 64l0 320 224 0 0-320z" /></svg>
                    <span>(888) 888-8907</span>
                </div>
                <div className="flex items-center gap-x-2 font-normal">
                    <svg width={12} height={12} fill="#174996" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                    <span>Street, City, State 10019</span>
                </div>

                <Link href={'/details'} className="flex items-center gap-x-2 justify-center my-4 py-2 text-blue-site font-medium group-hover:bg-blue-site group-hover:text-slate-100 transition-colors duration-500 rounded">
                    View details
                    <svg width={14} height={14} className="fill-blue-site group-hover:fill-slate-100 transition-colors duration-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" /></svg>
                </Link>
            </div>
        </div>
    )
}
