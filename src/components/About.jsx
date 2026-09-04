import { motion } from "framer-motion";
import { FiCheckCircle, FiHeart, FiCpu, FiStar } from "react-icons/fi";

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const skillList = [
  "Python", "React", "Machine Learning", "PyTorch", "Tailwind CSS",
  "Computer Vision", "Firebase", "ESP32 / IoT", "UI/UX Design", "Gradio"
];

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto px-6 py-16"
    >
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">
          about me
        </h2>
        <span className="text-pink-400 font-handwriting text-2xl">who i am & what drives me</span>
      </div>

      <div className="grid md:grid-cols-3 gap-6 relative z-10">

        {/* Card 1: Background */}
        <motion.div
          variants={cardVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          whileHover={{ y: -6, rotate: 0 }}
          className="bg-white p-7 rounded-3xl shadow-sm border border-pink-100 rotate-[-1.5deg] transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-2xl bg-pink-50 flex items-center justify-center text-pink-500 mb-4">
              <FiHeart className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-3">About Me</h3>
            <div className="text-sm text-gray-600 space-y-2 leading-relaxed">
              <p className="font-medium text-gray-800">CSE '27 @ VJCET</p>
              <p>Currently exploring AI & ML and trying to understand how complex systems actually tick under the hood.</p>
              <p className="text-gray-500 italic pt-1">
                "I like being around people who build things, so I spend a lot of time in community spaces."
              </p>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-pink-50 text-xs text-pink-500 font-semibold flex items-center gap-1.5">
            <FiStar className="w-3.5 h-3.5" /> Learner • Community Spirit
          </div>
        </motion.div>

        {/* Card 2: Things I Like */}
        <motion.div
          variants={cardVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          whileHover={{ y: -6, rotate: 0 }}
          className="bg-[#f9d7e3] p-7 rounded-3xl shadow-sm rotate-[1.5deg] transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-2xl bg-white/80 flex items-center justify-center text-pink-600 mb-4">
              <FiCheckCircle className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-3">Things I Like</h3>
            <ul className="text-sm text-gray-700 space-y-2.5 font-medium">
              <li className="flex items-center gap-2">
                <span className="text-pink-600 text-xs">✦</span> AI & machine learning
              </li>
              <li className="flex items-center gap-2">
                <span className="text-pink-600 text-xs">✦</span> Sustainable & civic innovation
              </li>
              <li className="flex items-center gap-2">
                <span className="text-pink-600 text-xs">✦</span> Building things that make sense
              </li>
              <li className="flex items-center gap-2">
                <span className="text-pink-600 text-xs">✦</span> High-energy hackathons
              </li>
              <li className="flex items-center gap-2">
                <span className="text-pink-600 text-xs">✦</span> Inclusive builder spaces
              </li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-pink-200/60 text-xs text-pink-700 font-semibold">
            curiosity first, always
          </div>
        </motion.div>

        {/* Card 3: Skills & Focus */}
        <motion.div
          variants={cardVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          whileHover={{ y: -6, rotate: 0 }}
          className="bg-white p-7 rounded-3xl shadow-sm border border-pink-100 rotate-[-0.5deg] transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-500 mb-4">
              <FiCpu className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-3">Core Stack</h3>
            <p className="text-xs text-gray-500 mb-4">
              Technologies I reach for when turning concepts into working prototypes:
            </p>
            <div className="flex flex-wrap gap-2">
              {["Python", "React", "PyTorch", "Machine Learning", "Tailwind CSS", "Firebase", "ESP32"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-full text-xs font-semibold bg-pink-50 text-pink-700 border border-pink-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-pink-50 text-xs text-gray-400 font-medium">
            Always expanding & experimenting
          </div>
        </motion.div>

      </div>

      {/* Infinite Skills Marquee */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 relative flex overflow-x-hidden whitespace-nowrap bg-white/70 backdrop-blur-md py-4 rounded-2xl border border-pink-100 shadow-sm z-10"
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
          className="flex gap-8 font-mono text-xs sm:text-sm text-pink-600 px-4 items-center"
        >
          {[...skillList, ...skillList, ...skillList].map((item, idx) => (
            <span key={idx} className="inline-flex items-center gap-3">
              <span className="font-semibold text-gray-800 hover:text-pink-600 transition">{item}</span>
              <span className="text-pink-300 text-xs">✦</span>
            </span>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
