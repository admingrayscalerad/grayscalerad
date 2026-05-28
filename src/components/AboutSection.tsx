import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, CheckCircle2, ArrowRight } from "lucide-react";
import { SectionPill } from "./ui/SectionPill";
import { GradientText } from "./ui/GradientText";
import { CyberButton } from "./ui/CyberButton";
import { GlassCard } from "./ui/GlassCard";
import { AnimatedCard } from "./ui/AnimatedCard";
import { ScrollReveal } from "./ui/ScrollReveal";
import { TextReveal } from "./ui/TextReveal";
import { FEATURES } from "@/data/content";
import { useParallax } from "@/hooks/index";

export function AboutSection() {
  const imgRef = useParallax<HTMLImageElement>(0.12);

  return (
    <section
      id="about"
      className="py-[100px] px-[5%] relative overflow-hidden"
    >
      <div className="hero-orb w-[400px] h-[400px] bg-nts-blue/5 top-0 -left-[100px]" />

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Image */}
        <ScrollReveal variant="slideLeft">
          <div className="relative">
            <div className="absolute -top-5 -left-5 right-5 bottom-5 border border-nts-cyan/20 rounded-[20px]" />
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <GlassCard className="rounded-[20px] overflow-hidden relative">
                <img
                  ref={imgRef}
                  src="https://images.unsplash.com/photo-1581595220921-eec2071e5159?w=700&q=80&fit=crop"
                  alt="Radiologist at work"
                  className="w-full h-[480px] object-cover block opacity-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-nts-cyan/5 to-transparent" />
              </GlassCard>
            </motion.div>

            {/* Experience Badge with animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <GlassCard className="absolute bottom-[30px] -right-5 p-4 border-nts-cyan/30">
                <div className="font-display font-extrabold text-[28px] text-nts-cyan-light">
                  10+
                </div>
                <div className="text-xs text-nts-text-muted font-medium">
                  Years of Excellence
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Right Text */}
        <ScrollReveal variant="slideRight">
          <SectionPill icon={Globe} text="About Us" />
          <h2 className="font-display font-extrabold text-[clamp(2rem,3vw,2.8rem)] leading-[1.15] mb-5">
            Your Trusted Tele-Radiology
            <br />
            <GradientText>Partner in India</GradientText>
          </h2>
          <p className="text-nts-text-secondary text-[15px] leading-[1.9] mb-6">
            Grayscale Radiology is a specialized tele-radiology service provider
            delivering accurate, timely, and clinically reliable radiology solutions
            for healthcare institutions across India.
          </p>
          <p className="text-nts-text-muted text-sm leading-[1.8] mb-9">
            Through a combination of experienced radiologists, standardized reporting
            practices, and secure telemedicine infrastructure, we support healthcare
            providers in achieving diagnostic confidence without geographic constraints.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-9">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-2 cursor-default"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <CheckCircle2 size={14} className="text-nts-cyan flex-shrink-0" />
                </motion.div>
                <span className="text-[13px] text-nts-text-secondary font-medium">
                  {f}
                </span>
              </motion.div>
            ))}
          </div>

          <Link to="/contact">
            <CyberButton icon={ArrowRight}>
              Partner With Us
            </CyberButton>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
