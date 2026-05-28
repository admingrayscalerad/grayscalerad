import {
  Clock,
  FileText,
  Layers,
  MessageSquare,
  Search,
  Stethoscope,
  Zap,
  MonitorDot,
  Microscope,
  CheckCircle2,
  Award,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: number;
  icon: LucideIcon;
  title: string;
  desc: string;
  tag: string;
  accent: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: LucideIcon;
}

export interface Step {
  step: string;
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface Testimonial {
  name: string;
  role: string;
  rating: number;
  text: string;
}

export const SERVICES: Service[] = [
  {
    id: 1,
    icon: Stethoscope,
    title: "Radiology Consultation",
    desc: "Expert radiologist consultations providing comprehensive imaging guidance and clinical decision support for complex cases.",
    tag: "Core Service",
    accent: "#06b6d4",
  },
  {
    id: 2,
    icon: FileText,
    title: "Reliable Reporting",
    desc: "Standardized, peer-reviewed radiology reports delivered with exceptional accuracy and structured clinical clarity.",
    tag: "Precision",
    accent: "#3b82f6",
  },
  {
    id: 3,
    icon: Layers,
    title: "Multi-Modality Reporting",
    desc: "Comprehensive reporting across X-ray, CT, MRI, Ultrasound, PET and all major diagnostic imaging modalities.",
    tag: "All Modalities",
    accent: "#8b5cf6",
  },
  {
    id: 4,
    icon: Clock,
    title: "Round-the-Clock Coverage",
    desc: "24/7/365 radiologist availability ensuring continuous, uninterrupted coverage for all your diagnostic imaging needs.",
    tag: "24 / 7",
    accent: "#06b6d4",
  },
  {
    id: 5,
    icon: Zap,
    title: "Emergency Reporting",
    desc: "Rapid STAT turnaround for urgent studies with real-time critical finding notifications to the referring team.",
    tag: "STAT Priority",
    accent: "#f59e0b",
  },
  {
    id: 6,
    icon: Search,
    title: "Deep Image Analysis",
    desc: "Advanced AI-assisted image analysis with expert radiologist oversight for maximum diagnostic precision and confidence.",
    tag: "AI-Enhanced",
    accent: "#10b981",
  },
  {
    id: 7,
    icon: MessageSquare,
    title: "Second Opinion Support",
    desc: "Independent expert second opinions providing additional diagnostic confidence for complex or challenging imaging cases.",
    tag: "Expert Review",
    accent: "#ec4899",
  },
];

export const STATS: Stat[] = [
  { value: 500, suffix: "+", label: "Reports Delivered", icon: FileText },
  { value: 24, suffix: "/7", label: "Expert Coverage", icon: Clock },
  { value: 15, suffix: "+", label: "Imaging Modalities", icon: Layers },
  { value: 99, suffix: "%", label: "Report Accuracy", icon: Award },
];

export const STEPS: Step[] = [
  {
    step: "01",
    icon: MonitorDot,
    title: "Submit Your Imaging Study",
    desc: "Securely upload DICOM files via our PACS/RIS-compatible platform for instant radiologist assignment and triage.",
  },
  {
    step: "02",
    icon: Microscope,
    title: "Expert Radiologist Analysis",
    desc: "Board-certified radiologists perform thorough, protocol-driven analysis with AI-assisted diagnostic tools.",
  },
  {
    step: "03",
    icon: CheckCircle2,
    title: "Receive Certified Report",
    desc: "Structured, peer-reviewed reports delivered directly to your system within agreed turnaround times.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Dr. Arjun Mehta",
    role: "Chief Radiologist, Apollo Hospitals",
    rating: 5,
    text: "Grayscale Radiology has transformed our reporting workflow. The turnaround time and accuracy are unmatched in the industry.",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Head of Imaging, Fortis Healthcare",
    rating: 5,
    text: "The multi-modality support and 24/7 availability make Grayscale Radiology an indispensable partner for our diagnostic centre.",
  },
  {
    name: "Dr. Rajan Gupta",
    role: "Medical Director, Max Healthcare",
    rating: 5,
    text: "Their deep image analysis and second opinion service has helped us catch critical findings we might have otherwise missed.",
  },
];

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export const FEATURES = [
  "Seamless PACS/RIS Integration",
  "Peer-reviewed Clinical Reports",
  "Scalable Volume Solutions",
  "Sub-30 Minute STAT Reports",
  "ISO-compliant Workflows",
  "Dedicated Account Management",
];

export const CONTACT_INFO = [
  { label: "Phone", value: "+91 63523 57576", href: "tel:+916352357576" },
  { label: "Email", value: "admin.grayscalerad@gmail.com", href: "mailto:admin.grayscalerad@gmail.com" },
  { label: "Address", value: "B 601 sky elegant, motera road, tapovan circle, nigam nagar, chandkheda, Ahmedabad-382424", href: null },
];
