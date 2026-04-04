import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiCode, FiTerminal, FiAward } from "react-icons/fi";

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// 📝 EASILY ADD YOUR PROJECTS HERE for the Home Page
const selectedProjects = [
  {
    id: 1,
    name: "Smart Energy Tracker",
    description: "Built an IoT-based energy tracker using ESP32 to monitor real-time usage, push data to Firebase, and visualize consumption patterns and costs through a dashboard.",
    techStack: ["Arduino", "ESP32", "Firebase", "React", "Tailwind CSS"],
    link: "https://github.com/seonaann",
    status: "Completed"
  }
];

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[#f3ede6] text-gray-800 font-sans overflow-x-hidden relative"
    >
      {/* Background Decorative Orbs */}
      <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-pink-200/40 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-rose-200/30 rounded-full blur-[150px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-pink-300/20 rounded-full blur-[120px] pointer-events-none z-0"></div>

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

            <motion.h1
              variants={card}
              className="text-[80px] md:text-[110px] font-extrabold leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-500 drop-shadow-sm"
            >
              SEONA
            </motion.h1>

            <motion.h2 variants={card} className="text-[35px] md:text-[50px] font-semibold -mt-1 uppercase text-gray-700">
              Ann Tom
            </motion.h2>

            <motion.p variants={card} className="mt-6 max-w-md text-lg">
              i build, i learn, i figure things out
            </motion.p>

            <motion.div variants={card} className="mt-8 flex gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transition flex items-center gap-2"
              >
                View Work
              </motion.a>

              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-pink-300 text-pink-600 rounded-full hover:bg-pink-50 transition flex items-center gap-2"
              >
                Resume 🎀
              </motion.a>
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
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative z-10"
            >
              <motion.div
                whileHover={{
                  scale: 1.15,
                  rotate: 0,
                  y: -10,
                  boxShadow: "0px 25px 50px rgba(0,0,0,0.25)"
                }}
                className="rotate-3 bg-white p-3 shadow-xl rounded-md cursor-pointer"
              >
                <div className="w-40 h-52 overflow-hidden rounded-sm">
                  <img src="/seona.jpg" alt="Seona" className="w-full h-full object-cover" />
                </div>
                <motion.p
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-xs mt-2 text-center text-pink-500 font-medium"
                >
                  hello :)
                </motion.p>
              </motion.div>
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
        <h2 className="text-3xl font-bold mb-10">
          about me
        </h2>

        <div className="grid md:grid-cols-3 gap-6 relative z-10">

          <motion.div variants={card} initial="hidden" whileInView="show" whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-pink-50 rotate-[-2deg] transition cursor-default">
            <p className="text-sm">
              <h3 className="font-semibold mb-2">about me</h3>
              CSE’27 @ VJCET <br />
              currently exploring AI & ML <br />
              and trying to understand how things actually work<br />
              <br />
              i like being around people who build things,<br />
              so i spend a lot of time in communities<br />
            </p>
          </motion.div>

          <motion.div variants={card} initial="hidden" whileInView="show" whileHover={{ y: -5, scale: 1.02 }}
            className="bg-[#f9d7e3] p-6 rounded-xl shadow-sm rotate-2 transition cursor-default">
            <h3 className="font-semibold mb-2">things I like</h3>
            <ul className="text-sm space-y-1">
              <li>AI & machine learning</li>
              <li>sustainable development</li>
              <li>building things that make sense</li>
              <li>communities that help you grow</li>
              <li>hackathons</li>
            </ul>
          </motion.div>

          <motion.div variants={card} initial="hidden" whileInView="show" whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-pink-50 rotate-1 transition cursor-default">
            <h3 className="font-semibold mb-2">skills</h3>
            <p className="text-sm">
              React • Python • Machine Learning • Frontend Development
            </p>
          </motion.div>

        </div>

        {/* MARQUEE MOVED HERE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 relative flex overflow-x-hidden whitespace-nowrap bg-white/60 backdrop-blur-md py-4 rounded-2xl border border-pink-100 shadow-sm z-10"
        >
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            className="flex gap-8 font-mono text-sm text-pink-600 px-4 items-center"
          >
            <span>React</span> ✦ <span>Python</span> ✦ <span>Machine Learning</span> ✦ <span>Tailwind</span> ✦ <span>UI/UX</span> ✦ <span>Firebase</span> ✦
            <span>React</span> ✦ <span>Python</span> ✦ <span>Machine Learning</span> ✦ <span>Tailwind</span> ✦ <span>UI/UX</span> ✦ <span>Firebase</span> ✦
          </motion.div>
        </motion.div>

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

        <div className="grid md:grid-cols-3 gap-6 relative z-10">

          <Link to="/tinkerhub" className="bg-white rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition overflow-hidden group border border-pink-50 flex flex-col">
            <div className="h-32 bg-pink-50 relative w-full overflow-hidden flex items-center justify-center">
              <FiCode className="text-6xl text-pink-400 group-hover:scale-110 transition duration-500" />
            </div>
            <div className="p-6 text-center md:text-left">
              <h3 className="font-semibold text-lg">TinkerHub</h3>
              <p className="text-sm mt-2 text-gray-600">worked on community-led learning initiatives and events</p>
            </div>
          </Link>

          <Link to="/hackathons" className="bg-white rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition overflow-hidden group border border-pink-50 flex flex-col">
            <div className="h-32 bg-pink-50 relative w-full overflow-hidden flex items-center justify-center">
              <FiTerminal className="text-6xl text-pink-400 group-hover:scale-110 transition duration-500" />
            </div>
            <div className="p-6 text-center md:text-left">
              <h3 className="font-semibold text-lg">Hackathons</h3>
              <p className="text-sm mt-2 text-gray-600">Projects and innovation events.</p>
            </div>
          </Link>

          <Link to="/ghci" className="bg-white rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition overflow-hidden group border border-pink-50 flex flex-col">
            <div className="h-32 bg-pink-50 relative w-full overflow-hidden flex items-center justify-center">
              <FiAward className="text-6xl text-pink-400 group-hover:scale-110 transition duration-500" />
            </div>
            <div className="p-6 text-center md:text-left">
              <h3 className="font-semibold text-lg">GHCI 2025</h3>
              <p className="text-sm mt-2 text-gray-600">Attended Grace Hopper Celebration India 2025.</p>
            </div>
          </Link>

        </div>
      </motion.section>

      {/* PROJECTS */}
      <motion.section id="projects" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10">selected projects</h2>

        <div className="grid md:grid-cols-2 gap-6 relative z-10">
          {selectedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-[32px] shadow-sm flex flex-col h-full border border-pink-50"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">{project.name}</h3>
                <span className={`text-xs px-3 py-1 rounded-full font-medium ${project.status === "Completed" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                  }`}>
                  {project.status}
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map(tech => (
                    <span key={tech} className="bg-pink-50 text-pink-500 px-3 py-1 text-xs rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-semibold text-gray-800 hover:text-pink-500 transition underline underline-offset-4"
                >
                  View Code &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* EXPERIENCE */}
      <motion.section id="experience" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">experience</h2>

        <div className="space-y-6 relative z-10">
          {/* TinkerHub */}
          <motion.div whileHover={{ scale: 1.01, y: -2 }} className="bg-white p-6 md:p-8 rounded-[32px] shadow-sm border border-pink-50 transition border-l-[6px] border-l-pink-400">
            <div className="flex justify-between items-start flex-col md:flex-row md:items-center mb-4 gap-2">
              <div>
                <h3 className="font-extrabold text-xl text-gray-800">Learning Coordinator</h3>
                <p className="text-pink-500 font-semibold mt-1">TinkerHub <span className="text-gray-400 font-normal ml-1 border-l pl-2 ml-2 border-pink-200">Full-time</span></p>
              </div>
              <div className="text-sm font-medium text-gray-500 bg-pink-50/50 px-3 py-1 rounded-full border border-pink-100">
                Jul 2025 - Present • 10 mos
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Organized hackathons, learning initiatives and community tech programs.
            </p>
          </motion.div>

          {/* Ecocee */}
          <motion.div whileHover={{ scale: 1.01, y: -2 }} className="bg-white p-6 md:p-8 rounded-[32px] shadow-sm border border-pink-50 transition border-l-[6px] border-l-pink-300">
            <div className="flex justify-between items-start flex-col md:flex-row md:items-center mb-4 gap-2">
              <div>
                <h3 className="font-extrabold text-xl text-gray-800">Marketing Lead</h3>
                <p className="text-pink-500 font-semibold mt-1">Ecocee <span className="text-gray-400 font-normal ml-1 border-l pl-2 ml-2 border-pink-200">Internship</span></p>
              </div>
              <div className="text-sm font-medium text-gray-500 bg-pink-50/50 px-3 py-1 rounded-full border border-pink-100">
                Sep 2025 - Oct 2025 • 2 mos
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Conducted startup research, SWOT analysis, and marketing strategy.
            </p>
          </motion.div>

          {/* Shell */}
          <motion.div whileHover={{ scale: 1.01, y: -2 }} className="bg-white p-6 md:p-8 rounded-[32px] shadow-sm border border-pink-50 transition border-l-[6px] border-l-rose-300">
            <div className="flex justify-between items-start flex-col md:flex-row md:items-center mb-4 gap-2">
              <div>
                <h3 className="font-extrabold text-xl text-gray-800">AI & Data Analytics Intern (Green Skills)</h3>
                <p className="text-pink-500 font-semibold mt-1">Shell <span className="text-gray-400 font-normal ml-1 border-l pl-2 ml-2 border-pink-200">Internship</span> <span className="text-gray-400 font-normal ml-1 border-l pl-2 ml-2 border-pink-200">Remote</span></p>
              </div>
              <div className="text-sm font-medium text-gray-500 bg-rose-50/50 px-3 py-1 rounded-full border border-rose-100">
                Jun 2025 - Jul 2025 • 2 mos
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4 font-medium">
              Worked as an AI & Data Analytics Intern under the AICTE x Shell x Edunet Foundation Skills4Future program.
            </p>
            <ul className="list-disc list-outside ml-5 text-gray-600 text-sm md:text-base space-y-2 marker:text-pink-400">
              <li>Explored AI, Data Analytics, and Green Skills through hands-on tasks and mentorship.</li>
              <li>Applied transfer learning, data augmentation, and class balancing to improve model accuracy.</li>
              <li>Deployed the solution with Gradio on Hugging Face Spaces, achieving 92.9% accuracy.</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section id="contact" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center py-20">
        <h2 className="text-3xl font-bold flex justify-center items-center gap-3">
          let's build something
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="inline-block text-pink-500"
          >
            ✿
          </motion.span>
        </h2>

        <div className="flex justify-center gap-6 mt-8">
          <motion.a href="mailto:seonaanntom9@gmail.com" whileHover={{ scale: 1.1, rotate: -3 }} whileTap={{ scale: 0.9 }} className="px-6 py-3 bg-pink-500 text-white rounded-full shadow-lg inline-block">Email</motion.a>
          <motion.a href="https://github.com/seonaann" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, rotate: 3 }} whileTap={{ scale: 0.9 }} className="px-6 py-3 border border-pink-300 text-pink-600 rounded-full hover:bg-pink-50 inline-block">GitHub</motion.a>
          <motion.a href="https://www.linkedin.com/in/seona-ann-tom/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, rotate: -3 }} whileTap={{ scale: 0.9 }} className="px-6 py-3 border border-pink-300 text-pink-600 rounded-full hover:bg-pink-50 inline-block">LinkedIn</motion.a>
        </div>

        <p className="text-xs mt-10 text-gray-500">
          designed & built by seona ann tom ✦
        </p>
      </motion.section>

    </motion.div>
  );
}