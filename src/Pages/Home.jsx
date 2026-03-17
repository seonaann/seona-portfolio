import { motion } from "framer-motion";

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f3ede6] text-gray-800 font-sans overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <h1 className="text-xl font-semibold tracking-wide">Seona</h1>

        <div className="space-x-6 text-sm">
          <a href="#about">About</a>
          <a href="#work">Things I've Done</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-[#e8dfd4] rounded-[40px] p-10 relative overflow-hidden">

          {/* GIRL ILLUSTRATION */}
          <img
            src="/girl.png"
            alt="illustration"
            className="absolute right-20 top-0 w-80 opacity-50 pointer-events-none"
          />

          <p className="text-sm italic mb-2">hi, see you here :)</p>

          <h1 className="text-[90px] md:text-[130px] font-extrabold leading-[0.85] text-pink-500 opacity-90">
            SEONA
          </h1>

          <h2 className="text-[40px] md:text-[60px] font-semibold -mt-6">
            Ann Tom
          </h2>

          <p className="mt-6 max-w-md text-lg">
            Building technology for impact, community and sustainable
            development.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-pink-500 text-white rounded-full shadow">
              View Work
            </button>

            <button className="px-6 py-3 border rounded-full">
              Resume
            </button>
          </div>

          {/* POLAROID PHOTO */}
          <motion.div
            whileHover={{ rotate: 0, scale: 1.05 }}
            className="absolute right-12 bottom-4 rotate-3 bg-white p-3 shadow-2xl rounded-md"
          >

            <div className="w-32 h-44 overflow-hidden rounded-sm">
              <img
                src="/seona.jpg"
                alt="Seona"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-xs mt-2 text-center">hello :)</p>

          </motion.div>

        </div>
      </section>



      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold mb-10">about me</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <motion.div
            variants={card}
            initial="hidden"
            whileInView="show"
            className="bg-white p-6 rounded-xl shadow rotate-[-2deg] hover:rotate-0 transition"
          >
            <p className="text-sm leading-relaxed">
              Third-year Computer Science student passionate about
              technology, community building and sustainable development.
            </p>
          </motion.div>


          <motion.div
            variants={card}
            initial="hidden"
            whileInView="show"
            className="bg-[#f9d7e3] p-6 rounded-xl shadow rotate-2 hover:rotate-0 transition"
          >
            <h3 className="font-semibold mb-2">things I like</h3>

            <ul className="text-sm space-y-1">
              <li>AI & machine learning</li>
              <li>sustainable development</li>
              <li>design + technology</li>
              <li>community building</li>
              <li>hackathons</li>
            </ul>
          </motion.div>


          <motion.div
            variants={card}
            initial="hidden"
            whileInView="show"
            className="bg-white p-6 rounded-xl shadow rotate-1 hover:rotate-0 transition"
          >
            <h3 className="font-semibold mb-2">skills</h3>

            <p className="text-sm">
              React • Python • Machine Learning • Frontend Development
            </p>
          </motion.div>

        </div>

      </section>



      {/* THINGS I'VE DONE */}
      <section id="work" className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold mb-10">things i've done</h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-xl shadow rotate-[-1deg]">
            <h3 className="font-semibold">TinkerHub</h3>
            <p className="text-sm mt-2">
              Community leadership and learning initiatives.
            </p>
          </div>

          <div className="bg-[#e9d5ff] p-6 rounded-xl shadow rotate-2">
            <h3 className="font-semibold">Ecocee</h3>
            <p className="text-sm mt-2">
              Startup marketing internship.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow rotate-1">
            <h3 className="font-semibold">Hackathons</h3>
            <p className="text-sm mt-2">
              Projects and innovation events.
            </p>
          </div>

          <div className="bg-[#fce7f3] p-6 rounded-xl shadow rotate-[-2deg]">
            <h3 className="font-semibold">GHCI 2025</h3>
            <p className="text-sm mt-2">
              Attended Grace Hopper Celebration India 2025.
            </p>
          </div>

        </div>

      </section>



      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold mb-10">selected projects</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow col-span-2 rotate-[-1deg]">
            <h3 className="text-xl font-semibold">Smart Energy Tracker</h3>

            <p className="text-sm mt-2">
              Real-time electricity monitoring dashboard with carbon impact
              visualisation.
            </p>

            <p className="text-xs mt-3 text-gray-500">
              React • Firebase • IoT
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow rotate-1">
            <h3 className="text-lg font-semibold">future project</h3>
            <p className="text-sm mt-2">coming soon...</p>
          </div>

        </div>

      </section>



      {/* EXPERIENCE */}
      <section id="experience" className="max-w-5xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold mb-8">experience</h2>

        <div className="space-y-6">

          <div className="bg-[#f9d7e3] p-6 rounded-xl shadow rotate-1">
            <h3 className="font-semibold">
              TinkerHub — Learning Coordinator
            </h3>

            <p className="text-sm mt-2">
              Organized hackathons, learning initiatives and community tech
              programs.
            </p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow rotate-[-1deg]">
            <h3 className="font-semibold">
              Ecocee — Marketing Intern
            </h3>

            <p className="text-sm mt-2">
              Conducted startup research, SWOT analysis and marketing
              strategy.
            </p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow rotate-1">
            <h3 className="font-semibold">NetShell</h3>

            <p className="text-sm mt-2">
              Worked on networking and technical learning initiatives.
            </p>
          </div>

        </div>

      </section>



      {/* CONTACT */}
      <section id="contact" className="text-center py-20">

        <h2 className="text-3xl font-bold">
          let's build something ✿
        </h2>

        <div className="flex justify-center gap-6 mt-6">

          <button className="px-6 py-3 bg-pink-500 text-white rounded-full shadow">
            Email
          </button>

          <button className="px-6 py-3 border rounded-full">
            GitHub
          </button>

          <button className="px-6 py-3 border rounded-full">
            LinkedIn
          </button>

        </div>

        <p className="text-xs mt-10 text-gray-500">
          designed & built by seona ann tom ✦
        </p>

      </section>

    </div>
  );
}