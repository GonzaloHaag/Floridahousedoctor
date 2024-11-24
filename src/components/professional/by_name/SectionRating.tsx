import { Progress } from "@/components/ui/progress"

export const SectionRating = () => {
    return (
        <div className="flex flex-col gap-y-4">
            <h4 className="text-center text-2xl font-semibold text-blue-site">Our Rating</h4>
            <div className="flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-1">
                    <span>Quality of Work</span>
                    <Progress value={80} />
                </div>
                <div className="flex flex-col gap-y-1">
                    <span>Timeliness</span>
                    <Progress value={80} />
                </div>
                <div className="flex flex-col gap-y-1">
                    <span>Profesionalism</span>
                    <Progress value={80} />
                </div>
                <div className="flex flex-col gap-y-1">
                    <span>Value for Money</span>
                    <Progress value={80} />
                </div>
            </div>
            <div className="flex flex-col gap-y-2 justify-center items-center text-center">
                <svg width={60} height={60} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#e6a424" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
                <span className="text-xl font-semibold text-blue-site">Overall Rating</span>
                <span className="text-3xl font-bold">4/5</span>
            </div>
        </div>
    )
}
