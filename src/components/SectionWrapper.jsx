import { motion } from "framer-motion";

export default function SectionWrapper({ title, children }) {
  return (
    <div className="w-full px-6 sm:px-10 lg:px-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-3xl font-semibold mb-8 flex items-center gap-3
                   text-slate-50 dark:text-slate-50 text-slate-900"
      >
        <span className="h-[1px] w-10 bg-emerald-300 dark:bg-emerald-300 bg-emerald-500" />
        {title}
      </motion.h2>
      {children}
    </div>
  );
}

