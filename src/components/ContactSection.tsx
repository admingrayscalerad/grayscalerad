import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, Phone, MapPin } from "lucide-react";
import { CONTACT_INFO } from "@/data/content";
import { SectionPill } from "./ui/SectionPill";
import { GradientText } from "./ui/GradientText";
import { GlassCard } from "./ui/GlassCard";
import { CyberButton } from "./ui/CyberButton";
import { OutlineButton } from "./ui/OutlineButton";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!form.name || !form.email) return;
    setSending(true);
    setError(null);

    console.log('[Home ContactSection] Submitting:', form);

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log('[Home ContactSection] Response:', data);

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to send message');
      }

      if (data.warning) {
        console.warn('[Home ContactSection] Warning:', data.warning);
      }

      setSent(true);
    } catch (err: any) {
      console.error('[Home ContactSection] Error:', err);
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const handleReset = () => {
    setSent(false);
    setError(null);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-[100px] px-[5%] relative overflow-hidden">
      <div className="hero-orb w-[450px] h-[450px] bg-nts-cyan/6 -bottom-[100px] -right-[100px]" />
      <div className="dot-grid absolute inset-0 opacity-25 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <SectionPill icon={Mail} text="Get In Touch" />
          <h2 className="font-display font-extrabold text-[clamp(2rem,3vw,2.8rem)] mb-4">
            Ready to Elevate Your
            <br />
            <GradientText>Radiology Services?</GradientText>
          </h2>
          <p className="text-nts-text-muted max-w-[480px] mx-auto text-[15px]">
            Connect with our team to discuss your tele-radiology needs and start
            delivering better patient outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-10">
              <h3 className="font-display font-bold text-xl mb-6 text-nts-text">
                Contact Information
              </h3>
              {CONTACT_INFO.map((item) => (
                <div key={item.label} className="flex gap-3.5 mb-5.5">
                  <div className="w-11 h-11 rounded-xl flex-shrink-0 bg-nts-cyan/10 border border-nts-cyan/20 flex items-center justify-center">
                    {item.label === "Phone" && <Phone size={18} className="text-nts-cyan" />}
                    {item.label === "Email" && <Mail size={18} className="text-nts-cyan" />}
                    {item.label === "Address" && <MapPin size={18} className="text-nts-cyan" />}
                  </div>
                  <div>
                    <div className="text-xs text-nts-text-muted font-medium mb-0.5">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-nts-text font-medium hover:text-nts-cyan-light transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-sm text-nts-text font-medium">
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Image */}
            <GlassCard className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&q=80&fit=crop"
                alt="Medical Technology"
                className="w-full h-[200px] object-cover opacity-80"
                loading="lazy"
              />
            </GlassCard>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard className="p-8 sm:p-9">
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
                    Send Another
                  </OutlineButton>
                </div>
              ) : (
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
              )}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
