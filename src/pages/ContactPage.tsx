import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  CheckCircle2,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Globe,
} from "lucide-react";
import { SectionPill } from "@/components/ui/SectionPill";
import { GradientText } from "@/components/ui/GradientText";
import { GlassCard } from "@/components/ui/GlassCard";
import { CyberButton } from "@/components/ui/CyberButton";
import { OutlineButton } from "@/components/ui/OutlineButton";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TextReveal } from "@/components/ui/TextReveal";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";

export function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!form.name || !form.email) return;
    setSending(true);
    setError(null);

    console.log('[ContactForm] Submitting:', form);

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log('[ContactForm] Response:', data);

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to send message');
      }

      if (data.warning) {
        console.warn('[ContactForm] Warning:', data.warning);
      }

      setSent(true);
    } catch (err: any) {
      console.error('[ContactForm] Error:', err);
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const handleReset = () => {
    setSent(false);
    setError(null);
    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 63523 57576",
      href: "tel:+916352357576",
      desc: "Available 24/7 for urgent inquiries",
    },
    {
      icon: Mail,
      label: "Email",
      value: "admin.grayscalerad@gmail.com",
      href: "mailto:admin.grayscalerad@gmail.com",
      desc: "We respond within 24 hours",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "B 601 sky elegant, motera road, tapovan circle, nigam nagar, chandkheda, Ahmedabad-382424",
      href: null,
      desc: "Visit our headquarters",
    },
  ];

  return (
    <div className="pt-[72px]">
      {/* Hero Section */}
      <section className="relative py-20 px-[5%] overflow-hidden">
        <BackgroundBeams />
        <div className="dot-grid absolute inset-0 opacity-30 pointer-events-none" />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.06, 0.1, 0.06] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="hero-orb w-[450px] h-[450px] bg-nts-cyan/8 -bottom-[100px] -right-[100px]"
        />

        <div className="max-w-[1280px] mx-auto relative">
          <div className="text-center mb-16">
            <ScrollReveal variant="fadeUp">
              <SectionPill icon={Mail} text="Contact Us" />
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.1}>
              <h1 className="font-display font-extrabold text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.1] mb-6">
                <TextReveal text="Let's Start a" delay={0.2} />
                <br />
                <GradientText>Conversation</GradientText>
              </h1>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.2}>
              <p className="text-nts-text-secondary text-base leading-[1.8] max-w-[520px] mx-auto">
                Whether you are looking for a full tele-radiology partnership or need
                overflow coverage, our team is ready to discuss your specific needs.
              </p>
            </ScrollReveal>
          </div>

          {/* Contact Methods Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {contactMethods.map((method, i) => (
              <ScrollReveal key={method.label} variant="scale" delay={i * 0.1}>
                <AnimatedCard>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-12 h-12 rounded-xl bg-nts-cyan/10 border border-nts-cyan/20 flex items-center justify-center mb-4"
                  >
                    <method.icon size={22} className="text-nts-cyan" />
                  </motion.div>
                  <div className="text-xs text-nts-text-muted font-semibold uppercase tracking-wider mb-1">
                    {method.label}
                  </div>
                  {method.href ? (
                    <a
                      href={method.href}
                      className="text-nts-text font-bold text-[15px] hover:text-nts-cyan-light transition-colors block mb-1"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <div className="text-nts-text font-bold text-[15px] mb-1">
                      {method.value}
                    </div>
                  )}
                  <p className="text-nts-text-muted text-sm">{method.desc}</p>
                </AnimatedCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-[5%] border-t border-b border-nts-cyan/10">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
            {/* Left Info */}
            <ScrollReveal variant="slideLeft">
              <h2 className="font-display font-bold text-2xl mb-6 text-nts-text">
                How Can We Help?
              </h2>
              <p className="text-nts-text-secondary text-[15px] leading-[1.8] mb-8">
                Our team is ready to discuss your tele-radiology needs, provide
                customized quotes, or answer any questions about our services.
              </p>

              <div className="space-y-6 mb-10">
                <motion.div whileHover={{ x: 4 }} className="flex items-start gap-3 cursor-default">
                  <Clock size={18} className="text-nts-cyan mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm text-nts-text mb-1">
                      Response Time
                    </div>
                    <p className="text-nts-text-muted text-sm">
                      We aim to respond to all inquiries within 24 hours.
                      For urgent needs, please call our 24/7 hotline.
                    </p>
                  </div>
                </motion.div>
                <motion.div whileHover={{ x: 4 }} className="flex items-start gap-3 cursor-default">
                  <MessageSquare
                    size={18}
                    className="text-nts-cyan mt-1 flex-shrink-0"
                  />
                  <div>
                    <div className="font-semibold text-sm text-nts-text mb-1">
                      Free Consultation
                    </div>
                    <p className="text-nts-text-muted text-sm">
                      Schedule a no-obligation consultation to explore how our
                      services can integrate with your workflow.
                    </p>
                  </div>
                </motion.div>
                <motion.div whileHover={{ x: 4 }} className="flex items-start gap-3 cursor-default">
                  <Globe size={18} className="text-nts-cyan mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm text-nts-text mb-1">
                      Nationwide Coverage
                    </div>
                    <p className="text-nts-text-muted text-sm">
                      We serve healthcare institutions across all states in
                      India with localized support teams.
                    </p>
                  </div>
                </motion.div>
              </div>

              <AnimatedCard>
                <img
                  src="https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&q=80&fit=crop"
                  alt="Medical Technology"
                  className="w-full h-[220px] object-cover opacity-80 rounded-xl"
                  loading="lazy"
                />
              </AnimatedCard>
            </ScrollReveal>

            {/* Right Form */}
            <ScrollReveal variant="slideRight">
              <AnimatedCard glowColor="rgba(6,182,212,0.15)">
                <div className="p-8 sm:p-9">
                {sent ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 rounded-full bg-nts-success/15 border border-nts-success/40 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 size={28} className="text-nts-success" />
                    </div>
                    <h3 className="font-display font-bold text-[22px] mb-2.5">
                      Message Sent!
                    </h3>
                    <p className="text-nts-text-muted text-sm">
                      Our team will reach out within 24 hours.
                    </p>
                    <OutlineButton onClick={handleReset} className="mt-6">
                      Send Another Message
                    </OutlineButton>
                  </div>
                ) : (
                  <>
                    <form onSubmit={handleSubmit}>
                    <h3 className="font-display font-bold text-xl mb-7 text-nts-text">
                      Send a Message
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="text-xs text-nts-text-muted font-semibold block mb-1.5">
                          FULL NAME *
                        </label>
                        <input
                          required
                          className="w-full bg-nts-bg-secondary/80 border border-nts-cyan/20 rounded-xl px-4 py-3.5 text-nts-text text-sm outline-none transition-all duration-300 focus:border-nts-cyan focus:shadow-[0_0_18px_rgba(6,182,212,0.18)] placeholder:text-nts-text-faint"
                          placeholder="Dr. John Doe"
                          value={form.name}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, name: e.target.value }))
                          }
                        />
                      </div>
                      <div>
                        <label className="text-xs text-nts-text-muted font-semibold block mb-1.5">
                          EMAIL *
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full bg-nts-bg-secondary/80 border border-nts-cyan/20 rounded-xl px-4 py-3.5 text-nts-text text-sm outline-none transition-all duration-300 focus:border-nts-cyan focus:shadow-[0_0_18px_rgba(6,182,212,0.18)] placeholder:text-nts-text-faint"
                          placeholder="doctor@hospital.com"
                          value={form.email}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, email: e.target.value }))
                          }
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="text-xs text-nts-text-muted font-semibold block mb-1.5">
                        PHONE NUMBER
                      </label>
                      <input
                        className="w-full bg-nts-bg-secondary/80 border border-nts-cyan/20 rounded-xl px-4 py-3.5 text-nts-text text-sm outline-none transition-all duration-300 focus:border-nts-cyan focus:shadow-[0_0_18px_rgba(6,182,212,0.18)] placeholder:text-nts-text-faint"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, phone: e.target.value }))
                        }
                      />
                    </div>
                    <div className="mb-6">
                      <label className="text-xs text-nts-text-muted font-semibold block mb-1.5">
                        MESSAGE
                      </label>
                      <textarea
                        rows={4}
                        className="w-full bg-nts-bg-secondary/80 border border-nts-cyan/20 rounded-xl px-4 py-3.5 text-nts-text text-sm outline-none transition-all duration-300 focus:border-nts-cyan focus:shadow-[0_0_18px_rgba(6,182,212,0.18)] placeholder:text-nts-text-faint resize-none"
                        placeholder="Tell us about your tele-radiology requirements..."
                        value={form.message}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, message: e.target.value }))
                        }
                      />
                    </div>
                    {error && (
                      <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                        {error}
                      </div>
                    )}
                    <CyberButton
                      type="submit"
                      className="w-full justify-center"
                      icon={sending ? undefined : Send}
                    >
                      {sending ? "Sending..." : "Send Message"}
                    </CyberButton>
                    </form>
                  </>
                )}
              </div>
              </AnimatedCard>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
