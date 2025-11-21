import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface TransactionItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    amount: string;
    date: string;
    className?: string;
}

export function TransactionItem({
    icon,
    title,
    description,
    amount,
    date,
    className,
}: TransactionItemProps) {
    return (
        <div className={cn("flex items-center justify-between p-2 gap-3 w-full cursor-pointer hover:bg-muted/50 rounded-lg transition-colors", className)}>
            <div className="flex items-center gap-3 overflow-hidden">
                <div className="shrink-0">
                    {icon}
                </div>
                <div className="flex flex-col gap-0.5 min-w-0">
                    <div className="font-medium text-sm text-foreground truncate">
                        {title}
                    </div>
                    <div className="text-xs text-muted-foreground truncate">
                        {description}
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
                <div className="flex flex-col items-end gap-0.5">
                    <div className="font-medium text-sm text-foreground">
                        {amount}
                    </div>
                    <div className="text-xs text-muted-foreground">
                        {date}
                    </div>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </div>
        </div>
    );
}
