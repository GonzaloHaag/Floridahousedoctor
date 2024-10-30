import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const FiltersExperts = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-x-10 gap-y-6">
            <Select>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="All Business Highlights" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="apple">Eco-Friendly</SelectItem>
                        <SelectItem value="banana">Evening Consultations</SelectItem>
                        <SelectItem value="blueberry">Family Owned</SelectItem>
                        <SelectItem value="grapes">Free Consultation</SelectItem>
                        <SelectItem value="pineapple">Free Estimate</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>

            <Select>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="All Cities" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="apple">New York</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>

            <Select>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="All Professional Types" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="apple">Carpenters</SelectItem>
                        <SelectItem value="banana">Cleaning Services</SelectItem>
                        <SelectItem value="blueberry">Electricians</SelectItem>
                        <SelectItem value="grapes">Handyman</SelectItem>
                        <SelectItem value="pineapple">Home Remodeling</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>

            <Select>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="All Service Types" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="apple">Bathroom Remodeling</SelectItem>
                        <SelectItem value="banana">Door Repair</SelectItem>
                        <SelectItem value="blueberry">Electrical Installations</SelectItem>
                        <SelectItem value="grapes">Electronics Recovery</SelectItem>
                        <SelectItem value="pineapple">Fence Repair</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}
