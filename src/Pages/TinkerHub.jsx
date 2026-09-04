import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LightboxModal from "../components/LightboxModal";

export default function TinkerHub() {
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

        {/* Story Intro Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[40px] p-8 md:p-14 shadow-sm border border-pink-100/70 relative overflow-hidden mb-10"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-pink-100/60 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

          <h1 className="text-4xl md:text-6xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500 relative z-10 drop-shadow-sm tracking-tight">
            My Journey at TinkerHub
          </h1>
          <p className="text-pink-500 font-bold tracking-widest text-xs uppercase relative z-10 mb-8">
            Learning Coordinator • Community Builder
          </p>

          <div className="prose prose-lg text-gray-600 relative z-10 space-y-6 leading-relaxed">
            <p className="text-xl leading-relaxed font-medium italic text-gray-700 border-l-4 border-pink-400 pl-6 bg-pink-50/40 py-2 rounded-r-xl">
              "TinkerHub is where I learned that building isn’t just about code, it’s about people, chaos, and showing up anyway."
            </p>

            <p>
              I didn’t join TinkerHub with a plan. It actually started when Arfan put out a call for the core team at TinkerHub VJCET, and I just thought, okay, why not? I showed up curious, a little unsure, and honestly just seeing where this would go.
            </p>

            <p>
              Somewhere between attending sessions, helping out, and staying back for random conversations that somehow always got interesting, it stopped feeling like just another tech community. It felt like a space I could exist in… without trying too hard.
            </p>

            <p>
              Becoming a Learning Coordinator wasn’t something I chased. It kind of happened in the middle of everything. One day I was just showing up, and then suddenly I was the one making sure other people showed up too. And that shift? It did something to me.
            </p>

            <p>
              A lot of what we built came from just… listening. If someone wanted to learn something, we made space for it. No big structure, no perfect plan. That’s how our study jams started, slightly chaotic, sometimes last minute, but real. Just people sitting together, figuring things out, asking questions without feeling stupid.
            </p>

            <p>
              One of my favorite moments was Survive ML. I got to organize it, but also stand there as a speaker, which felt a little unreal. Taking something like machine learning and breaking it down into something people could actually approach, one concept, one demo, one doubt at a time… that felt special.
            </p>

            <p>
              And then there were moments like Useless Projects, where I got to switch sides and just build. I collaborated with Arfan, our campus lead, and we ended up creating something completely ridiculous, an app that predicts whether a coconut might fall on your head. It made absolutely no sense. Which is exactly why it worked.
            </p>
          </div>
        </motion.div>

        {/* Interactive Gallery Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-10"
        >
          <div className="flex items-center justify-between px-2 mb-4">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              Memories & Events
              <motion.span animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>📸</motion.span>
            </h2>
            <span className="text-xs text-pink-500 font-medium hidden sm:inline">
              click any photo to view full size
            </span>
          </div>

          <p className="text-sm text-gray-500 px-2 mb-6">
            ideas → chaos → somehow an event (and people actually learned something)
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Left Column (Main photo) */}
            <div className="flex flex-col gap-4 sm:col-span-2">
              <motion.div
                whileHover={{ scale: 1.01 }}
                onClick={() => openPhoto("/tinkerhub1.jpg", "Community group photo at TinkerHub")}
                className="bg-[#e8dfd4] rounded-[32px] h-[22rem] w-full overflow-hidden shadow-sm border border-pink-100 cursor-pointer group relative"
              >
                <img
                  src="/tinkerhub1.jpg"
                  alt="Community group photo"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-xs font-semibold bg-black/50 px-3 py-1 rounded-full backdrop-blur-xs">
                    View full image 🔍
                  </span>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.01 }}
                onClick={() => openPhoto("/tinkerhub5.jpeg", "Hackathon team & builders")}
                className="bg-[#e8dfd4] rounded-[32px] h-60 w-full overflow-hidden shadow-sm border border-pink-100 cursor-pointer group relative"
              >
                <img
                  src="/tinkerhub5.jpeg"
                  alt="Hackathon team"
                  className="w-full h-full object-cover object-[center_30%] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-xs font-semibold bg-black/50 px-3 py-1 rounded-full backdrop-blur-xs">
                    View full image 🔍
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Right Column (3 Photos) */}
            <div className="flex flex-col gap-4 sm:col-span-1">
              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={() => openPhoto("/tinkerhub2.jpeg", "Hands-on working session")}
                className="bg-[#e8dfd4] rounded-[28px] h-44 w-full overflow-hidden shadow-sm border border-pink-100 cursor-pointer group relative"
              >
                <img
                  src="/tinkerhub2.jpeg"
                  alt="Working session"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <span className="text-white text-[11px] font-medium bg-black/50 px-2.5 py-0.5 rounded-full">
                    Zoom 🔍
                  </span>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={() => openPhoto("/tinkerhub3.jpeg", "Study jam & peer debugging")}
                className="bg-[#e8dfd4] rounded-[28px] h-44 w-full overflow-hidden shadow-sm border border-pink-100 cursor-pointer group relative"
              >
                <img
                  src="/tinkerhub3.jpeg"
                  alt="Team working"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <span className="text-white text-[11px] font-medium bg-black/50 px-2.5 py-0.5 rounded-full">
                    Zoom 🔍
                  </span>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={() => openPhoto("/tinkerhub4.jpeg", "Survive ML Speaking session")}
                className="bg-[#e8dfd4] rounded-[28px] h-44 w-full overflow-hidden shadow-sm border border-pink-100 cursor-pointer group relative"
              >
                <img
                  src="/tinkerhub4.jpeg"
                  alt="Speaking session"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <span className="text-white text-[11px] font-medium bg-black/50 px-2.5 py-0.5 rounded-full">
                    Zoom 🔍
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Reflection Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-[40px] p-8 md:p-14 shadow-sm border border-pink-100/70 mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800">How It Shaped Me</h2>
          <div className="prose prose-lg text-gray-600 space-y-6 leading-relaxed">
            <p>
              TinkerHub didn’t just teach me how to organize events, it kind of rewired how I look at things. Learning, people, even myself. Somewhere along the way, I stopped worrying about doing things the right way and just started doing them.
            </p>

            <p>
              Through things like Women in Tech meetups, we created spaces that didn’t feel intimidating or formal or overwhelming. You could just walk in, sit down, and exist. Ask questions, say “I don’t know anything about this,” and still feel like you belonged.
            </p>

            <p>
              TinkHerHack was one of those experiences that felt bigger the more you lived through it. On paper, it was a 2 day hackathon. But for us, it was weeks of figuring things out, pre hack sessions, helping beginners take their first steps.
            </p>

            <p>
              And then during the hackathon, it was chaos. The good kind. People debugging at 2 AM, trying tools they had never touched before, and still showing up, still building.
            </p>

            <p>
              Somewhere in all that chaos, I realized… this is what I like. Not just polished outcomes, but messy beginnings.
            </p>

            <p>
              I think that’s what TinkerHub really gave me, a mindset. To not overthink starting. To build even when I’m unsure. To create spaces where other people feel like they can do the same.
            </p>

            <p>
              And more than anything, it gave me people. The kind who stay back after sessions, debug things at midnight, turn small ideas into something real, and somehow make all the chaos feel worth it.
            </p>

            <p className="italic text-gray-500 font-medium">
              still building, still figuring things out… and honestly, I don’t think I’d want it any other way 😌
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
