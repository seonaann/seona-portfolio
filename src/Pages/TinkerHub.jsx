import { motion } from "framer-motion";

export default function TinkerHub() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
      className="p-10"
    >
      <h1 className="text-3xl font-bold">TinkerHub</h1>
    </motion.div>
  );
}