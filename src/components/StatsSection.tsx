import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { STATS } from "@/data/content";
import { AnimatedCounter } from "./ui/AnimatedCounter";
import { ScrollReveal } from "./ui/ScrollReveal";

export function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) setActive(true);
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="py-[60px] px-[5%] border-t border-b border-nts-cyan/10 relative"
    >
      <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((stat, i) => (
          <ScrollReveal
            key={stat.label}
            variant="scale"
            delay={i * 0.15}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="text-center cursor-default"
            >
              <motion.div
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
                className="w-[52px] h-[52px] rounded-full mx-auto mb-3.5 bg-nts-cyan/10 border border-nts-cyan/25 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.1)]"
              >
                <stat.icon size={22} className="text-nts-cyan" />
              </motion.div>
              <AnimatedCounter
                target={stat.value}
                suffix={stat.suffix}
                active={active}
                className="text-4xl"
              />
              <div className="text-nts-text-muted text-[13px] mt-1.5 font-medium">
                {stat.label}
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
