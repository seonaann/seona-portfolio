import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LightboxModal from "../components/LightboxModal";

export default function GHCI() {
  const [lightbox, setLightbox] = useState({ isOpen: false, src: "", caption: "" });

  const openPhoto = (src, caption) => {
    setLightbox({ isOpen: true, src, caption });
  };

  const closePhoto = () => {
    setLightbox({ isOpen: false, src: "", caption: "" });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[#f3ede6] text-gray-800 font-sans relative overflow-x-hidden flex flex-col justify-between"
    >
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-8 flex-1">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 font-semibold mb-8 hover:-translate-x-1 transition-transform text-sm"
        >
          <FiArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-black mb-10 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500 drop-shadow-sm leading-tight tracking-tight"
        >
          Stepping Into GHC India 2025
        </motion.h1>

        {/* Gallery Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between px-2 mb-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 flex items-center gap-2">
              Moments from GHCI
              <motion.span animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>📸</motion.span>
            </h2>
            <span className="text-xs text-pink-500 font-medium hidden sm:inline">
              click any photo to view full size
            </span>
          </div>

          <p className="text-sm text-gray-500 px-2 mb-6 font-medium italic">
            chaos, conversations, learning, and a little bit of magic
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Main Featured Photo */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              onClick={() => openPhoto("/ghci1.jpg", "GHCI 2025 celebration moments")}
              className="sm:col-span-2 sm:row-span-2 bg-[#e8dfd4] rounded-[32px] h-80 sm:h-96 w-full overflow-hidden shadow-sm border border-pink-100 cursor-pointer group relative"
            >
              <img
                src="/ghci1.jpg"
                alt="GHCI Highlight"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white text-xs font-semibold bg-black/50 px-3 py-1 rounded-full backdrop-blur-xs">
                  View full image 🔍
                </span>
              </div>
            </motion.div>

            {/* Photo 2 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              onClick={() => openPhoto("/ghci2.jpeg", "Booths, swags, and conversations")}
              className="bg-[#e8dfd4] rounded-[28px] h-44 sm:h-48 w-full overflow-hidden shadow-sm border border-pink-100 cursor-pointer group relative"
            >
              <img
                src="/ghci2.jpeg"
                alt="Booths and Swags"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <span className="text-white text-[11px] font-medium bg-black/50 px-2.5 py-0.5 rounded-full">
                  Zoom 🔍
                </span>
              </div>
            </motion.div>

            {/* Photo 3 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              onClick={() => openPhoto("/ghci3.jpeg", "Sessions, keynotes, and energy")}
              className="bg-[#e8dfd4] rounded-[28px] h-44 sm:h-44 w-full overflow-hidden shadow-sm border border-pink-100 cursor-pointer group relative"
            >
              <img
                src="/ghci3.jpeg"
                alt="Sessions and Vibes"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <span className="text-white text-[11px] font-medium bg-black/50 px-2.5 py-0.5 rounded-full">
                  Zoom 🔍
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Story Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-[40px] p-8 md:p-14 shadow-sm border border-pink-100/70 relative overflow-hidden mb-12"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-pink-100/60 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

          <div className="prose prose-lg text-gray-600 relative z-10 space-y-6 leading-relaxed">
            <p className="text-xl leading-relaxed font-medium italic text-gray-700 border-l-4 border-pink-400 pl-6 bg-pink-50/40 py-2 rounded-r-xl">
              “You’ve been selected.” — and just like that, everything shifted.
            </p>

            <p>
              What followed were three days that completely changed how I see tech, community, and my own journey — all thanks to a scholarship from TinkerHub.
            </p>

            <p>
              I walked in with curiosity and quiet dreams, and walked out with clarity, confidence, inspiration, and a circle of people who made it unforgettable.
            </p>

            <h3 className="text-xl font-bold text-gray-800 pt-2">Reframing the Horizon</h3>

            <p>
              The talk on <strong>Hybrid ML-Driven Threat Intelligence</strong> showed how ML and rule-based systems come together to secure real repositories with clean, scalable architectures.
            </p>

            <p>
              The masterclass on <strong>AI and Cybersecurity as a Double-Edged Sword</strong> felt like a wake-up call — from prompt poisoning and pixel attacks to AI vs AI and the importance of human-AI collaboration.
            </p>

            <p>
              In <strong>Behind the Scenes of Smart Shopping</strong>, I saw how GenAI, LLMs, metadata, and contrastive learning come together to build hyper-personalized systems while dealing with real-world uncertainty.
            </p>

            <p>
              One of the most grounding moments was a panel on <strong>Business Transformation with GenAI</strong> — where AI was described not as magic, but like electricity. Its power lies in how we use it, where we apply it, and why it matters.
            </p>

            <p>
              And beyond sessions, it was the small moments — fun quizzes, random conversations, walking through company booths, collecting swags, and unexpected interactions — that made everything feel alive.
            </p>

            <p>
              But the most beautiful part? Being in a space filled with women who were smart, kind, ambitious, creative, and unapologetically dreaming big.
            </p>

            <p>
              Somewhere between tech, learning, and laughter, I didn’t just explore AI, cybersecurity, and GenAI — I found direction, belief, responsibility, and possibility.
            </p>

            <p className="italic text-gray-500 font-medium">
              not just attended… i belonged 🌸
            </p>
          </div>
        </motion.div>
      </main>

      <Footer />

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightbox.isOpen}
        imageSrc={lightbox.src}
        caption={lightbox.caption}
        onClose={closePhoto}
      />
    </motion.div>
  );
}