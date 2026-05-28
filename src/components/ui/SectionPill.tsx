import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionPillProps {
  icon: LucideIcon;
  text: string;
  className?: string;
}

export function SectionPill({ icon: Icon, text, className }: SectionPillProps) {
  return (
    <div className={cn("section-pill", className)}>
      <Icon size={11} />
      <span>{text}</span>
    </div>
  );
}
