import { motion } from "framer-motion";
import { FiArrowDown, FiAward, FiUsers, FiCompass } from "react-icons/fi";

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-8 pb-16 relative">
      <div className="bg-[#e8dfd4] rounded-[40px] p-8 sm:p-12 md:p-14 grid md:grid-cols-12 items-center gap-10 relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-pink-100/60">
        
        {/* Soft Ambient Light inside hero */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-300/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-200/40 rounded-full blur-[90px] pointer-events-none" />

        {/* LEFT COLUMN (Content) */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } }
          }}
          className="md:col-span-7 relative z-10"
        >
          {/* Handwritten greeting */}
          <motion.p
            variants={cardVariant}
            className="font-handwriting text-2xl text-pink-600 mb-1 tracking-wide"
          >
            hi, see you here :)
          </motion.p>

          <motion.h1
            variants={cardVariant}
            className="text-6xl sm:text-7xl md:text-8xl font-black leading-[0.9] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-pink-600 drop-shadow-sm"
          >
            SEONA
          </motion.h1>

          <motion.h2
            variants={cardVariant}
            className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-gray-700 mt-1"
          >
            Ann Tom
          </motion.h2>

          <motion.p
            variants={cardVariant}
            className="mt-4 text-base sm:text-lg text-gray-700 font-medium leading-relaxed max-w-lg"
          >
            I build, I learn, I figure things out. Exploring AI & machine learning, crafting playful software, and nurturing builder communities.
          </motion.p>

          {/* Quick Credential Badges */}
          <motion.div variants={cardVariant} className="mt-5 flex flex-wrap gap-2 text-xs">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 text-gray-700 border border-pink-200/70 font-medium shadow-sm">
              <FiAward className="text-amber-500" /> SAP Hackfest Nationals
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 text-gray-700 border border-pink-200/70 font-medium shadow-sm">
              <FiUsers className="text-pink-500" /> TinkerHub Coordinator
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 text-gray-700 border border-pink-200/70 font-medium shadow-sm">
              <FiCompass className="text-rose-500" /> GHCI '25 Scholar
            </span>
          </motion.div>

          {/* Call to Actions */}
          <motion.div variants={cardVariant} className="mt-8 flex flex-wrap items-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-pink-300/50 transition flex items-center gap-2 text-sm"
            >
              <span>View Selected Work</span>
              <FiArrowDown className="w-4 h-4" />
            </motion.a>

            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white/80 hover:bg-white text-pink-600 border border-pink-200 font-semibold rounded-full shadow-sm hover:shadow transition flex items-center gap-1.5 text-sm"
            >
              Resume <span>🎀</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN (Polaroid Photo) */}
        <div className="md:col-span-5 flex justify-center relative items-center py-4">
          <motion.img
            src="/girl.png"
            alt="Decorative illustration"
            className="absolute -top-8 w-64 sm:w-72 opacity-35 pointer-events-none"
            whileHover={{ scale: 0.95, opacity: 0.2 }}
            transition={{ duration: 0.4 }}
          />

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            className="relative z-10"
          >
            <motion.div
              whileHover={{
                scale: 1.08,
                rotate: 0,
                y: -6,
                boxShadow: "0px 25px 40px rgba(236,72,153,0.18)"
              }}
              className="rotate-2 bg-white p-3.5 pb-4 shadow-xl rounded-xl border border-pink-100/60 cursor-pointer transition-transform"
            >
              <div className="w-44 h-56 sm:w-48 sm:h-60 overflow-hidden rounded-lg bg-pink-50">
                <img
                  src="/seona.jpg"
                  alt="Seona Ann Tom"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <motion.p
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ repeat: Infinity, duration: 2.4 }}
                className="font-handwriting text-xl mt-2 text-center text-pink-600 font-bold"
              >
                hello :)
              </motion.p>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
