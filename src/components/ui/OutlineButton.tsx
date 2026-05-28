import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface OutlineButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: LucideIcon;
  size?: "sm" | "md" | "lg";
}

export function OutlineButton({
  children,
  onClick,
  className,
  icon: Icon,
  size = "md",
}: OutlineButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-[13px]",
    md: "px-7 py-3.5 text-[15px]",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "relative font-display font-semibold rounded-xl transition-all duration-300 ease-out",
        "bg-transparent border border-nts-cyan/50 text-nts-cyan-light",
        "hover:bg-nts-cyan/10 hover:border-nts-cyan hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]",
        sizeClasses[size],
        className
      )}
    >
      <span className="relative flex items-center justify-center gap-2">
        {children}
        {Icon && <Icon size={16} strokeWidth={2.5} />}
      </span>
    </button>
  );
}
