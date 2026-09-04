import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const getNavLink = (hash) => {
    return isHomePage ? hash : `/${hash}`;
  };

  const navItems = [
    { label: "About", href: getNavLink("#about") },
    { label: "Stories", href: getNavLink("#stories") },
    { label: "Projects", href: getNavLink("#projects") },
    { label: "Experience", href: getNavLink("#experience") },
    { label: "Contact", href: getNavLink("#contact") },
  ];

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 pb-2">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto bg-white/80 backdrop-blur-md border border-pink-100/80 rounded-full px-6 py-3 shadow-[0_4px_20px_rgba(244,114,182,0.08)] flex items-center justify-between transition-all"
      >
        {/* Brand / Logo */}
        <Link
          to="/"
          className="group flex items-center gap-2 text-lg font-bold tracking-tight text-gray-800 hover:text-pink-600 transition"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-pink-400 to-rose-500 group-hover:scale-125 transition-transform" />
          <span>Seona</span>
          <span className="font-normal text-xs text-pink-500 hidden sm:inline-block font-handwriting text-base">ann tom</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-7 text-sm font-medium text-gray-600">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-pink-600 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-pink-400 hover:after:w-full after:transition-all after:duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right CTA / Resume Button */}
        <div className="hidden sm:flex items-center gap-3">
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="text-xs font-semibold px-4 py-2 rounded-full border border-pink-200 text-pink-600 bg-pink-50/70 hover:bg-pink-100 transition flex items-center gap-1.5"
          >
            Resume <span className="text-xs">🎀</span>
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium px-3 py-1.5 rounded-full border border-pink-200 text-pink-600 bg-pink-50/70"
          >
            Resume 🎀
          </motion.a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-700 hover:text-pink-600 focus:outline-none rounded-lg"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 max-w-sm mx-auto bg-white/95 backdrop-blur-lg border border-pink-100 rounded-3xl p-4 shadow-xl"
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 rounded-xl text-gray-700 hover:text-pink-600 hover:bg-pink-50/60 font-medium text-sm transition flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <FiArrowUpRight className="w-4 h-4 text-pink-400" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
