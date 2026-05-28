import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface SpotlightButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function SpotlightButton({
  children,
  onClick,
  className = "",
  variant = "primary",
  size = "md",
}: SpotlightButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const sizeClasses = {
    sm: "px-5 py-2.5 text-[13px]",
    md: "px-7 py-3.5 text-[15px]",
    lg: "px-8 py-4 text-base",
  };

  const variants = {
    primary: "bg-nts-cyan text-nts-bg font-bold",
    outline:
      "bg-transparent border border-nts-cyan/50 text-nts-cyan-light font-semibold",
    ghost: "bg-nts-cyan/10 text-nts-cyan-light font-semibold",
  };

  return (
    <motion.button
      ref={btnRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`relative overflow-hidden rounded-xl transition-all duration-300 ${sizeClasses[size]} ${variants[variant]} ${className}`}
      style={{
        boxShadow: isHovered
          ? "0 0 30px rgba(6,182,212,0.3), 0 0 60px rgba(6,182,212,0.1)"
          : "none",
      }}
    >
      {/* Spotlight effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6,182,212,0.15), transparent 60%)`,
        }}
      />
      {/* Border glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          boxShadow: "inset 0 0 20px rgba(6,182,212,0.2)",
        }}
      />
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}
