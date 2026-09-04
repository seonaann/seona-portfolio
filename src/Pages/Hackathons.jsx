import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { hackathonsList } from "../data/hackathons";

export default function Hackathons() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[#f3ede6] text-gray-800 font-sans relative overflow-x-hidden flex flex-col justify-between"
    >
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-8 flex-1">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 font-semibold mb-8 hover:-translate-x-1 transition-transform text-sm"
        >
          <FiArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Page Header */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500 drop-shadow-sm tracking-tight">
            Hackathons & Competitions
          </h1>
          <p className="max-w-2xl text-base sm:text-lg text-gray-600 font-medium">
            A log of hackathons, prototype builds, national finals, and the high-energy teams behind them.
          </p>
        </div>

        {/* Hackathon Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {hackathonsList.map((hackathon, index) => {
            const isFeatured = index === 0;
            return (
              <motion.div
                key={hackathon.id}
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`bg-white p-8 md:p-10 rounded-[36px] shadow-sm relative border border-pink-100/80 flex flex-col justify-between group hover:shadow-xl transition-all duration-300 ${
                  isFeatured ? "md:col-span-2 bg-gradient-to-br from-white via-pink-50/20 to-pink-50/40 ring-1 ring-pink-300/40" : ""
                }`}
              >
                <div>
                  {/* Top Bar: Icon + Badge + LinkedIn */}
                  <div className="flex justify-between items-start gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div
                        className={`rounded-2xl flex items-center justify-center shadow-xs ${
                          isFeatured ? "bg-pink-100 text-3xl p-4" : "bg-pink-50 text-2xl p-3"
                        }`}
                      >
                        {hackathon.icon}
                      </div>
                      {hackathon.badge && (
                        <span className="text-xs px-3 py-1 rounded-full font-bold bg-pink-100/70 text-pink-800 border border-pink-200">
                          {hackathon.badge}
                        </span>
                      )}
                    </div>

                    {hackathon.link && (
                      <a
                        href={hackathon.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-pink-600 hover:text-white transition-all duration-200 flex items-center gap-1.5 text-xs font-bold bg-pink-50 hover:bg-pink-500 px-4 py-2 rounded-full border border-pink-200/60 shadow-xs"
                      >
                        <span>LinkedIn Post</span>
                        <FiArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  {/* Titles */}
                  <div className="mb-4">
                    <h2
                      className={`font-black text-gray-800 leading-tight tracking-tight ${
                        isFeatured ? "text-2xl sm:text-3xl mb-1" : "text-xl sm:text-2xl mb-1"
                      }`}
                    >
                      {hackathon.name}
                    </h2>
                    {hackathon.headline && (
                      <h3
                        className={`font-semibold text-pink-500 ${
                          isFeatured ? "text-base sm:text-lg" : "text-sm sm:text-base"
                        }`}
                      >
                        {hackathon.headline}
                      </h3>
                    )}
                  </div>

                  {/* Role & Date Meta */}
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-6 flex items-center gap-2 flex-wrap">
                    <span className="bg-pink-50/80 border border-pink-100/70 px-3 py-1 rounded-full text-pink-700">
                      {hackathon.role}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="bg-gray-50 border border-gray-100 px-3 py-1 rounded-full">
                      {hackathon.date}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className={`whitespace-pre-line text-gray-600 ${
                      isFeatured
                        ? "text-base sm:text-lg leading-relaxed"
                        : "text-sm sm:text-base leading-relaxed"
                    }`}
                  >
                    {hackathon.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </main>

      <Footer />
    </motion.div>
  );
}
