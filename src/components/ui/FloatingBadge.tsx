import { cn } from "@/lib/utils";

interface FloatingBadgeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function FloatingBadge({ children, className, delay = 0 }: FloatingBadgeProps) {
  return (
    <div
      className={cn(
        "glass absolute rounded-xl border border-nts-cyan/30 p-3",
        "animate-float",
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
