import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from "@/components/ui/tabs"
import {
    CreditCard,
    Plus,
} from "lucide-react"
import { Card as CreditCardd } from "./credit-card"
import { SpendingLimit } from "./spending-limit"

export function MyCards() {
    return (
        <Card className="w-full gap-4">
            <CardHeader>
                <CardTitle className="flex gap-2 items-center font-normal">
                    <CreditCard />
                    My Cards
                </CardTitle>
                <CardAction>
                    <Button className="text-[#525866]" variant="outline"> <Plus /> Add Card</Button>
                </CardAction>
            </CardHeader>
            <CardContent>
                <CreditCardd />
            </CardContent>
            <CardFooter>
                <Tabs defaultValue="weekly" className="min-w-full flex flex-col gap-4">
                    <TabsList className="w-full">
                        <TabsTrigger value="daily">Daily</TabsTrigger>
                        <TabsTrigger value="weekly">Weekly</TabsTrigger>
                        <TabsTrigger value="monthly">Monthly</TabsTrigger>
                    </TabsList>
                    <TabsContent value="daily">
                        <SpendingLimit />
                    </TabsContent>
                    <TabsContent value="weekly">
                        <SpendingLimit />
                    </TabsContent>
                    <TabsContent value="monthly">
                        <SpendingLimit />
                    </TabsContent>
                </Tabs>
            </CardFooter>
        </Card>
    )
}
