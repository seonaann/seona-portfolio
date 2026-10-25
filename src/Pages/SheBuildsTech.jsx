import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiAward, FiExternalLink, FiUsers, FiClock, FiShield, FiArrowUpRight, FiGithub } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const teamAndMentors = [
  {
    name: "Ansa Shibu",
    role: "Teammate • Builder",
    note: "Co-built Mirror during the high-energy 20-hour sprint",
    linkedin: "https://www.linkedin.com/in/ansa-shibu/",
    badge: "Team Mirror",
    avatarColor: "from-pink-400 to-rose-400"
  },
  {
    name: "Liya Elizabeth Roji",
    role: "Teammate • Builder",
    note: "Key collaborator on feature execution and extension workflows",
    linkedin: "https://www.linkedin.com/in/liya-elizabeth-roji-65794a290/",
    badge: "Team Mirror",
    avatarColor: "from-purple-400 to-pink-400"
  },
  {
    name: "Priya Roy",
    role: "Teammate • Builder",
    note: "Collaborating on product strategy, pitching, and live delivery",
    linkedin: "https://www.linkedin.com/in/priya-roy-207209291/",
    badge: "Team Mirror",
    avatarColor: "from-rose-400 to-pink-500"
  },
  {
    name: "Aditya Manoj A",
    role: "Mentor",
    note: "Guidance throughout the 20 hours to get the extension and pitch ready",
    linkedin: "https://www.linkedin.com/in/aditya-manoj-a-dev/",
    badge: "Hackathon Mentor",
    avatarColor: "from-amber-400 to-rose-400"
  },
  {
    name: "Basil Arackal",
    role: "Evaluation Panel",
    note: "Jury member who tested our live demo and shared valuable feedback",
    linkedin: "https://www.linkedin.com/in/basilarackal/",
    badge: "Jury Panel",
    avatarColor: "from-indigo-400 to-purple-400"
  },
  {
    name: "CS Sheethal GK",
    role: "Evaluation Panel",
    note: "Jury member who evaluated Mirror's real-world impact and potential",
    linkedin: "https://www.linkedin.com/in/sheethalgk/",
    badge: "Jury Panel",
    avatarColor: "from-emerald-400 to-teal-400"
  }
];

export default function SheBuildsTech() {
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

        {/* Hero Story Intro Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[40px] p-8 md:p-14 shadow-sm border border-pink-100/70 relative overflow-hidden mb-10"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-100/50 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-3 relative z-10">
            <span className="text-xs px-3 py-1 rounded-full font-bold bg-purple-100 text-purple-800 border border-purple-200">
              SheBuildsTech 3.0
            </span>
            <span className="text-xs px-3 py-1 rounded-full font-bold bg-pink-100 text-pink-700 border border-pink-200">
              KSUM Incubation Winner
            </span>
            <a
              href="https://www.linkedin.com/company/kerala-startup-mission/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-pink-600 hover:text-pink-700 underline inline-flex items-center gap-1"
            >
              Kerala Startup Mission <FiExternalLink className="w-3 h-3" />
            </a>
          </div>

          <h1 className="text-4xl md:text-6xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 relative z-10 drop-shadow-sm tracking-tight">
            Building Mirror at SheBuildsTech 3.0
          </h1>
          <p className="text-purple-600 font-bold tracking-widest text-xs uppercase relative z-10 mb-8">
            20-Hour Hackathon • Top 10 Teams • KSUM 6-Month Incubation
          </p>

          {/* TWO MAJOR HIGHLIGHT CARDS */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8 relative z-10">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50/40 p-5 rounded-3xl border border-purple-200/80 shadow-xs flex items-start gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 shadow-xs">
                <FiAward className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-wider uppercase text-purple-700 bg-purple-100/80 px-2 py-0.5 rounded-full border border-purple-200">
                  Top 10 Finalist
                </span>
                <h3 className="font-black text-gray-800 text-lg sm:text-xl mt-1">
                  KSUM Incubation
                </h3>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Selected among the <strong>top 10 teams</strong> out of 300+ applications for Kerala Startup Mission's six-month incubation programme.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50/40 p-5 rounded-3xl border border-pink-200/80 shadow-xs flex items-start gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-700 flex items-center justify-center shrink-0 shadow-xs">
                <FiClock className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-wider uppercase text-pink-700 bg-pink-100/80 px-2 py-0.5 rounded-full border border-pink-200">
                  20-Hour Sprint
                </span>
                <h3 className="font-black text-gray-800 text-lg sm:text-xl mt-1">
                  Zero to Live Demo
                </h3>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Shipped a fully functioning Chrome extension that detects implicit biases in LLMs with real-time counterfactual prompts.
                </p>
              </div>
            </div>
          </div>

          {/* PULL QUOTE */}
          <div className="relative z-10 mb-8">
            <blockquote className="text-xl sm:text-2xl leading-relaxed font-semibold italic text-gray-700 border-l-4 border-purple-400 pl-6 bg-purple-50/40 py-4 rounded-r-2xl">
              "We had an idea. But how we were going to execute it within 20 hours? We had absolutely no clue. So, we split the work and started building Mirror."
            </blockquote>
          </div>

          {/* THE NARRATIVE PROSE */}
          <div className="prose prose-lg text-gray-600 relative z-10 space-y-6 leading-relaxed">
            <div className="border-b border-pink-100/60 pb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span>The Unexpected Selection</span>
                <span className="text-base font-normal text-purple-600">• Out of 300+ Applications</span>
              </h2>
              <p className="mb-4">
                On a random day, my friends and I came across <strong>SheBuildsTech 3.0</strong> by{" "}
                <a
                  href="https://www.linkedin.com/company/kerala-startup-mission/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-pink-600 hover:text-pink-700 underline decoration-pink-300"
                >
                  Kerala Startup Mission
                </a>
                . It was a 20-hour hackathon, and the top 10 teams would get the opportunity to be part of KSUM's six-month incubation programme.
              </p>
              <p className="mb-4">
                We applied and honestly, forgot about it. Almost a month later, one night, I received an email saying that we had been selected. Out of 300+ applications, 31 teams were shortlisted for the hackathon, and we were one of them.
              </p>
              <p className="font-semibold text-gray-800">
                And that’s how it all started.
              </p>
            </div>

            <div className="border-b border-pink-100/60 pb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span>The Problem: Why We Built Mirror</span>
                <span className="text-base font-normal text-purple-600">• AI Bias & Safety</span>
              </h2>
              <p className="mb-4">
                We use ChatGPT, Claude, and other LLMs almost every day. We give them prompts, provide context, and expect answers. But have you ever thought about whether AI is actually answering your question or making assumptions about who you are?
              </p>
              <div className="bg-purple-50/70 p-5 rounded-2xl border border-purple-100 text-gray-800 my-4">
                <span className="text-purple-700 font-bold block mb-1">The Core Challenge:</span>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Sometimes, LLM responses can carry hidden assumptions related to gender, socioeconomic background, or decision-making authority. Because they sound polite and helpful, standard toxicity filters completely miss them.
                </p>
              </div>
              <p className="mb-4">
                And that’s what we wanted to work on with <strong>Mirror</strong>. We built a Chrome extension that analyses AI prompts and responses to identify potential biases. When it detects them, it highlights the assumptions and generates a counterfactual prompt that lets us explore how the response might change from another perspective.
              </p>
              <p>
                We also considered privacy while building it, because sensitive conversations shouldn’t be handled carelessly.
              </p>
            </div>

            <div className="border-b border-pink-100/60 pb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span>The 20-Hour Sprint & Mentorship</span>
                <span className="text-base font-normal text-purple-600">• Execution under Pressure</span>
              </h2>
              <p className="mb-4">
                We had the idea, but figuring out how to execute it, getting everything to work, and preparing our pitch deck within that short time was a whole different story.
              </p>
              <p className="mb-4">
                A huge shoutout to our mentor,{" "}
                <a
                  href="https://www.linkedin.com/in/aditya-manoj-a-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-pink-600 hover:text-pink-700 underline decoration-pink-300"
                >
                  Aditya Manoj A
                </a>
                , for guiding us throughout the process. We had a lot to figure out, and his support really helped us get through it.
              </p>
              <p>
                We managed to get the extension working, prepared our pitch deck, and presented it to the panel:{" "}
                <a
                  href="https://www.linkedin.com/in/basilarackal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-pink-600 hover:text-pink-700 underline decoration-pink-300"
                >
                  Basil Arackal
                </a>{" "}
                and{" "}
                <a
                  href="https://www.linkedin.com/in/sheethalgk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-pink-600 hover:text-pink-700 underline decoration-pink-300"
                >
                  CS Sheethal GK
                </a>
                . They listened to us, asked questions, and even tried out our live demo. It was really nice to see their curiosity about what we were building.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span>The Results: Incubation Ahead</span>
                <span className="text-base font-normal text-purple-600">• Next 6 Months</span>
              </h2>
              <p className="mb-4">
                And then came the results. We were hoping to hear our names among the top 10 teams, but we honestly weren’t expecting it. And we got selected!
              </p>
              <div className="bg-emerald-50/70 p-5 rounded-2xl border border-emerald-200 text-gray-800 my-4">
                <span className="text-emerald-800 font-bold block mb-1">Official Selection:</span>
                <p className="text-sm text-emerald-900 leading-relaxed font-medium">
                  Mirror is now one of the 10 teams selected for KSUM’s six-month incubation programme!
                </p>
              </div>
              <p className="mb-4">
                I’m really excited to see where we take Mirror from here. Thank you, Kerala Startup Mission, for this opportunity. Looking forward to the next six months!
              </p>
            </div>
          </div>

          {/* ACTION BUTTONS (Demo & Repository) */}
          <div className="mt-8 pt-6 border-t border-pink-100 flex flex-wrap items-center gap-4 relative z-10">
            <a
              href="https://lnkd.in/gXxYhSaQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs sm:text-sm shadow-md transition"
            >
              <span>Watch Live Demo</span>
              <FiArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/seonaann/mirror"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-purple-200 text-purple-700 bg-purple-50/50 hover:bg-purple-100/70 font-bold text-xs sm:text-sm transition"
            >
              <FiGithub className="w-4 h-4" />
              <span>GitHub Repository</span>
              <FiExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* TEAM & MENTORS SECTION */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-pink-100/70 mb-12"
        >
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 tracking-tight">
                Team & Mentors
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-500">
              The builders, mentor, and evaluation panel behind the SheBuildsTech 3.0 journey
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3.5 mb-8">
            {teamAndMentors.map((person) => (
              <a
                key={person.name}
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl bg-purple-50/30 hover:bg-purple-100/40 border border-purple-100/70 transition-all duration-200 flex flex-col justify-between hover:-translate-y-1 hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-9 h-9 rounded-xl bg-gradient-to-tr ${person.avatarColor} text-white font-bold flex items-center justify-center text-xs shadow-xs`}
                      >
                        {person.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 text-sm group-hover:text-purple-600 transition-colors">
                          {person.name}
                        </h3>
                        <span className="text-[10px] font-semibold text-purple-600">
                          {person.badge}
                        </span>
                      </div>
                    </div>

                    <FiExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-purple-600 transition shrink-0" />
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed mt-2">
                    {person.note}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-purple-100/50 flex items-center gap-1 text-[11px] font-bold text-purple-600">
                  <span>Connect on LinkedIn</span>
                  <span>&rarr;</span>
                </div>
              </a>
            ))}
          </div>

          {/* Closing Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-purple-50 via-pink-50/40 to-amber-50/30 border border-purple-200/60 text-gray-700">
            <p className="text-sm sm:text-base leading-relaxed">
              Huge thanks to my teammates{" "}
              <a href="https://www.linkedin.com/in/ansa-shibu/" target="_blank" rel="noopener noreferrer" className="font-semibold text-purple-700 underline">Ansa Shibu</a>,{" "}
              <a href="https://www.linkedin.com/in/liya-elizabeth-roji-65794a290/" target="_blank" rel="noopener noreferrer" className="font-semibold text-purple-700 underline">Liya Elizabeth Roji</a>, and{" "}
              <a href="https://www.linkedin.com/in/priya-roy-207209291/" target="_blank" rel="noopener noreferrer" className="font-semibold text-purple-700 underline">Priya Roy</a>.
              And thank you to Kerala Startup Mission for believing in Mirror. Looking forward to the next six months!
            </p>
          </div>
        </motion.div>
      </main>

      <Footer />
    </motion.div>
  );
}
