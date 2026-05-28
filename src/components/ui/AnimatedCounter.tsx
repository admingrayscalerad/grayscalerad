import { useCounter } from "@/hooks/index";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  active: boolean;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  target,
  suffix = "",
  active,
  duration = 1800,
  className,
}: AnimatedCounterProps) {
  const value = useCounter(target, active, duration);

  return (
    <span className={cn("font-display font-extrabold text-4xl text-nts-cyan-light", className)}>
      {active ? value : 0}
      {suffix}
    </span>
  );
}
