import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
    ChartPie,
    ChevronDown,
    ShoppingBag,
    FileText,
    Coins,
    Info
} from "lucide-react"

export function Summary() {
    return (
        <Card className="w-full gap-4">
            <CardHeader>
                <div className="flex items-center justify-between w-full">
                    <CardTitle className="flex gap-2 items-center font-normal">
                        <ChartPie />
                        Spending Summary
                    </CardTitle>
                    <CardAction>
                        <Button className="p-1 text-[#525866]" variant="outline"> Last Week <ChevronDown /> </Button>
                    </CardAction>
                </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <div className="relative flex flex-col items-center justify-center">
                    <div className="relative w-[252px] h-[124px]">
                        <Image
                            src="/summary-pie/asset-3.svg"
                            alt="chart base"
                            width={252}
                            height={124}
                            className="absolute top-0 left-0"
                        />
                        <Image
                            src="/summary-pie/asset-1.svg"
                            alt="chart start"
                            width={128}
                            height={124}
                            className="absolute top-0 left-0"
                        />
                        <Image
                            src="/summary-pie/asset-2.svg"
                            alt="chart middle"
                            width={93}
                            height={57}
                            className="absolute top-0 left-[126px]"
                        />
                    </div>
                    <div className="absolute top-16 flex flex-col items-center gap-1">
                        <span className="text-[12px] font-medium text-[#525866] uppercase tracking-wider">Spend</span>
                        <span className="text-[24px] font-bold text-[#0E121B]">$1,800.00</span>
                    </div>
                </div>

                <Separator />

                <div className="flex justify-between items-center w-full">
                    <div className="flex flex-col items-center gap-[12.5px] flex-1">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                            <ShoppingBag className="h-5 w-5" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="text-sm text-muted-foreground">Shopping</div>
                            <div className="font-semibold">$900.00</div>
                        </div>
                    </div>
                    <Separator orientation="vertical" className="h-12" />
                    <div className="flex flex-col items-center gap-[12.5px] flex-1">
                        <div className="h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600">
                            <FileText className="h-5 w-5" />
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <div className="text-sm text-muted-foreground">Utilities</div>
                            <div className="font-semibold">$600.00</div>
                        </div>
                    </div>
                    <Separator orientation="vertical" className="h-12" />
                    <div className="flex flex-col items-center gap-[12.5px] flex-1">
                        <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                            <Coins className="h-5 w-5" />
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <div className="text-sm text-muted-foreground">Others</div>
                            <div className="font-semibold">$200.00</div>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Badge variant="outline" className="w-full rounded-lg">
                    <span>Your weekly spending limit is <span className="text-foreground font-medium">$2000</span>.</span>
                    <Info className="h-4 w-4" />
                </Badge>
            </CardFooter>
        </Card>
    )
}