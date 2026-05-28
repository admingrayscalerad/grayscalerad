import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";
import { STEPS } from "@/data/content";
import { SectionPill } from "./ui/SectionPill";
import { GradientText } from "./ui/GradientText";

export function HowItWorksSection() {
  return (
    <section className="py-[100px] px-[5%] relative overflow-hidden">
      <div className="hero-orb w-[500px] h-[300px] bg-nts-purple/5 top-1/2 -right-[200px] -translate-y-1/2" />

      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <SectionPill icon={BarChart3} text="Workflow" />
          <h2 className="font-display font-extrabold text-[clamp(2rem,3vw,2.8rem)]">
            How It <GradientText>Works</GradientText>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-center"
            >
              {/* Step Number Circle */}
              <div className="relative mb-7">
                <div className="w-20 h-20 rounded-full mx-auto bg-gradient-to-br from-nts-cyan/15 to-nts-blue/10 border border-nts-cyan/30 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                  <step.icon size={30} className="text-nts-cyan" />
                </div>
                <div className="absolute -top-1.5 right-[calc(50%-48px)] font-display font-extrabold text-[13px] text-nts-cyan/50 tracking-wider">
                  {step.step}
                </div>
              </div>
              <h3 className="font-display font-bold text-lg mb-3 text-nts-text">
                {step.title}
              </h3>
              <p className="text-nts-text-muted text-sm leading-[1.8]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
