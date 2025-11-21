import { Button } from "@/components/ui/button"
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardAction,
} from "@/components/ui/card"
import { Gauge } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export function CreditScore() {
    return (
        <Card className="flex flex-col">
            <CardHeader>
                <CardTitle className="flex gap-2 items-center font-normal">
                    <Gauge />
                    Credit Score
                </CardTitle>
                <CardAction>
                    <Button className="text-[#525866]" variant="outline">Details</Button>
                </CardAction>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 pt-1 flex-1 justify-between">
            <Separator />
                <div className="flex items-center">
                    <div className="flex justify-between items-center w-full">
                        <div className="flex flex-col gap-1">
                            <span className="text-[18px] leading-6 tracking-[-1.5%] font-normal text-[#525866]">Your <span className="text-[#0E121B] font-medium">credit score</span> is <span className="text-[#0E121B] font-medium">710</span></span>
                            <span className="text-[14px] leading-5 tracking-[-1.5%] text-[#525866]">This score is considered to be Excellent.</span>
                        </div>
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFF1EB]">
                            😎
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <Image src="/credit-score/progress.svg" alt="credit score progress" width={320} height={22} className="w-full" />
                </div>
            </CardContent>
        </Card>
    )
}