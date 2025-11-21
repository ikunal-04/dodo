import {
    Card,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowDownLeft } from "lucide-react"
import Image from "next/image"

export function Expense() {
    return (
        <Card className="p-5 flex flex-col gap-6">
            <div className="flex justify-between items-start">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E1E4EA]">
                    <ArrowDownLeft size={20} className="text-[#0E121B]" />
                </div>
                <div className="pt-2">
                    <Image src="/expense/chart.svg" alt="chart" width={120} height={42} />
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <div className="font-inter text-[14px] font-normal leading-5 tracking-[-0.006em] text-[#525866]">
                    Total Expenses
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-inter text-[32px] font-medium leading-10 tracking-[-0.005em] text-[#0E121B]">
                        $6,240.28
                    </span>
                    <Badge className="rounded-full px-2 py-[2px] text-[12px] font-medium leading-4 bg-[#FFE5E6] text-[#681219] hover:bg-[#FFE5E6] border-none shadow-none">
                        -2%
                    </Badge>
                </div>
            </div>
        </Card>
    )
}