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
                "relative h-8 sm:h-10 md:h-12 px-3 sm:px-4 md:px-6 overflow-hidden",
                "bg-zinc-900 dark:bg-zinc-100",
                "transition-all duration-500 ease-out",
                "hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20",
                "active:scale-95",
                "group",
                className
            )}
            style={{
                transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)"
            }}
            {...props}
        >
            {/* Gradient background effect */}
            <div
                className={cn(
                    "absolute inset-0",
                    "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
                    "opacity-40 group-hover:opacity-60",
                    "blur transition-opacity duration-1000"
                )}
            />

            {/* Content */}
            <div className="relative flex items-center justify-center gap-1 sm:gap-2">
                <span className="text-sm sm:text-base md:text-lg text-white dark:text-zinc-900 transition-transform duration-500 group-hover:translate-x-[-2px]">{label}</span>
                <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white/90 dark:text-zinc-900/90 transition-transform duration-500 group-hover:translate-x-[2px] group-hover:translate-y-[-2px]" />
            </div>
        </Button>
    );
}
