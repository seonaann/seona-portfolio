import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function GHCI() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[#f3ede6] p-6 text-gray-800 font-sans"
    >
      <div className="max-w-4xl mx-auto py-10">

        <Link to="/" className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 font-medium mb-8 hover:-translate-x-1 transition-transform">
          <span>&larr;</span> Back to Home
        </Link>

        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold mb-12 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400 drop-shadow-sm leading-tight"
        >
          Stepping Into GHC India 2025
        </motion.h1>

        {/* Gallery Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-12 mt-10"
        >
          <h2 className="text-3xl font-extrabold mb-4 text-gray-800 px-2 flex items-center gap-2 drop-shadow-sm">
            Moments from GHCI
            <motion.span animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>📸</motion.span>
          </h2>

          <p className="text-base text-gray-500 px-2 mb-6 font-medium italic">
            chaos, conversations, learning, and a little bit of magic
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

            <motion.img 
              src="/ghci1.jpg" 
              alt="GHCI Highlight" 
              whileHover={{ scale: 1.02 }} 
              className="col-span-2 row-span-2 bg-[#e8dfd4] rounded-[32px] h-80 w-full object-cover shadow-sm border border-pink-100 cursor-pointer"
            />

            <motion.img 
              src="/ghci2.jpeg" 
              alt="Booths and Swags" 
              whileHover={{ scale: 1.02 }} 
              className="bg-[#e8dfd4] rounded-[32px] h-40 w-full object-cover shadow-sm border border-pink-100 cursor-pointer"
            />

            <motion.img 
              src="/ghci3.jpeg" 
              alt="Sessions and Vibes" 
              whileHover={{ scale: 1.02 }} 
              className="bg-[#e8dfd4] rounded-[32px] h-36 mt-4 w-full object-cover shadow-sm border border-pink-100 cursor-pointer"
            />

          </div>
        </motion.div>

        {/* Main Story Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-[40px] p-8 md:p-14 shadow-sm relative overflow-hidden mb-10"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-pink-100 rounded-full blur-3xl -mr-20 -mt-20 opacity-50"></div>

          <div className="prose prose-lg text-gray-600 relative z-10 space-y-6">

            <p className="text-xl leading-relaxed font-medium italic text-gray-500 border-l-4 border-pink-300 pl-6">
              “You’ve been selected.” — and just like that, everything shifted.
            </p>

            <p>
              What followed were three days that completely changed how I see tech, community, and my own journey — all thanks to a scholarship from TinkerHub.
            </p>

            <p>
              I walked in with curiosity and quiet dreams, and walked out with clarity, confidence, inspiration, and a circle of people who made it unforgettable.
            </p>

            <p>
              Some sessions genuinely reframed my thinking.
            </p>

            <p>
              The talk on Hybrid ML-Driven Threat Intelligence showed how ML and rule-based systems come together to secure real repositories with clean, scalable architectures.
            </p>

            <p>
              The masterclass on AI and Cybersecurity as a Double-Edged Sword felt like a wake-up call — from prompt poisoning and pixel attacks to AI vs AI and the importance of human-AI collaboration.
            </p>

            <p>
              In Behind the Scenes of Smart Shopping, I saw how GenAI, LLMs, metadata, and contrastive learning come together to build hyper-personalized systems while dealing with uncertainty.
            </p>

            <p>
              One of the most grounding moments was a panel on Business Transformation with GenAI — where AI was described not as magic, but like electricity. Its power lies in how we use it, where we apply it, and why it matters.
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

            <p className="italic text-gray-500">
              not just attended… i belonged 🌸
            </p>

          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}