import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Scan, ChevronRight, ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/data/content";
import { SectionPill } from "./ui/SectionPill";
import { GradientText } from "./ui/GradientText";
import { AnimatedCard } from "./ui/AnimatedCard";
import { TextReveal } from "./ui/TextReveal";
import { ScrollReveal } from "./ui/ScrollReveal";

export function ServicesSection() {
  return (
    <section id="services" className="py-[100px] px-[5%] relative">
      <div className="dot-grid absolute inset-0 opacity-30 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto relative">
        {/* Heading */}
        <div className="text-center mb-16">
          <ScrollReveal variant="fadeUp" delay={0}>
            <SectionPill icon={Scan} text="Our Services" />
          </ScrollReveal>
          <ScrollReveal variant="fadeUp" delay={0.1}>
            <h2 className="font-display font-extrabold text-[clamp(2rem,3vw,2.8rem)] mb-4">
              Comprehensive Tele-Radiology
              <br />
              <GradientText>Services & Solutions</GradientText>
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="fadeUp" delay={0.2}>
            <p className="text-nts-text-muted max-w-[520px] mx-auto text-[15px] leading-[1.8]">
              From routine reporting to emergency STAT reads — we deliver expert radiology
              services tailored to your clinical needs.
            </p>
          </ScrollReveal>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link to={`/services/${service.id}`} className="block h-full">
                <AnimatedCard
                  glowColor={`${service.accent}40`}
                  className="h-full group"
                >
                  {/* Tag */}
                  <div
                    className="inline-block px-2.5 py-[3px] rounded-full text-[10px] font-bold uppercase tracking-wider mb-4"
                    style={{
                      backgroundColor: `${service.accent}15`,
                      border: `1px solid ${service.accent}40`,
                      color: service.accent,
                    }}
                  >
                    {service.tag}
                  </div>

                  {/* Icon with hover animation */}
                  <motion.div
                    whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="w-[50px] h-[50px] rounded-[14px] flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: `${service.accent}18`,
                      border: `1px solid ${service.accent}30`,
                      color: service.accent,
                    }}
                  >
                    <service.icon size={22} />
                  </motion.div>

                  <h3 className="font-display font-bold text-[17px] mb-2.5 text-nts-text group-hover:text-nts-cyan-light transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-nts-text-muted text-[13.5px] leading-[1.75]">
                    {service.desc}
                  </p>

                  {/* Learn More with arrow animation */}
                  <div
                    className="flex items-center gap-1.5 mt-5 text-[13px] font-semibold transition-all duration-300"
                    style={{ color: service.accent }}
                  >
                    <span>Learn more</span>
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      className="inline-block"
                    >
                      <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </motion.span>
                  </div>
                </AnimatedCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
