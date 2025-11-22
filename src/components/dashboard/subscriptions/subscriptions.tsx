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
    FileText,
    Music,
    PlayCircle,
    Video
} from "lucide-react"
import { Banner } from "./banner"
import { SubscriptionItem } from "./subscription-item"

export function Subscriptions() {
    return (
        <Card className="w-full gap-4">
            <CardHeader>
                <div className="flex items-center justify-between w-full">
                    <CardTitle className="flex gap-2 items-center font-normal">
                        <FileText />
                        My Subscriptions
                    </CardTitle>
                    <CardAction>
                        <Button className="text-[#525866]" variant="outline"> See All </Button>
                    </CardAction>
                </div>
            </CardHeader>
            <CardContent>
                <Banner />
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
                <SubscriptionItem
                    icon={<Music className="h-5 w-5 text-[#1DB954]" />}
                    title="Spotify"
                    amount="$7.99"
                    frequency="/month"
                    status="Paid"
                    statusClassName="bg-[#E6F8EF] text-[#0F973D] border border-[#E6F8EF]"
                />
                <Separator />
                <SubscriptionItem
                    icon={<PlayCircle className="h-5 w-5 text-[#FF0000]" />}
                    title="Youtube Music"
                    amount="$79.99"
                    frequency="/year"
                    status="Expiring"
                    statusClassName="bg-[#F0F2F5] text-[#525866] border border-[#F0F2F5]"
                />
                <Separator />
                <SubscriptionItem
                    icon={<Video className="h-5 w-5 text-[#00A8E1]" />}
                    title="Prime Video"
                    amount="$9.99"
                    frequency="/month"
                    status="Paused"
                    statusClassName="bg-[#FFF0E5] text-[#FF8447] border border-[#FFF0E5]"
                />
            </CardFooter>
        </Card>
    )
}
