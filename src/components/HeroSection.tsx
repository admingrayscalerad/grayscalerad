import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Activity,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Brain,
} from "lucide-react";
import { SectionPill } from "./ui/SectionPill";
import { CyberButton } from "./ui/CyberButton";
import { OutlineButton } from "./ui/OutlineButton";
import { GlassCard } from "./ui/GlassCard";
import { FloatingBadge } from "./ui/FloatingBadge";
import { TextReveal } from "./ui/TextReveal";
import { BackgroundBeams } from "./ui/BackgroundBeams";
import { useParallax } from "@/hooks/index";
import heroImg from "@/assets/247.jpeg";

export function HeroSection() {
  const imgRef = useParallax<HTMLImageElement>(0.15);
  const words = ["Precision.", "Speed.", "Confidence."];
  const [wordIdx, setWordIdx] = useState(0);
  const [fade, setFade] = useState(true);

  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.95]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setWordIdx((i) => (i + 1) % words.length);
        setFade(true);
      }, 400);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-[72px]"
    >
      <motion.div
        style={{ scale: heroScale }}
        className="w-full"
      >
        {/* Dot Grid BG */}
        <div className="dot-grid absolute inset-0 opacity-60" />

        {/* Background Beams */}
        <BackgroundBeams />

        {/* Ambient Orbs with motion */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="hero-orb w-[500px] h-[500px] bg-nts-cyan/8 -top-[100px] -right-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.07, 0.1, 0.07],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="hero-orb w-[350px] h-[350px] bg-nts-blue/7 -bottom-[50px] -left-[80px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.07, 0.11, 0.07],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="hero-orb w-[200px] h-[200px] bg-nts-purple/7 top-[40%] left-[30%]"
        />

        {/* Scan Line */}
        <div className="scan-line top-0" />

        {/* Hero Content */}
        <div className="max-w-[1280px] w-full mx-auto px-[5%] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[60px] items-center py-[60px]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionPill icon={Activity} text="Tele-Radiology Solutions" />

            <h1 className="font-display font-extrabold text-[clamp(2.4rem,4.5vw,4rem)] leading-[1.1] mb-4">
              <TextReveal text="Diagnostics with" delay={0.2} />
              <br />
              <motion.span
                className="gradient-text inline-block transition-all duration-[400ms]"
                style={{
                  opacity: fade ? 1 : 0,
                  transform: fade ? "translateY(0)" : "translateY(-10px)",
                }}
              >
                {words[wordIdx]}
              </motion.span>
              <br />
              <span className="text-nts-text">Delivered 24/7</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-nts-text-secondary text-base leading-[1.8] max-w-[480px] mb-9"
            >
              Grayscale Radiology connects healthcare providers to expert radiologists
              for accurate, timely imaging reports — across all modalities, around the clock.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex gap-3.5 flex-wrap mb-12"
            >
              <Link to="/contact">
                <CyberButton icon={ArrowRight}>
                  Get Started
                </CyberButton>
              </Link>
              <Link to="/services/1">
                <OutlineButton icon={ChevronRight}>
                  Explore Services
                </OutlineButton>
              </Link>
            </motion.div>

            {/* Mini Stats with hover effects */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex gap-6 flex-wrap"
            >
              {[
                ["500+", "Reports"],
                ["24/7", "Coverage"],
                ["99%", "Accuracy"],
              ].map(([v, l], i) => (
                <motion.div
                  key={l}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="flex flex-col cursor-default"
                >
                  <span className="font-display font-extrabold text-[22px] text-nts-cyan-light">
                    {v}
                  </span>
                  <span className="text-nts-text-muted text-xs font-medium">
                    {l}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center items-center min-h-[400px]"
          >
            {/* Orbit Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[280px] h-[280px] rounded-full border border-dashed border-nts-cyan/25 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute w-[380px] h-[380px] rounded-full border border-dashed border-nts-cyan/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />

            {/* Orbiting Dots */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-nts-cyan shadow-[0_0_12px_#06b6d4]" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-[7px] h-[7px] rounded-full bg-nts-blue shadow-[0_0_8px_#3b82f6]" />
            </motion.div>

            {/* Main Visual Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <GlassCard className="relative overflow-hidden w-[340px] shadow-[0_0_60px_rgba(6,182,212,0.15)]">
                <div className="relative overflow-hidden">
                  <img
                    ref={imgRef}
                    src={heroImg}
                    alt="MRI Scanner"
                    className="w-full h-[320px] object-cover block opacity-85"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-nts-bg/30" />
                  <div className="scan-line" />
                </div>
                <div className="px-5 py-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 rounded-full bg-nts-success"
                    />
                    <span className="text-xs text-nts-success font-semibold">
                      Live Radiology System
                    </span>
                  </div>
                  <p className="text-nts-text-secondary text-[13px] leading-relaxed">
                    AI-assisted diagnostic imaging with expert radiologist review
                  </p>
                </div>
              </GlassCard>
            </motion.div>

            {/* Floating Badge - STAT */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <FloatingBadge
                delay={1}
                className="top-2.5 -right-2.5 border-nts-success/30"
              >
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-nts-success" />
                  <span className="text-xs font-semibold text-nts-text">
                    STAT Report Ready
                  </span>
                </div>
                <div className="text-[11px] text-nts-text-muted mt-0.5">
                  Turnaround: 15 min
                </div>
              </FloatingBadge>
            </motion.div>

            {/* Floating Badge - AI */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <FloatingBadge
                delay={0.5}
                className="bottom-20 -left-5 border-nts-cyan/30"
              >
                <div className="flex items-center gap-2">
                  <Brain size={18} className="text-nts-cyan" />
                  <div>
                    <div className="text-[11px] font-bold text-nts-text">
                      AI Analysis
                    </div>
                    <div className="text-[10px] text-nts-text-muted">
                      Deep learning model
                    </div>
                  </div>
                </div>
              </FloatingBadge>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-nts-bg to-transparent" />
      </motion.div>
    </section>
  );
}
