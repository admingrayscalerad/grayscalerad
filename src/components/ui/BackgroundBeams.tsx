import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BackgroundBeamsProps {
  className?: string;
}

export function BackgroundBeams({ className }: BackgroundBeamsProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        {/* Vertical beams */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute top-0 h-full w-px"
            style={{
              left: `${(i + 1) * 14}%`,
              background:
                "linear-gradient(to bottom, transparent, rgba(6,182,212,0.1), transparent)",
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}

        {/* Horizontal beams */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute left-0 w-full h-px"
            style={{
              top: `${(i + 1) * 20}%`,
              background:
                "linear-gradient(to right, transparent, rgba(6,182,212,0.08), transparent)",
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + i * 0.7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Corner glows */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-nts-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-nts-purple/5 rounded-full blur-3xl" />
      </motion.div>
    </div>
  );
}
