import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

export default function Experience({ experience }) {
  return (
    <SectionWrapper title="Experience">
      <div className="grid md:grid-cols-2 gap-6">
        {experience.map((job) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4, scale: 1.01 }}
            className="rounded-2xl border border-slate-700/70 dark:border-slate-700/70 
                        border-slate-200/70 bg-slate-900/80 dark:bg-slate-900/80 
                        bg-white/90 backdrop-blur-sm p-5
                        hover:border-emerald-300/70 dark:hover:border-emerald-300/70 
                        hover:border-emerald-500/70 cursor-default transition-colors"
          >
            <h3 className="font-semibold text-slate-50 dark:text-slate-50 text-slate-900">
              {job.role} <span className="text-emerald-300 dark:text-emerald-300 text-emerald-600">@ {job.company}</span>
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-300 dark:text-slate-300 text-slate-600">
              {job.details.map((d, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-emerald-300/70 dark:bg-emerald-300/70 bg-emerald-500/70" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
