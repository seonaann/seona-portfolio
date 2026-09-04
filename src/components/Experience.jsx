import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar } from "react-icons/fi";
import { experiences } from "../data/experiences";

export default function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto px-6 py-16"
    >
      <div className="mb-10">
        <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">
          experience
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Leadership roles, engineering internships, and organizational work
        </p>
      </div>

      <div className="relative border-l-2 border-pink-200/80 ml-4 md:ml-6 pl-6 md:pl-8 space-y-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            viewport={{ once: true }}
            whileHover={{ y: -3 }}
            className="relative bg-white p-7 sm:p-8 rounded-[32px] shadow-sm hover:shadow-lg border border-pink-100/80 transition-all duration-300"
          >
            {/* Timeline Node Dot */}
            <div className="absolute -left-[35px] md:-left-[43px] top-8 w-5 h-5 rounded-full bg-pink-500 border-4 border-[#f3ede6] shadow-sm" />

            {/* Header: Role, Company, Period */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div>
                <h3 className="font-extrabold text-xl sm:text-2xl text-gray-800">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-pink-600 font-bold text-sm sm:text-base">
                    {exp.company}
                  </span>
                  <span className="text-gray-300 text-xs">•</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-pink-50 text-pink-700 font-medium border border-pink-100">
                    {exp.type}
                  </span>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 bg-pink-50/50 px-3.5 py-1.5 rounded-full border border-pink-100 self-start sm:self-auto">
                <FiCalendar className="text-pink-400" />
                <span>{exp.period}</span>
              </div>
            </div>

            {/* Tagline */}
            {exp.tagline && (
              <p className="text-xs sm:text-sm font-semibold text-gray-500 mb-4 italic">
                {exp.tagline}
              </p>
            )}

            {/* Bullet Points */}
            <ul className="space-y-2 text-sm text-gray-600 leading-relaxed list-disc list-outside ml-4 marker:text-pink-400">
              {exp.bullets.map((bullet, bIdx) => (
                <li key={bIdx}>{bullet}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
