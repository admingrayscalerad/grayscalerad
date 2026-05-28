import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CyberButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: LucideIcon;
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit";
  disabled?: boolean;
}

export function CyberButton({
  children,
  onClick,
  className,
  icon: Icon,
  size = "md",
  type = "button",
  disabled,
}: CyberButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-[13px]",
    md: "px-7 py-3.5 text-[15px]",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "relative overflow-hidden font-display font-bold rounded-xl transition-all duration-300 ease-out",
        "bg-gradient-to-br from-cyan-700 to-nts-cyan text-nts-bg",
        "hover:shadow-[0_0_30px_rgba(6,182,212,0.55),0_0_60px_rgba(6,182,212,0.2)]",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        sizeClasses[size],
        className
      )}
    >
      <span
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-500 ease-out group-hover:translate-x-full"
        aria-hidden="true"
      />
      <span className="relative flex items-center justify-center gap-2">
        {children}
        {Icon && <Icon size={16} strokeWidth={2.5} />}
      </span>
    </button>
  );
}
