import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function TinkerHub() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[#f3ede6] p-6 text-gray-800 font-sans"
    >
      <div className="max-w-4xl mx-auto py-10">
        
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 font-medium mb-10 hover:-translate-x-1 transition-transform">
          <span>&larr;</span> Back to Home
        </Link>
        
        {/* Hero Section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[40px] p-8 md:p-14 shadow-sm relative overflow-hidden mb-10"
        >
          {/* Blurred decorative element */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-pink-100 rounded-full blur-3xl -mr-20 -mt-20 opacity-50"></div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-500 relative z-10 drop-shadow-sm">
            My Journey at TinkerHub
          </h1>
          <p className="text-pink-500 font-semibold tracking-wide text-sm uppercase relative z-10 mb-8">
            Learning Coordinator • Community Builder
          </p>

          <div className="prose prose-lg text-gray-600 relative z-10 space-y-6">
            <p className="text-xl leading-relaxed font-medium italic text-gray-500 border-l-4 border-pink-300 pl-6">
              "TinkerHub is where I truly learned what it meant to build, lead, and grow alongside an amazing community."
            </p>
            
            <p>
              [Write your heart out here! Start by talking about how you first joined the community. What was your initial mindset? How did you step into the role of a Learning Coordinator?]
            </p>
            
            <p>
              [Talk about the events you conducted! Whether it was hackathons, study jams, or mentoring sessions, describe the chaotic, late-night planning and the incredible joy of seeing people learn from what you organized.]
            </p>
          </div>
        </motion.div>

        {/* Gallery Section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800 px-2 flex items-center gap-2">
            Memories & Events
            <motion.span animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>📸</motion.span>
          </h2>
          
          {/* Bento-style image grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            
            {/* Big feature photo */}
            <motion.div whileHover={{ scale: 1.02 }} className="col-span-2 row-span-2 bg-[#e8dfd4] rounded-[32px] h-80 flex items-center justify-center border-2 border-dashed border-pink-200 text-gray-500 hover:bg-[#e2d8cd] transition cursor-pointer overflow-hidden relative">
              <p className="text-sm rounded-full bg-white px-4 py-2 opacity-80 shadow-sm z-10">📸 Add a wide community photo here!</p>
            </motion.div>

            {/* Smaller photos */}
            <motion.div whileHover={{ scale: 1.02 }} className="bg-[#e8dfd4] rounded-[32px] h-40 flex items-center justify-center border-2 border-dashed border-pink-200 text-gray-500 hover:bg-[#e2d8cd] transition cursor-pointer relative">
              <p className="text-xs rounded-full bg-white px-3 py-1 opacity-80 shadow-sm z-10 text-center mx-2">📸 Behind the scenes</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="bg-[#e8dfd4] rounded-[32px] h-36 mt-4 flex items-center justify-center border-2 border-dashed border-pink-200 text-gray-500 hover:bg-[#e2d8cd] transition cursor-pointer relative">
              <p className="text-xs rounded-full bg-white px-3 py-1 opacity-80 shadow-sm z-10 mx-2 text-center">📸 Speaker session</p>
            </motion.div>

          </div>
        </motion.div>

        {/* Closing Thoughts */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-[40px] p-8 md:p-14 shadow-sm"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800">How It Shaped Me 🌱</h2>
          <div className="prose prose-lg text-gray-600 space-y-6">
            <p>
              [Write about how interacting with the TinkerHub community shaped your perspective. How did leadership challenge you? What skills did you acquire beyond just coding?]
            </p>
            <p>
              [Conclude with a sweet note about your friends, the late-night debugging, and the energy of hackathons!]
            </p>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}