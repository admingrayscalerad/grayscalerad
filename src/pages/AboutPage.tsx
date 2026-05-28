import { motion } from "framer-motion";
import {
  Globe,
  CheckCircle2,
  ArrowRight,
  Award,
  Users,
  Shield,
  Clock,
  Target,
  Heart,
  Lightbulb,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SectionPill } from "@/components/ui/SectionPill";
import { GradientText } from "@/components/ui/GradientText";
import { CyberButton } from "@/components/ui/CyberButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TextReveal } from "@/components/ui/TextReveal";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { FEATURES } from "@/data/content";
import sarthakImg from "@/assets/sarthak.jpeg";
import rajImg from "@/assets/Raj.jpeg";

const VALUES = [
  {
    icon: Heart,
    title: "Patient-Centered Care",
    desc: "Every report we deliver directly impacts patient outcomes. We prioritize accuracy and clarity above all else.",
  },
  {
    icon: Shield,
    title: "Uncompromising Quality",
    desc: "Our peer-review process and standardized protocols ensure every report meets the highest clinical standards.",
  },
  {
    icon: Clock,
    title: "Reliability & Speed",
    desc: "We understand that timely diagnosis saves lives. Our 24/7 operations ensure no patient waits for critical results.",
  },
  {
    icon: Lightbulb,
    title: "Innovation-Driven",
    desc: "We continuously invest in AI-assisted analysis and cutting-edge technology to enhance diagnostic precision.",
  },
  {
    icon: Users,
    title: "Expert Team",
    desc: "Our network of 50+ board-certified radiologists brings diverse subspecialty expertise to every case.",
  },
  {
    icon: Target,
    title: "Clinical Excellence",
    desc: "We follow international reporting standards and maintain ISO-compliant workflows for consistent quality.",
  },
];

const TEAM = [
  {
    name: "Dr. Sarthak Garg",
    role: "Founder & Lead Radiologist",
    degrees: "M.D Radio-Diagnosis",
    desc: "Precision-focused radiologist combining advanced diagnostic expertise with efficient high-volume teleradiology workflow and rapid turnaround times.",
    image: sarthakImg,
  },
  {
    name: "Dr. Raj vaghasia",
    role: "Founder & Lead Radiologist",
    degrees: "M.D Radio-Diagnosis",
    desc: "Precision-focused radiologist combining advanced diagnostic expertise with efficient high-volume teleradiology workflow and rapid turnaround times.",
    image: rajImg,
  },
];

export function AboutPage() {
  return (
    <div className="pt-[72px]">
      {/* Hero Section */}
      <section className="relative py-20 px-[5%] overflow-hidden">
        <BackgroundBeams />
        <div className="dot-grid absolute inset-0 opacity-30 pointer-events-none" />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.06, 0.1, 0.06] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="hero-orb w-[500px] h-[500px] bg-nts-cyan/8 -top-[100px] -right-[100px]"
        />

        <div className="max-w-[1280px] mx-auto relative">
          <div className="text-center mb-16">
            <ScrollReveal variant="fadeUp">
              <SectionPill icon={Globe} text="About Us" />
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.1}>
              <h1 className="font-display font-extrabold text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.1] mb-6">
                <TextReveal text="Transforming Healthcare" delay={0.2} />
                <br />
                <span className="text-nts-text">Through </span>
                <GradientText>Diagnostic Excellence</GradientText>
              </h1>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.2}>
              <p className="text-nts-text-secondary text-base leading-[1.8] max-w-[600px] mx-auto">
                Grayscale Radiology is India's leading tele-radiology service provider,
                delivering accurate, timely, and clinically reliable imaging solutions
                to healthcare institutions nationwide.
              </p>
            </ScrollReveal>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { value: "10+", label: "Years of Excellence" },
              { value: "50+", label: "Expert Radiologists" },
              { value: "500K+", label: "Reports Delivered" },
              { value: "50+", label: "Partner Institutions" },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} variant="scale" delay={i * 0.1}>
                <AnimatedCard>
                  <div className="p-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="font-display font-extrabold text-3xl text-nts-cyan-light mb-1"
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-nts-text-muted text-xs font-medium">
                      {stat.label}
                    </div>
                  </div>
                </AnimatedCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-[5%] border-t border-b border-nts-cyan/10">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal variant="slideLeft">
            <GlassCard className="rounded-[20px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581595220921-eec2071e5159?w=800&q=80&fit=crop"
                alt="Radiologist reviewing scans"
                className="w-full h-[450px] object-cover"
                loading="lazy"
              />
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal variant="slideRight">
            <h2 className="font-display font-extrabold text-[clamp(1.8rem,3vw,2.4rem)] mb-6">
              Our <GradientText>Mission & Vision</GradientText>
            </h2>
            <p className="text-nts-text-secondary text-[15px] leading-[1.9] mb-6">
              At Grayscale Radiology, we believe that every patient deserves access to
              world-class diagnostic expertise, regardless of their location. Our mission
              is to bridge the gap between healthcare providers and expert radiologists
              through secure, efficient tele-radiology services.
            </p>
            <p className="text-nts-text-muted text-sm leading-[1.8] mb-8">
              We envision a future where geographic barriers no longer limit access to
              quality diagnostic care. By combining experienced radiologists, advanced
              technology, and standardized reporting practices, we empower healthcare
              institutions to deliver better patient outcomes across India.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
              {FEATURES.map((f) => (
                <div key={f} className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-nts-cyan flex-shrink-0" />
                  <span className="text-[13px] text-nts-text-secondary font-medium">
                    {f}
                  </span>
                </div>
              ))}
            </div>

            <Link to="/contact">
              <CyberButton icon={ArrowRight}>Partner With Us</CyberButton>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-[5%]">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal variant="fadeUp" className="text-center mb-16">
            <SectionPill icon={Award} text="Our Values" />
            <h2 className="font-display font-extrabold text-[clamp(1.8rem,3vw,2.4rem)] mb-4">
              The Principles That <GradientText>Guide Us</GradientText>
            </h2>
            <p className="text-nts-text-muted max-w-[500px] mx-auto text-[15px]">
              Our core values define how we operate and deliver value to our partners
              and their patients.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((value, i) => (
              <ScrollReveal key={value.title} variant="fadeUp" delay={i * 0.1}>
                <AnimatedCard>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-12 h-12 rounded-xl bg-nts-cyan/10 border border-nts-cyan/20 flex items-center justify-center mb-4"
                  >
                    <value.icon size={22} className="text-nts-cyan" />
                  </motion.div>
                  <h3 className="font-display font-bold text-[17px] mb-2.5 text-nts-text">
                    {value.title}
                  </h3>
                  <p className="text-nts-text-muted text-sm leading-[1.75]">
                    {value.desc}
                  </p>
                </AnimatedCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-[5%] border-t border-nts-cyan/10">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal variant="fadeUp" className="text-center mb-16">
            <SectionPill icon={Users} text="Our Team" />
            <h2 className="font-display font-extrabold text-[clamp(1.8rem,3vw,2.4rem)] mb-4">
              Meet Our <GradientText>Expert Radiologists</GradientText>
            </h2>
            <p className="text-nts-text-muted max-w-[500px] mx-auto text-[15px]">
              Dedicated professionals committed to delivering accurate and reliable diagnostic reports.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
            {TEAM.map((member, i) => (
              <ScrollReveal key={member.name} variant="fadeUp" delay={i * 0.15}>
                <AnimatedCard>
                  <div className="flex flex-col items-center text-center p-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-24 h-24 rounded-full overflow-hidden border-2 border-nts-cyan/30 mb-5 shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                      />
                    </motion.div>
                    <h3 className="font-display font-bold text-[18px] text-nts-text mb-1">
                      {member.name}
                    </h3>
                    <span className="text-nts-cyan text-xs font-semibold uppercase tracking-wider mb-1">
                      {member.role}
                    </span>
                    <span className="text-nts-text-secondary text-xs font-medium mb-3">
                      {member.degrees}
                    </span>
                    <p className="text-nts-text-muted text-sm leading-[1.75]">
                      {member.desc}
                    </p>
                  </div>
                </AnimatedCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-[5%]">
        <div className="max-w-[1280px] mx-auto">
          <AnimatedCard glowColor="rgba(6,182,212,0.2)">
            <div className="p-12 text-center relative overflow-hidden">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="hero-orb w-[300px] h-[300px] bg-nts-cyan/8 -top-[100px] left-1/2 -translate-x-1/2"
              />
              <div className="relative z-10">
                <ScrollReveal variant="fadeUp">
                  <h2 className="font-display font-extrabold text-[clamp(1.8rem,3vw,2.4rem)] mb-4">
                    Join Our Growing Network of{" "}
                    <GradientText>Healthcare Partners</GradientText>
                  </h2>
                </ScrollReveal>
                <ScrollReveal variant="fadeUp" delay={0.1}>
                  <p className="text-nts-text-secondary text-base max-w-[500px] mx-auto mb-8">
                    Whether you are a small clinic or a multi-hospital network, we have
                    scalable solutions to meet your radiology needs.
                  </p>
                </ScrollReveal>
                <ScrollReveal variant="scale" delay={0.2}>
                  <Link to="/contact">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <CyberButton size="lg">Get In Touch</CyberButton>
                    </motion.div>
                  </Link>
                </ScrollReveal>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>
    </div>
  );
}
