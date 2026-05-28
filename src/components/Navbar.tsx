import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { SERVICES } from "@/data/content";
import { CyberButton } from "@/components/ui/CyberButton";
import { useTheme } from "./ThemeProvider";

const NAV_LINKS = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services", hasDropdown: true },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesTimeoutRef = useRef<ReturnType<typeof setTimeout>>(null);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 200);
  };

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[350ms] ${
          scrolled
            ? "bg-nts-bg/92 backdrop-blur-xl border-b border-nts-cyan/10 shadow-[0_4px_30px_rgba(6,182,212,0.08)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-[5%] h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 cursor-pointer flex-shrink-0"
          >
            <img
              src={theme === "dark" ? "/logoblack.jpeg" : "/logo.jpeg"}
              alt="Grayscale Radiology Logo"
              className="w-9 h-9 rounded-full object-cover shadow-[0_0_16px_rgba(6,182,212,0.5)]"
            />
            <span className="font-display font-extrabold text-lg tracking-tight hidden sm:block">
              <span className="text-nts-cyan-light">Grayscale</span>
              <span className="text-nts-text"> Radiology</span>
            </span>
          </Link>

          {/* Desktop Nav - Centered */}
          <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                >
                  <button
                    className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-300 py-1 ${
                      isActive("/services")
                        ? "text-nts-cyan-light"
                        : "text-nts-text-secondary hover:text-nts-cyan-light"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                    {/* Active indicator dot */}
                    {isActive("/services") && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-nts-cyan" />
                    )}
                  </button>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 12, scale: 0.95 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 z-50"
                      >
                        {/* Invisible bridge for hover */}
                        <div className="h-4 w-full absolute -top-4 left-0" />

                        <div
                          className="border border-nts-cyan/20 rounded-2xl p-2 w-[320px] shadow-[0_8px_32px_rgba(6,182,212,0.15)] relative overflow-hidden"
                          style={{
                            backgroundColor: theme === 'dark' ? '#030712' : '#ffffff',
                          }}
                        >
                          <div className="px-3 py-2.5 mb-1 border-b border-nts-cyan/10">
                            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-nts-cyan-light/70">
                              Our Services
                            </span>
                          </div>
                          <div className="space-y-0.5">
                            {SERVICES.map((s) => (
                              <Link
                                key={s.id}
                                to={`/services/${s.id}`}
                                className="flex items-center gap-3 px-3 py-2.5 text-[13px] text-nts-text-secondary hover:bg-nts-cyan/10 hover:text-nts-cyan-light rounded-xl transition-all duration-200 w-full text-left group/item"
                              >
                                <div
                                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover/item:scale-110"
                                  style={{
                                    backgroundColor: `${s.accent}15`,
                                    border: `1px solid ${s.accent}30`,
                                  }}
                                >
                                  <s.icon
                                    size={15}
                                    style={{ color: s.accent }}
                                  />
                                </div>
                                <span className="font-medium">{s.title}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-medium transition-colors duration-300 py-1 ${
                    isActive(link.path)
                      ? "text-nts-cyan-light"
                      : "text-nts-text-secondary hover:text-nts-cyan-light"
                  }`}
                >
                  {link.label}
                  {/* Active indicator */}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-nts-cyan to-nts-blue rounded-full transition-all duration-300 ${
                      isActive(link.path) ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              )
            )}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="w-9 h-9 rounded-xl flex items-center justify-center border border-nts-cyan/20 bg-nts-cyan/5 text-nts-text-secondary hover:text-nts-cyan-light hover:border-nts-cyan/40 hover:bg-nts-cyan/10 transition-all duration-300"
              aria-label={
                theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>

            <div className="hidden md:block">
              <Link to="/contact">
                <CyberButton size="sm">Contact Us</CyberButton>
              </Link>
            </div>
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden bg-none border-none text-nts-text-secondary cursor-pointer p-1 hover:text-nts-cyan-light transition-colors"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-nts-bg/60 backdrop-blur-sm z-[400] md:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="fixed top-0 right-0 bottom-0 w-[320px] max-w-[85vw] bg-nts-bg-secondary/98 backdrop-blur-xl z-[500] flex flex-col p-6 pt-20 border-l border-nts-cyan/10"
          >
            <div className="absolute top-5 right-5 flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="w-10 h-10 rounded-xl flex items-center justify-center border border-nts-cyan/20 bg-nts-cyan/5 text-nts-text-secondary hover:text-nts-cyan-light transition-all duration-300"
                aria-label={
                  theme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-10 h-10 rounded-xl flex items-center justify-center border border-nts-cyan/20 bg-nts-cyan/5 text-nts-text-secondary hover:text-nts-cyan-light transition-all duration-300"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Logo in mobile menu */}
            <Link to="/" className="flex items-center gap-2.5 mb-8" onClick={() => setMobileOpen(false)}>
              <img
                src={theme === "dark" ? "/logoblack.jpeg" : "/logo.jpeg"}
                alt="Grayscale Radiology Logo"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="font-display font-extrabold text-base tracking-tight">
                <span className="text-nts-cyan-light">Grayscale</span>
                <span className="text-nts-text"> Radiology</span>
              </span>
            </Link>

            {/* Main Nav Links */}
            <div className="space-y-1">
              {NAV_LINKS.filter((l) => !l.hasDropdown).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block font-display font-bold text-lg py-3 px-3 rounded-xl transition-all duration-200 ${
                    isActive(link.path)
                      ? "text-nts-cyan-light bg-nts-cyan/10"
                      : "text-nts-text hover:bg-nts-cyan/5 hover:text-nts-cyan-light"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Services in Mobile */}
              <div className="py-3 px-3">
                <div className="font-display font-bold text-lg text-nts-text mb-3">
                  Services
                </div>
                <div className="space-y-1 pl-2">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.id}
                      to={`/services/${s.id}`}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2.5 text-sm text-nts-text-secondary hover:text-nts-cyan-light transition-colors py-2 px-2 rounded-lg hover:bg-nts-cyan/5"
                    >
                      <div
                        className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor: `${s.accent}15`,
                          border: `1px solid ${s.accent}30`,
                        }}
                      >
                        <s.icon size={14} style={{ color: s.accent }} />
                      </div>
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-auto pt-6 border-t border-nts-cyan/10">
              <Link to="/contact" onClick={() => setMobileOpen(false)} className="block">
                <CyberButton className="w-full justify-center">Contact Us</CyberButton>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
