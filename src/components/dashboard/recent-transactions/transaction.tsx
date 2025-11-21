import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
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
    BadgeDollarSign,
    Landmark,
    TrendingUp,
    Home,
    ShoppingBag
} from "lucide-react"
import { TransactionItem } from "./transaction-item"

const TransactionHistory = () => {
    return (
        <div>
            <TransactionItem
                icon={<div className="h-10 w-10 rounded-full border flex items-center justify-center bg-white"><Landmark className="h-5 w-5 text-gray-600" /></div>}
                title="Salary Deposit"
                description="Monthly salary from Apex..."
                amount="$3,500.00"
                date="Sep 18"
            />
            <TransactionItem
                icon={<div className="h-10 w-10 rounded-full border flex items-center justify-center bg-white"><TrendingUp className="h-5 w-5 text-gray-600" /></div>}
                title="Stock Dividend"
                description="Payment from stock investm..."
                amount="$846.14"
                date="Sep 18"
            />
            <TransactionItem
                icon={<div className="h-10 w-10 rounded-full flex items-center justify-center bg-green-100"><Home className="h-5 w-5 text-green-600" /></div>}
                title="Rental Income"
                description="Rental payment from Mr. Du..."
                amount="$100.00"
                date="Sep 17"
            />
            <TransactionItem
                icon={<div className="h-10 w-10 rounded-full border flex items-center justify-center bg-white"><ShoppingBag className="h-5 w-5 text-orange-500" /></div>}
                title="Refund from Amazon"
                description="Refund of Order No #124235"
                amount="$36.24"
                date="Sep 15"
            />
        </div>
    )
}

export function Transaction() {
    return (
        <Card className="w-full gap-4">
            <CardHeader>
                <CardTitle className="flex gap-2 items-center font-normal">
                    <BadgeDollarSign />
                    Recent Transactions
                </CardTitle>
                <CardAction>
                    <Button className="text-[#525866]" variant="outline">See All</Button>
                </CardAction>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="incoming" className="min-w-full flex flex-col gap-5">
                    <TabsList className="w-full">
                        <TabsTrigger value="incoming">Incoming</TabsTrigger>
                        <TabsTrigger value="outgoing">Outgoing</TabsTrigger>
                        <TabsTrigger value="pending">Pending</TabsTrigger>
                    </TabsList>
                    <TabsContent value="incoming" className="flex flex-col gap-2">
                        <TransactionHistory />
                    </TabsContent>
                    <TabsContent value="outgoing" className="flex flex-col gap-2">
                        <TransactionHistory />
                    </TabsContent>
                    <TabsContent value="pending" className="flex flex-col gap-2">
                        <TransactionHistory />
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    )
}