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

        {/* Back Button */}
        <Link to="/" className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 font-medium mb-10 hover:-translate-x-1 transition-transform">
          <span>&larr;</span> Back to Home
        </Link>

        {/* Header Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm relative overflow-hidden"
        >
          {/* Background blurred splash */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-pink-100 rounded-full blur-3xl -mr-20 -mt-20 opacity-60"></div>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-500 relative z-10 w-fit drop-shadow-sm">
            Grace Hopper Celebration India 2025
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-gray-600 mb-10 relative z-10">
            Attended GHCI 2025, one of the largest gatherings for women in tech.
            Explored opportunities in AI, networked with industry leaders,
            and gained insights into the future of technology.
          </p>

          {/* Highlights Mini-Cards */}
          <div className="grid md:grid-cols-3 gap-6 relative z-10">

            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-[#fcf8f5] p-6 rounded-2xl border border-pink-50 shadow-sm"
            >
              <div className="text-3xl mb-4">✨</div>
              <h3 className="font-semibold text-lg mb-2">Networking</h3>
              <p className="text-sm text-gray-600">Connected with brilliant professionals and tech leaders.</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-[#f9d7e3] p-6 rounded-2xl border border-pink-100 shadow-sm rotate-1"
            >
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="font-semibold text-lg mb-2">Tech Talks</h3>
              <p className="text-sm text-gray-700">Participated in engaging workshops and sessions.</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-[#fcf8f5] p-6 rounded-2xl border border-pink-50 shadow-sm"
            >
              <div className="text-3xl mb-4">💡</div>
              <h3 className="font-semibold text-lg mb-2">Innovation</h3>
              <p className="text-sm text-gray-600">Explored the latest trends in AI and sustainable tech.</p>
            </motion.div>

          </div>
        </motion.div>

        {/* Placeholder for images */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 grid md:grid-cols-2 gap-6"
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-[#e8dfd4] h-72 rounded-[40px] flex items-center justify-center border-2 border-dashed border-pink-200 text-gray-500 hover:bg-[#e2d8cd] transition cursor-pointer"
          >
            <p className="text-sm rounded-full bg-white px-4 py-2 opacity-80 shadow-sm">📸 Add a photo here!</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-[#e8dfd4] h-72 rounded-[40px] flex items-center justify-center border-2 border-dashed border-pink-200 text-gray-500 hover:bg-[#e2d8cd] transition cursor-pointer"
          >
            <p className="text-sm rounded-full bg-white px-4 py-2 opacity-80 shadow-sm">📸 Add another photo here!</p>
          </motion.div>
        </motion.div>

      </div>
    </motion.div>
  );
}