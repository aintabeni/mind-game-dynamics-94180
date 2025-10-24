import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ButtonColorfulProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
}

export function ButtonColorful({
    className,
    label = "Explore Components",
    ...props
}: ButtonColorfulProps) {
    return (
        <Button
            className={cn(
                "relative h-10 px-4 overflow-visible",
                "bg-zinc-900 dark:bg-zinc-100",
                "transition-all duration-200",
                "group",
                "before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px]",
                "before:bg-gradient-to-b before:from-transparent before:via-white/60 before:to-transparent",
                "after:absolute after:right-0 after:top-0 after:bottom-0 after:w-[2px]",
                "after:bg-gradient-to-b after:from-transparent after:via-white/60 after:to-transparent",
                className
            )}
            {...props}
        >
            {/* Gradient background effect */}
            <div
                className={cn(
                    "absolute inset-0 overflow-hidden rounded-md",
                    "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
                    "opacity-40 group-hover:opacity-80",
                    "blur transition-opacity duration-500"
                )}
            />

            {/* Content */}
            <div className="relative flex items-center justify-center gap-2">
                <span className="text-white dark:text-zinc-900">{label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/90 dark:text-zinc-900/90" />
            </div>
        </Button>
    );
}
