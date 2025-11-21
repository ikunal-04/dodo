import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function SpendingLimit() {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="shrink-0">
                    <Image src={'/progress.svg'} alt={'progress'} width={48} height={48} />
                </div>
                <div className="flex flex-col gap-1 justify-items-start">
                    <div className="text-[#525866] font-normal text-[14px] leading-5 tracking-tight">
                        Spending Limit
                    </div>
                    <div className="flex items-center gap-[6px]">
                        <span className="font-medium text-[18px] leading-6 tracking-[-1.5%]">$1500.00</span>
                        <span className="flex items-center text-[#99A0AE]">/{" "}week</span>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-end">
                <Button variant="outline" size="icon" className="h-6 w-6">
                    <ChevronRight />
                </Button>
            </div>
        </div>
    )
}