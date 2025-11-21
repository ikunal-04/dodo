import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
    Avatar,
    AvatarImage,
} from "@/components/ui/avatar"
import { ButtonGroup } from "@/components/ui/button-group"
import { Badge } from "@/components/ui/badge"
import { CircleCheck, ChevronLeft, ChevronRight } from "lucide-react"

export function Card() {
    return (
        <div className="border p-5 rounded-2xl relative overflow-hidden">
            <Image src={'/credit-card/asset-1.svg'} alt={'credit-card'} width={86} height={68} className="absolute top-0 right-0" />
            <Image src={'/credit-card/asset-1.svg'} alt={'credit-card'} width={86} height={68} className="absolute top-9 -right-14" />
            <div className="flex flex-col gap-14 relative z-10">
                <div className="flex items-center justify-between">
                    <div className="flex justify-start items-center gap-4">
                        <div className="flex items-center gap-2">
                            <Avatar className="rounded-full">
                                <AvatarImage src={"/logo.svg"} alt={"logo"} />
                            </Avatar>
                            <Avatar className="h-4 w-5 rounded-full">
                                <AvatarImage src={"/wifi.svg"} alt={"wifi"} />
                            </Avatar>
                        </div>
                        <Badge variant={"outline"} className="rounded-md">
                            <CircleCheck className="rounded-full text-white bg-green-400" />
                            Active
                        </Badge>
                    </div>
                    <div>
                        <Avatar className="rounded-full">
                            <AvatarImage src={"/mastercard.svg"} alt={"logo"} />
                        </Avatar>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="gap-1">
                        <div className="text-[#99A0AE] font-normal text-[14px] leading-5 tracking-tight">Savings Card</div>
                        <div className="font-medium text-[32px] leading-8 tracking-tight">$16,058.94</div>
                    </div>
                    <div className="flex justify-end mt-6">
                        <ButtonGroup
                            orientation="horizontal"
                            className="h-fit"
                        >
                            <Button variant="outline" size="icon" className="h-6 w-6">
                                <ChevronLeft />
                            </Button>
                            <Button variant="outline" size="icon" className="h-6 w-6">
                                <ChevronRight />
                            </Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        </div>
    )
}