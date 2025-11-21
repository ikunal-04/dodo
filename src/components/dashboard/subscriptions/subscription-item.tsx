import { MoreVertical } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface SubscriptionItemProps {
    icon: React.ReactNode
    title: string
    amount: string
    frequency: string
    status: string
    statusClassName?: string
}

export function SubscriptionItem({
    icon,
    title,
    amount,
    frequency,
    status,
    statusClassName
}: SubscriptionItemProps) {
    return (
        <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E1E4EA] p-2">
                    {icon}
                </div>
                <div className="flex flex-col">
                    <div className="font-inter text-[12px] font-normal leading-4 text-[#525866]">
                        {title}
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="font-inter text-[14px] font-medium leading-5 text-[#0E121B]">
                            {amount}
                        </span>
                        <span className="font-inter text-[12px] font-normal leading-4 text-[#99A0AE]">
                            {frequency}
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <Badge variant="secondary" className={cn("rounded-full px-2 py-[2px] text-[12px] font-medium hover:bg-opacity-80", statusClassName)}>
                    {status}
                </Badge>
                <button className="text-[#99A0AE] hover:text-[#525866]">
                    <MoreVertical className="h-4 w-4" />
                </button>
            </div>
        </div>
    )
}
