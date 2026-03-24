import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[#f3ede6] text-gray-800 font-sans overflow-x-hidden"
    >

      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-center p-6 max-w-6xl mx-auto"
      >
        <h1 className="text-xl font-semibold tracking-wide">Seona</h1>

        <div className="space-x-6 text-sm">
          <a href="#about" className="hover:text-pink-500">About</a>
          <a href="#work" className="hover:text-pink-500">Things I've Done</a>
          <a href="#projects" className="hover:text-pink-500">Projects</a>
          <a href="#experience" className="hover:text-pink-500">Experience</a>
          <a href="#contact" className="hover:text-pink-500">Contact</a>
        </div>
      </motion.nav>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-[#e8dfd4] rounded-[40px] p-10 grid md:grid-cols-2 items-center gap-10 relative overflow-hidden">

          {/* LEFT */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15 } }
            }}
          >
            <motion.p variants={card} className="text-sm italic mb-2">
              hi, see you here :)
            </motion.p>

            <motion.h1 variants={card} className="text-[80px] md:text-[110px] font-extrabold leading-[0.85] text-pink-500">
              SEONA
            </motion.h1>

            <motion.h2 variants={card} className="text-[35px] md:text-[50px] font-semibold -mt-6">
              Ann Tom
            </motion.h2>

            <motion.p variants={card} className="mt-6 max-w-md text-lg">
              Between code, community, and curiosity
            </motion.p>

            <motion.div variants={card} className="mt-8 flex gap-4">
              <a href="#projects" className="px-6 py-3 bg-pink-500 text-white rounded-full shadow hover:scale-105 transition">
                View Work
              </a>

              <a href="#" className="px-6 py-3 border rounded-full hover:bg-gray-100 transition">
                Resume
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT (Polaroid) */}
          <div className="flex justify-center relative">

            <motion.img
              src="/girl.png"
              alt="bg"
              className="absolute -top-10 w-72 opacity-40"
              whileHover={{ scale: 0.95, opacity: 0.25 }}
              transition={{ duration: 0.4 }}
            />

            <motion.div
              whileHover={{
                scale: 1.15,
                rotate: 0,
                y: -10,
                boxShadow: "0px 25px 50px rgba(0,0,0,0.25)"
              }}
              className="rotate-3 bg-white p-3 shadow-xl rounded-md relative z-10"
            >
              <div className="w-40 h-52 overflow-hidden rounded-sm">
                <img src="/seona.jpg" alt="Seona" className="w-full h-full object-cover" />
              </div>
              <p className="text-xs mt-2 text-center">hello :)</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <motion.section
        id="About"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-16"
      >
        <h2 className="text-3xl font-bold mb-10">about me</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <motion.div variants={card} initial="hidden" whileInView="show"
            className="bg-white p-6 rounded-xl shadow rotate-[-2deg] hover:rotate-0 transition">
            <p className="text-sm">
               CSE’27 @ VJCET <br />
               exploring AI/ML <br />
               building with TinkerHub
            </p>
          </motion.div>

          <motion.div variants={card} initial="hidden" whileInView="show"
            className="bg-[#f9d7e3] p-6 rounded-xl shadow rotate-2 hover:rotate-0 transition">
            <h3 className="font-semibold mb-2">things I like</h3>
            <ul className="text-sm space-y-1">
              <li>AI & machine learning</li>
              <li>sustainable development</li>
              <li>design + technology</li>
              <li>community building</li>
              <li>hackathons</li>
            </ul>
          </motion.div>

          <motion.div variants={card} initial="hidden" whileInView="show"
            className="bg-white p-6 rounded-xl shadow rotate-1 hover:rotate-0 transition">
            <h3 className="font-semibold mb-2">skills</h3>
            <p className="text-sm">
              React • Python • Machine Learning • Frontend Development
            </p>
          </motion.div>

        </div>
      </motion.section>

      {/* WORK */}
      <motion.section
        id="work"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-16"
      >
        <h2 className="text-3xl font-bold mb-10">things i've done</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <Link to="/tinkerhub" className="bg-white p-6 rounded-xl shadow hover:scale-105 hover:-translate-y-2 transition">
            <h3 className="font-semibold">TinkerHub</h3>
            <p className="text-sm mt-2">Community leadership and learning initiatives.</p>
          </Link>

          <Link to="/hackathons" className="bg-white p-6 rounded-xl shadow hover:scale-105 hover:-translate-y-2 transition">
            <h3 className="font-semibold">Hackathons</h3>
            <p className="text-sm mt-2">Projects and innovation events.</p>
          </Link>

          <Link to="/ghci" className="bg-[#fce7f3] p-6 rounded-xl shadow hover:scale-105 hover:-translate-y-2 transition">
            <h3 className="font-semibold">GHCI 2025</h3>
            <p className="text-sm mt-2">Attended Grace Hopper Celebration India 2025.</p>
          </Link>

        </div>
      </motion.section>

      {/* PROJECTS */}
      <motion.section id="projects" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10">selected projects</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow col-span-2">
            <h3 className="text-xl font-semibold">Smart Energy Tracker</h3>
            <p className="text-sm mt-2">
              Real-time electricity monitoring dashboard with carbon impact visualisation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold">future project</h3>
            <p className="text-sm mt-2">coming soon...</p>
          </div>
        </div>
      </motion.section>

      {/* EXPERIENCE */}
      <motion.section id="experience" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">experience</h2>

        <div className="space-y-6">

          <div className="bg-[#f9d7e3] p-6 rounded-xl shadow rotate-1">
            <h3 className="font-semibold">TinkerHub — Learning Coordinator</h3>
            <p className="text-sm mt-2">
              Organized hackathons, learning initiatives and community tech programs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow rotate-[-1deg]">
            <h3 className="font-semibold">Ecocee — Marketing Intern</h3>
            <p className="text-sm mt-2">
              Conducted startup research, SWOT analysis and marketing strategy.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow rotate-1">
            <h3 className="font-semibold">
              AI & Data Analytics Intern – AICTE, Shell India & Edunet (Virtual, Jun–Jul 2025)
            </h3>
            <p className="text-sm mt-2">
              4-week internship on AI/analytics applied to sustainable solutions
            </p>
          </div>

        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section id="contact" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center py-20">
        <h2 className="text-3xl font-bold">let's build something ✿</h2>

        <div className="flex justify-center gap-6 mt-6">
          <button className="px-6 py-3 bg-pink-500 text-white rounded-full shadow">Email</button>
          <button className="px-6 py-3 border rounded-full">GitHub</button>
          <button className="px-6 py-3 border rounded-full">LinkedIn</button>
        </div>

        <p className="text-xs mt-10 text-gray-500">
          designed & built by seona ann tom ✦
        </p>
      </motion.section>

    </motion.div>
  );
}