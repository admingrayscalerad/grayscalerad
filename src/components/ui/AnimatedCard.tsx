import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  containerClassName?: string;
  borderWidth?: number;
}

export function AnimatedCard({
  children,
  className,
  glowColor = "rgba(6, 182, 212, 0.6)",
  containerClassName,
  borderWidth = 2,
}: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn("relative group h-full", containerClassName)}
    >
      {/* ── Moving light border effect ── */}
      <div
        className="absolute rounded-2xl overflow-hidden transition-opacity duration-500 pointer-events-none"
        style={{
          inset: `-${borderWidth}px`,
          opacity: isHovered ? 1 : 0,
          borderRadius: `${16 + borderWidth}px`,
        }}
      >
        {/* Rotating conic gradient — very thin slice so only a line is visible */}
        <div
          className="absolute inset-[-50%] w-[200%] h-[200%]"
          style={{
            background: `conic-gradient(from 0deg, transparent 0%, ${glowColor} 1%, transparent 3%)`,
            animation: isHovered ? "spin 3s linear infinite" : "none",
          }}
        />
        {/* Inner mask — glass background hides the center so only the border ring shows light */}
        <div
          className="absolute glass"
          style={{
            inset: `${borderWidth}px`,
            borderRadius: `${16 - borderWidth}px`,
          }}
        />
      </div>

      {/* ── Card content ── */}
      <div
        className={cn(
          "relative glass rounded-2xl p-6 h-full pointer-events-auto",
          className
        )}
      >
        {children}
      </div>
    </motion.div>
  );
}
