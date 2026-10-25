import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiFolder, FiX, FiCheck, FiCpu, FiLayers, FiShield, FiExternalLink, FiSliders } from "react-icons/fi";
import { projects } from "../data/projects";

export default function Projects() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [activeTab, setActiveTab] = useState("demo"); // "demo" | "pipeline" | "specs"

  const openCaseStudy = (project) => {
    setSelectedCaseStudy(project);
    setActiveTab("demo");
  };

  const closeCaseStudy = () => {
    setSelectedCaseStudy(null);
  };

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
            Flagship AI safety & bias detection, IoT systems, applied ML, and civic technovation
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
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className={`bg-white p-7 sm:p-8 rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border relative ${
                isFeatured
                  ? "border-purple-200/80 ring-2 ring-purple-300/40 bg-gradient-to-br from-white via-purple-50/20 to-pink-50/25 md:col-span-2"
                  : "border-pink-100/70"
              }`}
            >
              <div>
                {/* Card Header: Icon, Name & Status Badge */}
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`rounded-2xl flex items-center justify-center ${
                        isFeatured
                          ? "w-12 h-12 bg-purple-100 text-purple-600 text-xl font-bold"
                          : "w-10 h-10 bg-pink-50 text-pink-500"
                      }`}
                    >
                      {isFeatured ? <FiShield className="w-6 h-6 text-purple-600" /> : <FiFolder className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3
                        className={`font-bold text-gray-800 tracking-tight ${
                          isFeatured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
                        }`}
                      >
                        {project.name}
                      </h3>
                      {project.tagline && (
                        <p
                          className={`text-xs font-semibold ${
                            isFeatured ? "text-purple-600" : "text-pink-500"
                          }`}
                        >
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
                <p
                  className={`text-gray-600 leading-relaxed mb-6 ${
                    isFeatured ? "text-base sm:text-lg" : "text-sm"
                  }`}
                >
                  {project.description}
                </p>

                {/* Highlight Callout for MIRROR */}
                {isFeatured && project.caseStudy && (
                  <div className="mb-6 p-4 rounded-2xl bg-purple-50/70 border border-purple-100 text-xs sm:text-sm text-purple-900/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-purple-600 font-bold">Pipeline:</span>
                      <span className="text-gray-700">DeBERTa Classifier &bull; Inline Text Cues &bull; Gemini Counterfactuals &bull; Drift Scoring</span>
                    </div>
                    <button
                      onClick={() => openCaseStudy(project)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-600 text-white font-bold text-xs hover:bg-purple-700 transition shadow-sm shrink-0 cursor-pointer"
                    >
                      <span>Interactive Demo & Flow</span>
                      <FiSliders className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>

              {/* Card Footer: Tech Stack & Action Links */}
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2.5 py-1 text-xs rounded-full font-medium border ${
                        isFeatured
                          ? "bg-purple-50/80 text-purple-700 border-purple-100"
                          : "bg-pink-50/80 text-pink-600 border-pink-100/60"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-pink-50 flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-700 hover:text-pink-600 transition"
                    >
                      <FiGithub className="w-3.5 h-3.5 text-gray-500" />
                      <span>{isFeatured ? "GitHub Repository" : "View Project & Insights"}</span>
                      <FiArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {project.hasCaseStudy && (
                    <button
                      onClick={() => openCaseStudy(project)}
                      className="text-xs font-bold text-purple-600 hover:text-purple-800 underline underline-offset-4 cursor-pointer"
                    >
                      Inspect Case Study & Demo
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Interactive Case Study & Flow Modal for MIRROR */}
      <AnimatePresence>
        {selectedCaseStudy && selectedCaseStudy.caseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeCaseStudy}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-[36px] shadow-2xl border border-purple-200/80 max-w-3xl w-full max-h-[90vh] overflow-y-auto z-10 relative flex flex-col p-6 sm:p-8 text-gray-800"
            >
              {/* Close Button */}
              <button
                onClick={closeCaseStudy}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition cursor-pointer"
                aria-label="Close modal"
              >
                <FiX className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="pr-10 mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-100 text-purple-800 border border-purple-200">
                    Flagship AI Safety Project
                  </span>
                  <span className="text-xs text-gray-500 font-medium">
                    Web Dashboard + Chrome MV3 Extension
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-gray-800 tracking-tight">
                  MIRROR
                </h3>
                <p className="text-xs sm:text-sm text-purple-600 font-semibold mt-0.5">
                  Detect · Reveal · Challenge · Measure
                </p>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {selectedCaseStudy.caseStudy.problem}
                </p>
              </div>

              {/* Tab Navigation */}
              <div className="flex border-b border-gray-100 mb-6 gap-2 sm:gap-4 overflow-x-auto text-xs sm:text-sm">
                <button
                  onClick={() => setActiveTab("demo")}
                  className={`pb-2.5 font-bold px-2 border-b-2 transition cursor-pointer shrink-0 ${
                    activeTab === "demo"
                      ? "border-purple-600 text-purple-700"
                      : "border-transparent text-gray-500 hover:text-gray-800"
                  }`}
                >
                  Interactive Bias Detection Demo
                </button>
                <button
                  onClick={() => setActiveTab("pipeline")}
                  className={`pb-2.5 font-bold px-2 border-b-2 transition cursor-pointer shrink-0 ${
                    activeTab === "pipeline"
                      ? "border-purple-600 text-purple-700"
                      : "border-transparent text-gray-500 hover:text-gray-800"
                  }`}
                >
                  4-Stage Architecture
                </button>
                <button
                  onClick={() => setActiveTab("specs")}
                  className={`pb-2.5 font-bold px-2 border-b-2 transition cursor-pointer shrink-0 ${
                    activeTab === "specs"
                      ? "border-purple-600 text-purple-700"
                      : "border-transparent text-gray-500 hover:text-gray-800"
                  }`}
                >
                  Benchmark & Extension
                </button>
              </div>

              {/* Tab Content 1: Live Interactive Demo */}
              {activeTab === "demo" && (
                <div className="space-y-6">
                  {/* Step 1: Input Prompt */}
                  <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200/80">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block mb-1">
                      User Prompt
                    </span>
                    <p className="text-sm sm:text-base font-medium text-gray-800">
                      "{selectedCaseStudy.caseStudy.example.prompt}"
                    </p>
                  </div>

                  {/* Step 2: Biased AI Output with Inline Highlight */}
                  <div className="bg-rose-50/50 rounded-2xl p-4 border border-rose-200">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700">
                        Raw AI Response &bull; MIRROR Flagged
                      </span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-rose-100 text-rose-800 border border-rose-200">
                        84% Confidence
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                      You should{" "}
                      <mark className="bg-rose-200/80 text-rose-950 font-bold px-1.5 py-0.5 rounded border border-rose-300">
                        {selectedCaseStudy.caseStudy.example.flaggedCue}
                      </mark>{" "}
                      before committing to any major long-term investment strategy.
                    </p>
                    <div className="mt-3 text-xs text-rose-900 bg-rose-100/60 p-2.5 rounded-xl border border-rose-200/70">
                      <span className="font-bold">Flagged Category: </span>
                      {selectedCaseStudy.caseStudy.example.category}
                      <p className="mt-0.5 text-rose-800">{selectedCaseStudy.caseStudy.example.why}</p>
                    </div>
                  </div>

                  {/* Step 3: DeBERTa 5-Class Softmax Distribution */}
                  <div className="bg-white rounded-2xl p-4 border border-purple-100 shadow-xs">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                        DeBERTa 5-Class Probability Distribution
                      </span>
                      <span className="text-[11px] text-gray-500">Softmax Confidence</span>
                    </div>
                    <div className="space-y-2">
                      {selectedCaseStudy.caseStudy.example.probabilities.map((prob) => (
                        <div key={prob.label} className="text-xs">
                          <div className="flex justify-between font-medium mb-1">
                            <span className="text-gray-700">{prob.label}</span>
                            <span className={`font-bold ${prob.text}`}>{prob.val}%</span>
                          </div>
                          <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${prob.color} rounded-full transition-all duration-700`}
                              style={{ width: `${prob.val}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Step 4: Counterfactual Rewrite & ADS Metric */}
                  <div className="bg-emerald-50/60 rounded-2xl p-4 border border-emerald-200">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                        Counterfactual Rewrite (Gemini API)
                      </span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                        Bias: None Detected
                      </span>
                    </div>
                    <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed">
                      "{selectedCaseStudy.caseStudy.example.counterfactual}"
                    </p>
                    <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs pt-2 border-t border-emerald-100">
                      <span className="text-emerald-900 font-semibold">
                        Assumption Drift Score (ADS):
                      </span>
                      <span className="font-mono bg-white px-2 py-0.5 rounded border border-emerald-200 text-emerald-700 font-bold">
                        ADS = w₁ &middot; (1 &minus; S_sem) + w₂ &middot; D_kw
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab Content 2: 4-Stage Architecture */}
              {activeTab === "pipeline" && (
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {selectedCaseStudy.caseStudy.fourStepFlow.map((flow) => (
                      <div
                        key={flow.step}
                        className="p-4 rounded-2xl bg-purple-50/40 border border-purple-100 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-mono font-black text-xs text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded-full uppercase">
                              {flow.step}
                            </span>
                            <span className="text-[11px] font-semibold text-gray-500">
                              {flow.badge}
                            </span>
                          </div>
                          <h4 className="font-bold text-gray-800 text-sm mb-1">{flow.name}</h4>
                          <p className="text-xs text-gray-600 leading-relaxed">{flow.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200 text-xs text-gray-700 space-y-2">
                    <span className="font-bold text-gray-800 block uppercase text-[11px]">
                      Decoupled System Architecture:
                    </span>
                    <p>
                      <strong>Classifier (DeBERTa):</strong> Dedicated to fine-grained 5-class detection without modifying generation prompts.
                    </p>
                    <p>
                      <strong>Rewriter (Gemini 2.5 Flash):</strong> Pure counterfactual synthesis preserving the original user intent while removing role-based stereotyping.
                    </p>
                    <p>
                      <strong>Scoring Engine:</strong> Re-evaluates rewrites through the detector to ensure the counterfactual is truly unbiased.
                    </p>
                  </div>
                </div>
              )}

              {/* Tab Content 3: Benchmark & Extension */}
              {activeTab === "specs" && (
                <div className="space-y-4 text-xs sm:text-sm text-gray-700">
                  <div className="bg-purple-50/50 rounded-2xl p-4 border border-purple-100">
                    <h4 className="font-bold text-gray-800 mb-1 flex items-center gap-1.5">
                      <span>Benchmark Dataset (700+ Annotated Pairs)</span>
                    </h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {selectedCaseStudy.caseStudy.benchmark}
                    </p>
                    <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="bg-white p-2 rounded-xl border border-purple-100">
                        <span className="font-bold text-purple-700 block text-sm">Health</span>
                        <span className="text-[11px] text-gray-500">Caregiver & class</span>
                      </div>
                      <div className="bg-white p-2 rounded-xl border border-purple-100">
                        <span className="font-bold text-purple-700 block text-sm">Finance</span>
                        <span className="text-[11px] text-gray-500">Decision authority</span>
                      </div>
                      <div className="bg-white p-2 rounded-xl border border-purple-100">
                        <span className="font-bold text-purple-700 block text-sm">Career</span>
                        <span className="text-[11px] text-gray-500">Gender & roles</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-1">
                      Chrome Extension (Manifest V3 Side Panel)
                    </h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {selectedCaseStudy.caseStudy.extension} Enables real-time verification with a single click, highlighting subtle biases directly in active ChatGPT or Claude conversation streams.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-4 border border-pink-100 flex items-center justify-between gap-4">
                    <div>
                      <span className="font-bold text-gray-800 block text-xs">Evaluation Metrics</span>
                      <span className="text-[11px] text-gray-500">
                        Macro F1 &bull; ECE Calibration &bull; Hard Negatives &bull; Inter-Annotator Agreement
                      </span>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold shrink-0">
                      Validated
                    </span>
                  </div>
                </div>
              )}

              {/* Modal Footer */}
              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
                <a
                  href={selectedCaseStudy.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs sm:text-sm shadow-md transition cursor-pointer"
                >
                  <FiGithub className="w-4 h-4" />
                  <span>View Repository on GitHub</span>
                  <FiExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={closeCaseStudy}
                  className="px-4 py-2 rounded-full border border-gray-200 text-gray-600 hover:text-gray-900 text-xs font-semibold hover:bg-gray-50 transition cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
