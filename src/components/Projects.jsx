import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiFolder } from "react-icons/fi";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto px-6 py-16"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-2">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">
            selected projects
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Featured work spanning IoT systems, applied machine learning, and civic tech
          </p>
        </div>
        <a
          href="https://github.com/seonaann"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-pink-600 hover:text-pink-700 underline underline-offset-4"
        >
          <FiGithub className="w-3.5 h-3.5" /> View all on GitHub &rarr;
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-7 relative z-10">
        {projects.map((project, index) => {
          const isFeatured = index === 0;
          return (
            <motion.div
              key={project.id}
              initial={{ y: 25, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className={`bg-white p-7 sm:p-8 rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-pink-100/70 relative ${
                isFeatured ? "ring-2 ring-pink-300/40 bg-gradient-to-br from-white to-pink-50/30" : ""
              }`}
            >
              <div>
                {/* Card Header: Icon, Name & Status Badge */}
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-pink-50 flex items-center justify-center text-pink-500">
                      <FiFolder className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 tracking-tight">
                        {project.name}
                      </h3>
                      {project.tagline && (
                        <p className="text-xs font-semibold text-pink-500">
                          {project.tagline}
                        </p>
                      )}
                    </div>
                  </div>

                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium border shrink-0 ${project.badgeColor}`}
                  >
                    {project.badge}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Card Footer: Tech Stack & Action Links */}
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-pink-50/80 text-pink-600 px-2.5 py-1 text-xs rounded-full font-medium border border-pink-100/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-pink-50 flex items-center justify-between">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-700 hover:text-pink-600 transition"
                  >
                    <span>View Project & Insights</span>
                    <FiArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
