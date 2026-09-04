import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiFileText } from "react-icons/fi";

export default function Contact() {
  const email = "seonaanntom9@gmail.com";

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center py-20 px-6 max-w-4xl mx-auto"
    >
      <div className="bg-white/80 backdrop-blur-md p-10 sm:p-14 rounded-[40px] border border-pink-100/80 shadow-sm relative overflow-hidden">
        {/* Soft Background Accent */}
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-pink-100 rounded-full blur-3xl opacity-60 pointer-events-none" />

        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 flex justify-center items-center gap-3">
          <span>let's build something</span>
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
            className="inline-block text-pink-500"
          >
            ✿
          </motion.span>
        </h2>

        {/* Social / Action Links */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <motion.a
            href={`mailto:${email}`}
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full shadow-md font-semibold text-sm inline-flex items-center gap-2 transition"
          >
            <FiMail className="w-4 h-4" /> Email
          </motion.a>

          <motion.a
            href="https://github.com/seonaann"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="px-6 py-3 border border-pink-300 text-pink-700 bg-white hover:bg-pink-50 rounded-full shadow-sm font-semibold text-sm inline-flex items-center gap-2 transition"
          >
            <FiGithub className="w-4 h-4" /> GitHub
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/seona-ann-tom/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="px-6 py-3 border border-pink-300 text-pink-700 bg-white hover:bg-pink-50 rounded-full shadow-sm font-semibold text-sm inline-flex items-center gap-2 transition"
          >
            <FiLinkedin className="w-4 h-4" /> LinkedIn
          </motion.a>

          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="px-6 py-3 border border-pink-300 text-pink-700 bg-white hover:bg-pink-50 rounded-full shadow-sm font-semibold text-sm inline-flex items-center gap-2 transition"
          >
            <FiFileText className="w-4 h-4" /> Resume 🎀
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}
