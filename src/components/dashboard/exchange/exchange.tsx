import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
    RefreshCw,
    ChevronDown,
    ArrowRightLeft
} from "lucide-react"

export function Exchange() {
    return (
        <Card className="w-full gap-2">
            <CardHeader>
                <div className="flex items-center justify-between w-full">
                    <CardTitle className="flex gap-2 items-center font-normal">
                        <RefreshCw />
                        Exchange
                    </CardTitle>
                    <CardAction>
                        <Button className="text-[#525866]" variant="outline">Currencies</Button>
                    </CardAction>
                </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <div className="rounded-xl border border-[#E1E4EA]">
                    <div className="flex items-center justify-between px-4 py-1">
                        <div className="flex items-center gap-2 cursor-pointer">
                            <span className="text-2xl">🇺🇸</span>
                            <span className="font-medium text-[#0E121B]">USD</span>
                            <ChevronDown className="h-4 w-4 text-[#525866]" />
                        </div>
                        <div className="h-8 w-px bg-[#E1E4EA] mx-2 relative flex items-center justify-center">
                            <ArrowRightLeft className="h-4 w-4 text-[#525866] absolute bg-white p-0.5" />
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer">
                            <span className="text-2xl">🇪🇺</span>
                            <span className="font-medium text-[#0E121B]">EUR</span>
                            <ChevronDown className="h-4 w-4 text-[#525866]" />
                        </div>
                    </div>
                    <Separator />
                    <div className="flex flex-col items-center justify-center py-2 gap-2">
                        <div className="text-[32px] font-medium leading-10 tracking-[-0.005em] text-[#0E121B]">
                            $100.00
                        </div>
                        <div className="text-[14px] leading-5 text-[#525866]">
                            Available : <span className="font-medium text-[#0E121B]">$16,058.94</span>
                        </div>
                    </div>
                    <div className="bg-[#F5F7FA] rounded-b-xl py-1 text-center border-t border-[#E1E4EA]">
                        <span className="text-[12px] font-medium leading-4 text-[#525866]">1 USD = <span className="font-medium text-[#0E121B]">0.94 EUR</span></span>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                        <span className="text-[14px] leading-5 text-[#525866]">Tax (2%)</span>
                        <span className="text-[14px] font-medium leading-5 text-[#0E121B]">$2.00</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-[14px] leading-5 text-[#525866]">Exchange fee (1%)</span>
                        <span className="text-[14px] font-medium leading-5 text-[#0E121B]">$1.00</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-[14px] leading-5 text-[#525866]">Total amount</span>
                        <span className="text-[14px] font-medium leading-5 text-[#0E121B]">€90.7</span>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button variant={"outline"} className="w-full gap-2">
                    <RefreshCw size={2} />
                    Exchange
                </Button>
            </CardFooter>
        </Card>
    )
}
