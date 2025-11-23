import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

export default function Achievements({ achievements }) {
  return (
    <SectionWrapper title="Activities & Achievements">
      <motion.ul
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="space-y-3 text-sm text-slate-200 dark:text-slate-200 text-slate-700"
      >
        {achievements.map((a, idx) => (
          <li key={idx} className="flex gap-3">
            <span className="mt-[5px] h-[8px] w-[8px] rounded-full bg-emerald-300/80 dark:bg-emerald-300/80 bg-emerald-500/80" />
            <span>{a}</span>
          </li>
        ))}
      </motion.ul>
    </SectionWrapper>
  );
}
