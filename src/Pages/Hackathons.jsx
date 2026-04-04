import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// 📝 EASILY ADD YOUR HACKATHONS HERE
const hackathonsList = [
  {
    id: 3,
    name: "SAP Hackfest 2025",
    headline: "CleanScope: From Scribbles to Nationals",
    date: "April 2025",
    role: "Team Member",
    description: "Started with just an idea and a lot of excitement. Progressed through ideation, design thinking, and business modeling rounds to reach the Nationals at PSGiTECH, Coimbatore. Among 5,000+ submissions and 25,000+ students nationwide, our team advanced through Regional, Hub, and State rounds to the top teams in India. Built CleanScope, a civic technovation for smarter waste management — turning frustrations into fun and complaints into clean-ups. A journey full of learning, collaboration, and innovation.",
    icon: "🌱",
    link: "https://www.linkedin.com/posts/seona-ann-tom_tinkerhub-tinkherhack-womenintech-activity-7442218101708058624-674P?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFMDgYsBYqNUidbG36hx-3Ix-HO2B_N2-LY"
  },
  {
    id: 4,
    name: "Useless Projects 2.0",
    headline: "What The Thenga",
    date: "2025",
    role: "ML + Backend",
    description: "Built an absurd (but functional) app that predicts the chances of a coconut falling on your head 🥥.\n\nUpload a photo → verify it’s a coconut tree using an ML model → fetch location + wind speed via API → predict probability. Done in 18 hours.\n\nI worked on the ML model while my teammate handled the Flutter UI, backend. Bonus: chaotic background music on loop.",
    icon: "🥥",
    link: "https://www.linkedin.com/posts/arfanvanulal_sooooo-in-my-last-post-i-talked-about-organizing-ugcPost-7423723608491085824-9SUf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFMDgYsBYqNUidbG36hx-3Ix-HO2B_N2-LY"
  },
  {
    id: 5,
    name: "TinkHerHack",
    headline: "Organizing a Women-in-Tech Hackathon",
    date: "2025",
    role: "Organizer (TinkerHub VJCET)",
    description: "Helped organize a beginner-friendly hackathon encouraging more women to step into tech. What looked like a 2-day event was actually a month of work — sponsorships, logistics, and 3 days of pre-hack sessions (Git & GitHub, Hello World, Web Hosting). Saw first-time participants build and submit projects, with midnight cultural breaks and 3 AM debugging energy. Every team shipped. That was the win.",
    icon: "💜",
    link: "https://www.linkedin.com/posts/seona-ann-tom_saphackfest2025-sustainability-innovation-activity-7371232807244677120-TYC1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFMDgYsBYqNUidbG36hx-3Ix-HO2B_N2-LY"
  }
];

export default function Hackathons() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[#f3ede6] p-6 text-gray-800 font-sans"
    >
      <div className="max-w-5xl mx-auto py-10">

        <Link to="/" className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 font-medium mb-10 hover:-translate-x-1 transition-transform">
          <span>&larr;</span> Back to Home
        </Link>

        <div className="mb-14 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400 drop-shadow-sm w-fit mx-auto md:mx-0">
              Hackathons
            </h1>
            <p className="max-w-2xl text-base text-gray-600 mx-auto md:mx-0">
              A log of all the hackathons I've participated in, the projects we built, and the amazing people I met along the way.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {hackathonsList.map((hackathon, index) => {
            const isFeatured = index === 0;
            return (
              <motion.div
                key={hackathon.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.01 }}
                className={`bg-white p-8 md:p-10 rounded-[32px] shadow-sm relative border border-pink-100 flex flex-col group hover:shadow-xl transition-all duration-300 ${isFeatured ? 'md:col-span-2 bg-gradient-to-br from-white to-pink-50/50' : ''}`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className={`rounded-2xl flex items-center justify-center shadow-sm ${isFeatured ? 'bg-pink-100/80 text-4xl p-5' : 'bg-pink-50/80 text-3xl p-4'}`}>
                    {hackathon.icon}
                  </div>
                  {hackathon.link && (
                    <a
                      href={hackathon.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-pink-500 hover:text-white transition-all duration-300 flex items-center gap-2 text-sm font-semibold bg-pink-50 hover:bg-pink-500 px-5 py-2.5 rounded-full shadow-sm hover:shadow-md"
                    >
                      LinkedIn <span className="text-lg leading-none">↗</span>
                    </a>
                  )}
                </div>

                <div className="mt-2 flex-grow">
                  <h3 className={`font-extrabold text-gray-800 leading-tight ${isFeatured ? 'text-2xl md:text-3xl mb-1' : 'text-xl mb-1'}`}>
                    {hackathon.name}
                  </h3>
                  {hackathon.headline && (
                    <h4 className={`font-medium text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400 mb-3 ${isFeatured ? 'text-lg md:text-xl' : 'text-base'}`}>
                      {hackathon.headline}
                    </h4>
                  )}

                  <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-6 flex items-center gap-2 flex-wrap">
                    <span className="bg-gray-50 border border-gray-100 px-3 py-1 rounded-full">{hackathon.role}</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="bg-gray-50 border border-gray-100 px-3 py-1 rounded-full">{hackathon.date}</span>
                  </p>

                  <p className={`whitespace-pre-line text-gray-600 ${isFeatured ? 'text-base md:text-lg leading-relaxed' : 'text-sm md:text-base leading-relaxed'}`}>
                    {hackathon.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </motion.div>
  );
}
