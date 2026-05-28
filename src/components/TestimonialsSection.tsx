import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/content";
import { SectionPill } from "./ui/SectionPill";
import { GradientText } from "./ui/GradientText";
import { AnimatedCard } from "./ui/AnimatedCard";

function TestimonialCard({ testimonial, index }: { testimonial: typeof TESTIMONIALS[0]; index: number }) {
  const initials = testimonial.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="h-full"
    >
      <AnimatedCard>
        {/* Quote icon */}
        <div className="absolute top-4 right-5 opacity-20">
          <Quote size={40} className="text-nts-cyan" />
        </div>

        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, j) => (
            <motion.div
              key={j}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + j * 0.05 + 0.2, duration: 0.3 }}
            >
              <Star size={16} className="text-amber-400 fill-amber-400" />
            </motion.div>
          ))}
        </div>

        {/* Quote text */}
        <p className="text-nts-text-secondary text-[15px] leading-[1.75] mb-6 relative z-10">
          &ldquo;{testimonial.text}&rdquo;
        </p>

        {/* Author */}
        <div className="flex items-center gap-3.5 pt-4 border-t border-nts-cyan/10">
          <div className="relative">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-nts-cyan to-nts-blue flex items-center justify-center font-display font-extrabold text-sm text-white shadow-[0_0_12px_rgba(6,182,212,0.4)]">
              {initials}
            </div>
            {/* Online indicator */}
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-nts-success border-2 border-nts-bg shadow-sm" />
          </div>
          <div>
            <div className="font-semibold text-sm text-nts-text">
              {testimonial.name}
            </div>
            <div className="text-xs text-nts-text-muted">{testimonial.role}</div>
          </div>
        </div>
      </AnimatedCard>
    </motion.div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-24 px-[5%] border-t border-b border-nts-cyan/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-nts-cyan/3 blur-[100px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <SectionPill icon={Star} text="Testimonials" />
          <h2 className="font-display font-extrabold text-[clamp(1.8rem,3vw,2.4rem)]">
            Trusted by <GradientText>Leading Institutions</GradientText>
          </h2>
          <p className="text-nts-text-muted mt-4 max-w-[500px] mx-auto text-[15px] leading-relaxed">
            Hear from healthcare professionals who have transformed their radiology workflow with our services.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center gap-8 items-center"
        >
          {["Apollo Hospitals", "Fortis Healthcare", "Max Healthcare", "Medanta"].map((hospital) => (
            <div key={hospital} className="text-nts-text-muted/40 font-display font-bold text-sm tracking-wider uppercase">
              {hospital}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
