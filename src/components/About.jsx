import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

export default function About({ profile }) {
  const [uni, alx] = profile.education;
  return (
    <SectionWrapper title="About">
      <div className="grid lg:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <p className="text-slate-300 dark:text-slate-300 text-slate-700">
            I'm a Computer Science student at <span className="text-emerald-300 dark:text-emerald-300 text-emerald-600">{uni.school}</span>{" "}
            with a passion for full-stack development, data science, and building systems that
            actually get used.
          </p>
          <p className="text-slate-300 dark:text-slate-300 text-slate-700">
            Outside of classes, I work on internships, competitions like{" "}
            <span className="text-emerald-300 dark:text-emerald-300 text-emerald-600">ECPC</span>, and projects that turn real problems
            (like shelter management or business reviews) into polished products.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <EducationCard item={uni} />
          <EducationCard item={alx} />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

function EducationCard({ item }) {
  return (
    <div className="rounded-2xl border border-slate-700/70 dark:border-slate-700/70 
                    border-slate-200/70 bg-slate-900/80 dark:bg-slate-900/80 
                    bg-white/90 backdrop-blur-sm p-4 
                    hover:border-emerald-300/70 dark:hover:border-emerald-300/70 
                    hover:border-emerald-500/70 transition-colors">
      <h3 className="font-semibold text-slate-50 dark:text-slate-50 text-slate-900">{item.school}</h3>
      <p className="text-sm text-emerald-300 dark:text-emerald-300 text-emerald-600">{item.program}</p>
      <p className="text-xs text-slate-400 dark:text-slate-400 text-slate-500 mt-1">{item.period}</p>
      {item.gpa && <p className="text-xs text-slate-300 dark:text-slate-300 text-slate-700 mt-1">GPA: {item.gpa}</p>}
      <ul className="mt-2 text-xs text-slate-300 dark:text-slate-300 text-slate-600 list-disc list-inside space-y-1">
        {item.details.map((d, idx) => (
          <li key={idx}>{d}</li>
        ))}
      </ul>
    </div>
  );
}
