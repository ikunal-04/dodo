import { AppSidebar } from "@/components/app-sidebar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Search, BellDotIcon, ArrowUpRight } from "lucide-react"
import { MyCards } from "@/components/dashboard/my-card/my-card"
import { Transaction } from "@/components/dashboard/recent-transactions/transaction"
import { Summary } from "@/components/dashboard/summary/summary"
import { Subscriptions } from "@/components/dashboard/subscriptions/subscriptions"
import { Expense } from "@/components/dashboard/total-expenses/expense"
import { Exchange } from "@/components/dashboard/exchange/exchange"
import { CreditScore } from "@/components/dashboard/credit-score/credit-score"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 pr-4">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="md:hidden -ml-1" />
            <Separator
              orientation="vertical"
              className="md:hidden mr-2 data-[orientation=vertical]:h-4"
            />
            <Avatar className="hidden md:flex h-8 w-8 bg-[#C0D5FF] rounded-full">
              <AvatarImage src={"/user.svg"} alt="{user.name}" />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
            <div className="hidden md:grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">Arthur Taylor</span>
              <span className="truncate text-xs">Welcome back to Apex 👋</span>
            </div>
          </div>
          <div className="flex gap-[22px] items-center justify-end">
            <Search className="h-4 w-4" />
            <BellDotIcon size={16} />
            <Button className="gap-1 bg-[#335CFF] rounded-[10px]">Move Money <ArrowUpRight size={20} /> </Button>
          </div>
        </header>
        <div className="grid auto-rows-min gap-4 md:grid-cols-3 p-4 pt-0">
          <div className="flex flex-col gap-6 rounded-xl">
            <MyCards />
            <Transaction />
          </div>
          <div className="flex flex-col gap-6 rounded-xl">
            <Summary />
            <Subscriptions />
          </div>
          <div className="flex flex-col gap-6 rounded-xl h-full">
            <Expense />
            <Exchange />
            <CreditScore />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
