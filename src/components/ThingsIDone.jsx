import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiCode, FiTerminal, FiAward, FiArrowRight } from "react-icons/fi";

const storyCards = [
  {
    title: "TinkerHub",
    subtitle: "Community-Led Learning & Leadership",
    desc: "From showing up to organizing study jams, Survive ML, and TinkHerHack. Cultivating spaces where curiosity thrives.",
    path: "/tinkerhub",
    icon: FiCode,
    badge: "Community",
    color: "from-pink-500/10 to-rose-500/5",
    accent: "text-pink-500"
  },
  {
    title: "Hackathons",
    subtitle: "Pressure, Chaos & Breakthroughs",
    desc: "CleanScope at SAP Hackfest Nationals, What The Thenga in 18 hours, and organizing women-in-tech hackathons.",
    path: "/hackathons",
    icon: FiTerminal,
    badge: "Competition",
    color: "from-amber-500/10 to-pink-500/5",
    accent: "text-rose-500"
  },
  {
    title: "GHCI 2025",
    subtitle: "Grace Hopper Celebration India",
    desc: "3 days that shifted everything. Diving deep into hybrid ML threat intelligence, GenAI transformation, and inspiration.",
    path: "/ghci",
    icon: FiAward,
    badge: "Scholarship",
    color: "from-purple-500/10 to-pink-500/5",
    accent: "text-pink-600"
  }
];

export default function ThingsIDone() {
  return (
    <motion.section
      id="stories"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto px-6 py-16"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-2">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">
            things i've done
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Deep-dive stories from community building, competitions, and conferences
          </p>
        </div>
        <span className="text-pink-400 font-handwriting text-xl hidden sm:inline">
          click any card to read the journey →
        </span>
      </div>

      <div className="grid md:grid-cols-3 gap-6 relative z-10">
        {storyCards.map((story) => {
          const Icon = story.icon;
          return (
            <Link
              key={story.title}
              to={story.path}
              className="bg-white rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group border border-pink-100/70 flex flex-col justify-between"
            >
              <div>
                {/* Header Visual with soft gradient */}
                <div className={`h-36 bg-gradient-to-br ${story.color} relative w-full flex items-center justify-center border-b border-pink-50 overflow-hidden`}>
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`text-3xl ${story.accent}`} />
                  </div>
                  <span className="absolute top-4 right-4 text-[10px] font-bold tracking-widest uppercase bg-white/90 px-2.5 py-1 rounded-full border border-pink-100 text-gray-600">
                    {story.badge}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-800 group-hover:text-pink-600 transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-xs font-semibold text-pink-500 mt-0.5 mb-3">
                    {story.subtitle}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {story.desc}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs font-bold text-pink-600 group-hover:text-pink-700">
                <span>Read Story</span>
                <FiArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </motion.section>
  );
}
