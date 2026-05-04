import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

type NavLinkType = {
  href: string;
  label: string;
};

const navLinks: NavLinkType[] = [
  { href: "#home", label: "Home" },
  { href: "#varieties", label: "Mangoes" },
  { href: "#why-us", label: "Why Us" },
  { href: "#journey", label: "Process" },
  { href: "/gallery", label: "Gallery" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // 🔥 FIXED LINK HANDLER
  const renderLink = (link: NavLinkType, isMobile = false) => {
    const isRoute = link.href.startsWith("/");
    const isSection = link.href.startsWith("#");

    const baseClass = isMobile
      ? "text-lg font-medium text-gray-700"
      : "text-foreground/80 hover:text-secondary font-medium transition";

    // Route link (e.g. /gallery)
    if (isRoute) {
      return (
        <Link key={link.href} to={link.href} className={baseClass}>
          {link.label}
        </Link>
      );
    }

    // Section link (e.g. #about)
    if (isSection) {
      return (
        <Link
          key={link.href}
          to={`/${link.href}`} // ✅ main fix
          className={baseClass}
          onClick={() => isMobile && setIsMobileMenuOpen(false)}
        >
          {link.label}
        </Link>
      );
    }

    return null;
  };

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/70 backdrop-blur-md border-b border-white/20 shadow-md py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container-custom mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={logo}
              alt="Madhuvan Mango Farm"
              className="h-12 md:h-16 w-auto"
            />
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => renderLink(link))}
          </nav>

          {/* CTA */}
          <a
            href="https://wa.me/919725131748?text=Hi%2C%20I%20want%20to%20order%20fresh%20mangoes!"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn-whatsapp"
          >
            Order Now
          </a>

          {/* Mobile Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 h-full w-[80%] max-w-sm bg-white z-50 shadow-xl p-6 flex flex-col"
            >
              {/* Top */}
              <div className="flex items-center justify-between mb-6">
                <img src={logo} className="h-10" />
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => renderLink(link, true))}
              </nav>

              {/* CTA */}
              <a
                href="https://wa.me/919725131748?text=Hi%2C%20I%20want%20to%20order%20fresh%20mangoes!"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto btn-whatsapp text-center"
              >
                Order Now
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;