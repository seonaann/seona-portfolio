import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// 📝 EASILY ADD YOUR HACKATHONS HERE
// Just copy an existing block and modify the details!
const hackathonsList = [
  {
    id: 1,
    name: "TinkerHub Buildathon 2024",
    date: "October 2024",
    role: "Project Manager & Developer",
    description: "Collaborated with an amazing team to build a community learning platform. We focused on gamifying the learning experience.",
    icon: "💻"
  },
  {
    id: 2,
    name: "Awesome AI Hack",
    date: "March 2025",
    role: "AI Engineer",
    description: "Built an AI-powered sustainability tracker. Won Best Innovation award for our unique carbon-footprint forecasting model!",
    icon: "🏆"
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

        {/* Back Button */}
        <Link to="/" className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 font-medium mb-10 hover:-translate-x-1 transition-transform">
          <span>&larr;</span> Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-500 drop-shadow-sm w-fit">
            Hackathons
          </h1>
          <p className="max-w-2xl text-lg text-gray-600">
            A log of all the hackathons I've participated in, the projects we built, and the amazing people I met along the way.
          </p>
        </div>

        {/* Hackathons Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {hackathonsList.map((hackathon, index) => (
            <motion.div
              key={hackathon.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="bg-white p-8 rounded-[32px] shadow-sm relative border border-pink-50"
            >
              <div className="absolute top-8 right-8 text-4xl opacity-80">
                {hackathon.icon}
              </div>

              <h3 className="text-2xl font-bold mb-1 pr-12">{hackathon.name}</h3>
              <p className="text-sm font-medium text-pink-500 mb-4">{hackathon.role} • {hackathon.date}</p>

              <p className="text-gray-600 leading-relaxed">
                {hackathon.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Add more placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
        </motion.div>

      </div>
    </motion.div>
  );
}