import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-pink-100/60 bg-white/40 backdrop-blur-sm py-12 px-6 mt-16 text-gray-600">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Info */}
        <div className="text-center md:text-left">
          <Link to="/" className="text-lg font-bold text-gray-800 hover:text-pink-600 transition">
            Seona Ann Tom
          </Link>
          <p className="text-xs text-gray-500 mt-1">
            CSE '27 • AI Explorer & Community Builder
          </p>
        </div>

        {/* Center Quick Nav */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-gray-500">
          <Link to="/" className="hover:text-pink-500 transition">Home</Link>
          <Link to="/tinkerhub" className="hover:text-pink-500 transition">TinkerHub</Link>
          <Link to="/hackathons" className="hover:text-pink-500 transition">Hackathons</Link>
          <Link to="/ghci" className="hover:text-pink-500 transition">GHCI '25</Link>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition">Resume</a>
        </div>

        {/* Right Socials */}
        <div className="flex items-center gap-4">
          <motion.a
            href="mailto:seonaanntom9@gmail.com"
            whileHover={{ scale: 1.15, y: -2 }}
            className="w-9 h-9 rounded-full bg-pink-50 flex items-center justify-center text-pink-600 hover:bg-pink-100 transition shadow-sm"
            aria-label="Email Seona"
          >
            <FiMail className="w-4 h-4" />
          </motion.a>
          <motion.a
            href="https://github.com/seonaann"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -2 }}
            className="w-9 h-9 rounded-full bg-pink-50 flex items-center justify-center text-pink-600 hover:bg-pink-100 transition shadow-sm"
            aria-label="GitHub profile"
          >
            <FiGithub className="w-4 h-4" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/seona-ann-tom/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -2 }}
            className="w-9 h-9 rounded-full bg-pink-50 flex items-center justify-center text-pink-600 hover:bg-pink-100 transition shadow-sm"
            aria-label="LinkedIn profile"
          >
            <FiLinkedin className="w-4 h-4" />
          </motion.a>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-400 flex items-center justify-center gap-1.5">
        <span>Designed & built with</span>
        <FiHeart className="w-3.5 h-3.5 text-pink-400 inline fill-pink-400" />
        <span>by Seona Ann Tom • 2026</span>
      </div>
    </footer>
  );
}
