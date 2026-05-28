import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  Activity,
  ChevronRight,
} from "lucide-react";
import { SERVICES } from "@/data/content";
import { SectionPill } from "@/components/ui/SectionPill";
import { GradientText } from "@/components/ui/GradientText";
import { CyberButton } from "@/components/ui/CyberButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TextReveal } from "@/components/ui/TextReveal";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { useTheme } from "@/components/ThemeProvider";
import reliableImg from "@/assets/reliable.jpeg";
import multimodelityImg from "@/assets/multimodelity.jpeg";
import counsultationImg from "@/assets/counsultation.jpeg";
import emergencyImg from "@/assets/emergency.jpeg";
import logoImg from "@/assets/logo.jpeg";
import logoblackImg from "@/assets/logoblack.jpeg";
import opinionImg from "@/assets/2opinion.jpeg";
import radioImg from "@/assets/radio.jpeg";

interface ServicePageProps {
  serviceId?: number;
}

const SERVICE_DETAILS: Record<
  number,
  {
    headline: string;
    subtitle: string;
    description: string;
    longDescription: string;
    benefits: string[];
    process: { title: string; desc: string }[];
    stats: { value: string; label: string }[];
    image: string;
    faqs: { q: string; a: string }[];
  }
> = {
  1: {
    headline: "Expert Radiology Consultation",
    subtitle: "Board-certified radiologists providing comprehensive imaging guidance",
    description:
      "Connect with experienced radiologists who provide detailed consultations for complex imaging cases, helping clinicians make informed diagnostic decisions.",
    longDescription:
      "Our radiology consultation service bridges the gap between imaging technology and clinical practice. Whether you need expert interpretation of complex scans, guidance on appropriate imaging protocols, or multidisciplinary case discussions, our team of board-certified radiologists is available to support your clinical decision-making process.",
    benefits: [
      "Board-certified subspecialty radiologists",
      "Real-time consultation via secure platform",
      "Detailed imaging protocol recommendations",
      "Multidisciplinary case discussions",
      "Follow-up consultation support",
      "Integration with hospital PACS systems",
    ],
    process: [
      {
        title: "Submit Case Details",
        desc: "Upload imaging studies and clinical history through our secure portal",
      },
      {
        title: "Expert Review",
        desc: "Subspecialty radiologist reviews your case within 2-4 hours",
      },
      {
        title: "Comprehensive Report",
        desc: "Receive detailed consultation report with actionable recommendations",
      },
    ],
    stats: [
      { value: "50+", label: "Subspecialty Experts" },
      { value: "2-4h", label: "Consultation Turnaround" },
      { value: "98%", label: "Clinician Satisfaction" },
    ],
    image: radioImg,
    faqs: [
      {
        q: "What types of cases can be reviewed?",
        a: "We handle all imaging modalities including X-ray, CT, MRI, Ultrasound, PET, and Nuclear Medicine across all body systems and subspecialties.",
      },
      {
        q: "How quickly can I receive a consultation?",
        a: "Standard consultations are delivered within 2-4 hours. Urgent consultations can be arranged within 30 minutes.",
      },
      {
        q: "Are the radiologists board-certified?",
        a: "Yes, all our consulting radiologists are board-certified with additional fellowship training in their respective subspecialties.",
      },
    ],
  },
  2: {
    headline: "Reliable Reporting",
    subtitle: "Standardized, peer-reviewed radiology reports with exceptional accuracy",
    description:
      "Receive consistent, high-quality radiology reports that meet the highest standards of clinical accuracy and regulatory compliance.",
    longDescription:
      "Our reporting service delivers standardized, peer-reviewed radiology reports that provide clear, actionable insights for clinical teams. Every report undergoes rigorous quality checks to ensure accuracy, completeness, and adherence to international reporting standards. Our structured reporting format enhances communication between radiologists and referring physicians.",
    benefits: [
      "Peer-reviewed quality assurance",
      "Structured reporting templates",
      "Critical finding flagging system",
      "RADS-compliant reporting",
      "Automatic distribution to EMR/PACS",
      "Historical comparison integration",
    ],
    process: [
      {
        title: "Image Acquisition",
        desc: "Studies are securely transmitted to our platform from your imaging equipment",
      },
      {
        title: "Expert Interpretation",
        desc: "Board-certified radiologist provides comprehensive interpretation",
      },
      {
        title: "Quality Review",
        desc: "Senior radiologist reviews and approves the final report",
      },
    ],
    stats: [
      { value: "99.7%", label: "Report Accuracy" },
      { value: "<30min", label: "Standard Turnaround" },
      { value: "100%", label: "RADS Compliant" },
    ],
    image: reliableImg,
    faqs: [
      {
        q: "What reporting standards do you follow?",
        a: "We follow BI-RADS, LI-RADS, Lung-RADS, and other international standardized reporting systems to ensure consistency and quality.",
      },
      {
        q: "How is report quality ensured?",
        a: "Every report undergoes a peer-review process where a senior radiologist checks for accuracy, completeness, and clinical relevance.",
      },
      {
        q: "Can reports integrate with our EMR?",
        a: "Yes, we provide seamless integration with all major EMR and PACS systems through HL7 and DICOM protocols.",
      },
    ],
  },
  3: {
    headline: "Multi-Modality Reporting",
    subtitle: "Comprehensive reporting across all diagnostic imaging modalities",
    description:
      "From X-ray to PET-CT, our team handles reporting for every imaging modality with subspecialty expertise.",
    longDescription:
      "Our multi-modality reporting service covers the complete spectrum of diagnostic imaging. Whether it's routine chest X-rays, complex cardiac MRI, or advanced PET-CT oncology studies, our subspecialty-trained radiologists provide expert interpretation. We ensure seamless workflow integration regardless of the imaging technology used at your facility.",
    benefits: [
      "All modalities covered (X-ray, CT, MRI, US, PET, NM)",
      "Subspecialty expertise per modality",
      "Cross-modality correlation analysis",
      "Standardized terminology across reports",
      "Modality-specific quality metrics",
      "Unified reporting platform",
    ],
    process: [
      {
        title: "Study Triage",
        desc: "Intelligent routing assigns studies to the appropriate subspecialty radiologist",
      },
      {
        title: "Specialized Interpretation",
        desc: "Modality-specific radiologist provides expert analysis",
      },
      {
        title: "Unified Delivery",
        desc: "All reports delivered through a single integrated platform",
      },
    ],
    stats: [
      { value: "15+", label: "Modalities Supported" },
      { value: "200+", label: "Daily Reports" },
      { value: "24/7", label: "Coverage" },
    ],
    image: multimodelityImg,
    faqs: [
      {
        q: "Which imaging modalities do you support?",
        a: "We support all major modalities including X-ray, CT, MRI, Ultrasound, PET-CT, PET-MRI, Nuclear Medicine, Mammography, and Interventional Radiology.",
      },
      {
        q: "Do you have subspecialty radiologists for each modality?",
        a: "Yes, our team includes radiologists with fellowship training in Neuroradiology, Musculoskeletal, Body Imaging, Chest, Cardiac, Women's Imaging, and more.",
      },
      {
        q: "How do you handle cross-modality comparisons?",
        a: "Our platform automatically flags prior studies for comparison, and radiologists are trained to correlate findings across different imaging modalities.",
      },
    ],
  },
  4: {
    headline: "Round-the-Clock Coverage",
    subtitle: "24/7/365 radiologist availability ensuring uninterrupted diagnostic support",
    description:
      "Never worry about staffing gaps again. Our team provides continuous radiology coverage every day of the year.",
    longDescription:
      "Our round-the-clock coverage ensures that your patients never have to wait for critical diagnostic reports. With teams working in coordinated shifts across time zones, we provide seamless 24/7/365 coverage. Whether you need overnight emergency support, weekend coverage, or holiday staffing, our radiologists are always available to deliver timely, accurate reports.",
    benefits: [
      "24/7/365 continuous coverage",
      "No scheduling gaps or delays",
      "Holiday and weekend support",
      "Night shift emergency reads",
      "Scalable team size",
      "Seamless shift handovers",
    ],
    process: [
      {
        title: "Continuous Monitoring",
        desc: "Studies are monitored and triaged in real-time around the clock",
      },
      {
        title: "Shift Rotation",
        desc: "Coordinated global team ensures fresh radiologists are always available",
      },
      {
        title: "Priority Escalation",
        desc: "Critical cases are immediately escalated to senior radiologists",
      },
    ],
    stats: [
      { value: "8760", label: "Hours/Year Coverage" },
      { value: "0", label: "Coverage Gaps" },
      { value: "<15min", label: "Emergency Response" },
    ],
    image: counsultationImg,
    faqs: [
      {
        q: "How do you ensure continuous 24/7 coverage?",
        a: "We maintain a global team of radiologists working in coordinated shifts, ensuring fresh experts are always available regardless of time zone.",
      },
      {
        q: "What happens during holidays and weekends?",
        a: "Our coverage is truly 24/7/365, including all holidays. We maintain full staffing levels every day of the year.",
      },
      {
        q: "Can you handle volume spikes during emergencies?",
        a: "Yes, our scalable team can rapidly increase capacity during mass casualty events or unexpected volume surges.",
      },
    ],
  },
  5: {
    headline: "Emergency Reporting",
    subtitle: "Rapid STAT turnaround with critical finding notifications",
    description:
      "When every second counts, our emergency reporting delivers critical results in minutes, not hours.",
    longDescription:
      "Our emergency reporting service is designed for the most time-sensitive clinical scenarios. From stroke protocols to trauma cases, we provide sub-30-minute turnaround times for STAT reads. Our automated critical finding notification system ensures that urgent results reach the referring physician immediately, enabling rapid clinical intervention when it matters most.",
    benefits: [
      "Sub-30 minute STAT turnaround",
      "Automatic critical finding alerts",
      "Stroke protocol expertise",
      "Trauma imaging specialists",
      "Direct physician communication",
      "Priority queue management",
    ],
    process: [
      {
        title: "Immediate Triage",
        desc: "Emergency studies are flagged and routed to priority queues instantly",
      },
      {
        title: "Rapid Interpretation",
        desc: "Emergency-trained radiologist provides STAT interpretation within minutes",
      },
      {
        title: "Critical Alert",
        desc: "Automated alerts notify referring physicians of critical findings",
      },
    ],
    stats: [
      { value: "15min", label: "Average STAT Time" },
      { value: "100%", label: "Critical Alert Rate" },
      { value: "24/7", label: "Emergency Team" },
    ],
    image: emergencyImg,
    faqs: [
      {
        q: "What is the average turnaround time for STAT cases?",
        a: "Our average STAT turnaround time is under 15 minutes, with the most critical cases read within 5-10 minutes of submission.",
      },
      {
        q: "How are critical findings communicated?",
        a: "Critical findings trigger automatic notifications via SMS, email, and phone calls to ensure the referring physician is immediately informed.",
      },
      {
        q: "Do you have radiologists trained in emergency imaging?",
        a: "Yes, our emergency team includes radiologists with specific training in trauma, stroke, and acute abdominal imaging.",
      },
    ],
  },
  6: {
    headline: "Deep Image Analysis",
    subtitle: "AI-assisted image analysis with expert radiologist oversight",
    description:
      "Harness the power of artificial intelligence combined with human expertise for enhanced diagnostic precision.",
    longDescription:
      "Our deep image analysis service combines cutting-edge artificial intelligence with expert radiologist oversight. AI algorithms assist in detecting subtle abnormalities, measuring lesion volumes, and tracking changes over time. Every AI finding is validated by a board-certified radiologist, ensuring the highest diagnostic confidence while leveraging technology for enhanced efficiency.",
    benefits: [
      "AI-powered anomaly detection",
      "Automated volume measurements",
      "Change detection over time",
      "Quantitative imaging biomarkers",
      "Expert validation of AI findings",
      "Research-grade analysis protocols",
    ],
    process: [
      {
        title: "AI Processing",
        desc: "Advanced algorithms perform initial analysis and flag regions of interest",
      },
      {
        title: "Expert Review",
        desc: "Radiologist validates AI findings and provides clinical interpretation",
      },
      {
        title: "Comprehensive Report",
        desc: "Detailed report includes AI metrics and expert clinical correlation",
      },
    ],
    stats: [
      { value: "99.2%", label: "AI + Expert Accuracy" },
      { value: "40%", label: "Faster Analysis" },
      { value: "25+", label: "AI Models Deployed" },
    ],
    image: logoImg,
    faqs: [
      {
        q: "What types of analysis does the AI perform?",
        a: "Our AI platform performs anomaly detection, lesion segmentation, volumetric analysis, texture analysis, and change detection across all imaging modalities.",
      },
      {
        q: "Is every AI finding reviewed by a radiologist?",
        a: "Yes, all AI findings are validated by board-certified radiologists. The AI serves as a powerful assistant, but human expertise makes the final diagnostic decision.",
      },
      {
        q: "How does AI analysis improve diagnostic confidence?",
        a: "AI provides quantitative measurements and detects subtle changes that might be missed visually, while radiologists provide the clinical context and final interpretation.",
      },
    ],
  },
  7: {
    headline: "Second Opinion Support",
    subtitle: "Independent expert second opinions for complex imaging cases",
    description:
      "Gain additional diagnostic confidence with independent expert reviews from subspecialty radiologists.",
    longDescription:
      "Our second opinion service provides independent expert reviews from subspecialty radiologists who were not involved in the initial interpretation. This fresh perspective is invaluable for complex cases, ambiguous findings, or when confirmation is needed before major clinical decisions. Our independent review process follows strict quality protocols to ensure unbiased, thorough analysis.",
    benefits: [
      "Independent expert radiologists",
      "Subspecialty-specific reviewers",
      "Unbiased fresh perspective",
      "Detailed discrepancy analysis",
      "Clinical correlation review",
      "Confidential case handling",
    ],
    process: [
      {
        title: "Case Submission",
        desc: "Submit imaging studies and prior reports through our secure portal",
      },
      {
        title: "Independent Review",
        desc: "Unaffiliated subspecialty radiologist performs blinded review",
      },
      {
        title: "Comparative Report",
        desc: "Detailed comparison report highlighting agreements and discrepancies",
      },
    ],
    stats: [
      { value: "12%", label: "Discrepancy Rate" },
      { value: "4h", label: "Average Turnaround" },
      { value: "50+", label: "Subspecialty Experts" },
    ],
    image: opinionImg,
    faqs: [
      {
        q: "When should I request a second opinion?",
        a: "Second opinions are valuable for complex cases, ambiguous findings, pre-surgical planning, or when the initial report doesn't align with clinical presentation.",
      },
      {
        q: "Are the second opinion radiologists independent?",
        a: "Yes, all second opinions are provided by radiologists who have no affiliation with the original interpreting facility, ensuring unbiased review.",
      },
      {
        q: "What is included in the second opinion report?",
        a: "The report includes a complete independent interpretation, comparison with the original report, explanation of any discrepancies, and clinical recommendations.",
      },
    ],
  },
};

export function ServicePage({ serviceId: propId }: ServicePageProps) {
  const { theme } = useTheme();
  const { serviceId: paramId } = useParams();
  const id = propId || Number(paramId);
  const service = SERVICES.find((s) => s.id === id);
  const details = SERVICE_DETAILS[id];
  const heroImage = id === 6 && theme === "dark" ? logoblackImg : details.image;

  if (!service || !details) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display font-extrabold text-4xl text-nts-text mb-4">
            Service Not Found
          </h1>
          <Link to="/" className="text-nts-cyan-light hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="pt-[72px]">
      {/* Hero Section */}
      <section className="relative py-20 px-[5%] overflow-hidden">
        <BackgroundBeams />
        <div className="dot-grid absolute inset-0 opacity-30 pointer-events-none" />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.06, 0.1, 0.06],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="hero-orb w-[400px] h-[400px] bg-nts-cyan/8 -top-[100px] -right-[100px]"
        />

        <div className="max-w-[1280px] mx-auto relative">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-nts-text-secondary hover:text-nts-cyan-light transition-colors mb-8 text-sm"
          >
            <ArrowLeft size={16} />
            Back to Services
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <SectionPill icon={Icon} text={service.tag} />
              <h1 className="font-display font-extrabold text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.1] mb-4">
                <TextReveal text={details.headline} delay={0.2} />
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-nts-cyan-light text-lg font-medium mb-4"
              >
                {details.subtitle}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-nts-text-secondary text-base leading-[1.8] mb-8 max-w-[500px]"
              >
                {details.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex gap-3 flex-wrap"
              >
                <Link to="/contact">
                  <CyberButton>Get Started</CyberButton>
                </Link>
                <Link to="/contact">
                  <CyberButton>Contact Sales</CyberButton>
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <AnimatedCard glowColor={`${service.accent}30`}>
                <img
                  src={heroImage}
                  alt={service.title}
                  className="w-full h-[400px] object-cover rounded-xl"
                  loading="eager"
                />
              </AnimatedCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-[5%] border-t border-b border-nts-cyan/10">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {details.stats.map((stat, i) => (
            <ScrollReveal key={stat.label} variant="scale" delay={i * 0.15}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-center cursor-default"
              >
                <motion.div
                  whileHover={{ rotate: [0, -3, 3, 0] }}
                  transition={{ duration: 0.5 }}
                  className="font-display font-extrabold text-[clamp(2.5rem,5vw,4rem)] text-nts-cyan-light mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-nts-text-muted text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 px-[5%]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal variant="slideLeft">
            <h2 className="font-display font-extrabold text-[clamp(1.8rem,3vw,2.4rem)] mb-6">
              Why Choose Our{" "}
              <GradientText>{service.title}</GradientText>?
            </h2>
            <p className="text-nts-text-secondary text-[15px] leading-[1.9] mb-8">
              {details.longDescription}
            </p>

            <div className="space-y-4">
              {details.benefits.map((benefit, i) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 cursor-default"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: `${service.accent}18`,
                      border: `1px solid ${service.accent}30`,
                    }}
                  >
                    <CheckCircle2 size={16} style={{ color: service.accent }} />
                  </motion.div>
                  <span className="text-nts-text-secondary text-sm font-medium">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal variant="slideRight">
            <AnimatedCard glowColor={`${service.accent}20`}>
              <h3 className="font-display font-bold text-xl mb-6 text-nts-text">
                How It Works
              </h3>
              <div className="space-y-6">
                {details.process.map((step, i) => (
                  <div key={step.title} className="relative pl-8">
                    <div
                      className="absolute left-0 top-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{
                        backgroundColor: `${service.accent}20`,
                        color: service.accent,
                        border: `1px solid ${service.accent}40`,
                      }}
                    >
                      {i + 1}
                    </div>
                    <h4 className="font-display font-bold text-[15px] text-nts-text mb-1">
                      {step.title}
                    </h4>
                    <p className="text-nts-text-muted text-sm leading-relaxed">
                      {step.desc}
                    </p>
                    {i < details.process.length - 1 && (
                      <div
                        className="absolute left-3 top-7 w-px h-6"
                        style={{ backgroundColor: `${service.accent}30` }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </AnimatedCard>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-[5%] border-t border-nts-cyan/10">
        <div className="max-w-[800px] mx-auto">
          <ScrollReveal variant="fadeUp" className="text-center mb-12">
            <SectionPill icon={Activity} text="FAQ" />
            <h2 className="font-display font-extrabold text-[clamp(1.8rem,3vw,2.4rem)]">
              Common Questions About{" "}
              <GradientText>{service.title}</GradientText>
            </h2>
          </ScrollReveal>

          <div className="space-y-4">
            {details.faqs.map((faq, i) => (
              <ScrollReveal key={i} variant="fadeUp" delay={i * 0.1}>
                <AnimatedCard glowColor={`${service.accent}15`}>
                  <h3 className="font-display font-bold text-[15px] text-nts-text mb-3 flex items-center gap-2">
                    <motion.div
                      whileHover={{ rotate: 90 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronRight
                        size={16}
                        className="text-nts-cyan flex-shrink-0"
                      />
                    </motion.div>
                    {faq.q}
                  </h3>
                  <p className="text-nts-text-secondary text-sm leading-[1.8] pl-6">
                    {faq.a}
                  </p>
                </AnimatedCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-[5%]">
        <div className="max-w-[1280px] mx-auto">
          <AnimatedCard glowColor={`${service.accent}25`}>
            <div className="p-12 text-center relative overflow-hidden">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.08, 0.15, 0.08],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="hero-orb w-[300px] h-[300px] bg-nts-cyan/8 -top-[100px] left-1/2 -translate-x-1/2"
              />
              <div className="relative z-10">
                <ScrollReveal variant="fadeUp">
                  <h2 className="font-display font-extrabold text-[clamp(1.8rem,3vw,2.4rem)] mb-4">
                    Ready to Get Started With{" "}
                    <GradientText>{service.title}</GradientText>?
                  </h2>
                </ScrollReveal>
                <ScrollReveal variant="fadeUp" delay={0.1}>
                  <p className="text-nts-text-secondary text-base max-w-[500px] mx-auto mb-8">
                    Connect with our team to discuss your specific requirements and
                    see how we can transform your radiology workflow.
                  </p>
                </ScrollReveal>
                <ScrollReveal variant="scale" delay={0.2}>
                  <Link to="/contact">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <CyberButton size="lg">Contact Us Today</CyberButton>
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
