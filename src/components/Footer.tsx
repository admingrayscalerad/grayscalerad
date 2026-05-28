import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { SERVICES } from "@/data/content";
import { useTheme } from "./ThemeProvider";

export function Footer() {
  const { theme } = useTheme();
  const contacts = [
    { icon: Phone, val: "+91 63523 57576", href: "tel:+916352357576" },
    { icon: Mail, val: "admin.grayscalerad@gmail.com", href: "mailto:admin.grayscalerad@gmail.com" },
    { icon: MapPin, val: "B 601 sky elegant, motera road, tapovan circle, nigam nagar, chandkheda, Ahmedabad-382424", href: null },
  ];

  return (
    <footer className="border-t border-nts-cyan/10 pt-[52px] px-[5%] pb-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <img
                src={theme === "dark" ? "/logoblack.jpeg" : "/logo.jpeg"}
                alt="Grayscale Radiology Logo"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="font-display font-extrabold text-[17px]">
                <span className="text-nts-cyan-light">Grayscale</span>
                <span className="text-nts-text"> Radiology</span>
              </span>
            </Link>
            <p className="text-nts-text-muted text-[13.5px] leading-[1.8] max-w-[280px]">
              Delivering trusted tele-radiology and clinical imaging support to
              healthcare institutions across India.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-[13px] text-nts-text uppercase tracking-wider mb-4">
              Services
            </h4>
            {SERVICES.slice(0, 5).map((s) => (
              <Link
                key={s.id}
                to={`/services/${s.id}`}
                className="block text-nts-text-muted text-[13px] mb-2.5 hover:text-nts-cyan-light transition-colors duration-200"
              >
                {s.title}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-[13px] text-nts-text uppercase tracking-wider mb-4">
              Company
            </h4>
            <Link
              to="/about"
              className="block text-nts-text-muted text-[13px] mb-2.5 hover:text-nts-cyan-light transition-colors duration-200"
            >
              About Us
            </Link>
            <Link
              to="/"
              className="block text-nts-text-muted text-[13px] mb-2.5 hover:text-nts-cyan-light transition-colors duration-200"
            >
              How It Works
            </Link>
            <Link
              to="/contact"
              className="block text-nts-text-muted text-[13px] mb-2.5 hover:text-nts-cyan-light transition-colors duration-200"
            >
              Contact Us
            </Link>
            <Link
              to="/contact"
              className="block text-nts-text-muted text-[13px] mb-2.5 hover:text-nts-cyan-light transition-colors duration-200"
            >
              Partner Program
            </Link>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-[13px] text-nts-text uppercase tracking-wider mb-4">
              Contact
            </h4>
            {contacts.map((item) => (
              <div key={item.val} className="flex gap-2 items-start mb-3">
                <item.icon
                  size={14}
                  className="text-nts-cyan mt-0.5 flex-shrink-0"
                />
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-nts-text-muted text-[13px] leading-relaxed hover:text-nts-cyan-light transition-colors"
                  >
                    {item.val}
                  </a>
                ) : (
                  <span className="text-nts-text-muted text-[13px] leading-relaxed">
                    {item.val}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-nts-cyan/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="text-nts-text-faint text-[13px]">
            &copy; 2026 Grayscale Radiology. All rights reserved.
          </span>
          <span className="text-nts-text-faint text-[13px]">
            Designed with <span className="text-nts-cyan">♥</span> for better diagnostics
          </span>
        </div>
      </div>
    </footer>
  );
}
