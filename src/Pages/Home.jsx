import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import ThingsIDone from "../components/ThingsIDone";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[#f3ede6] text-gray-800 font-sans overflow-x-hidden relative"
    >
      {/* Background Decorative Ambient Orbs */}
      <div className="absolute top-0 left-[-10%] w-[550px] h-[550px] bg-pink-200/40 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute top-[35%] right-[-10%] w-[600px] h-[600px] bg-rose-200/30 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[15%] w-[550px] h-[550px] bg-pink-300/20 rounded-full blur-[130px] pointer-events-none z-0" />

      {/* Shared Glass Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <ThingsIDone />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Shared Footer */}
      <Footer />
    </motion.div>
  );
}