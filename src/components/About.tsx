import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Profile, Education } from "../types";

interface AboutProps {
  profile: Profile;
}

export default function About({ profile }: AboutProps) {
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

interface EducationCardProps {
  item: Education;
}

function EducationCard({ item }: EducationCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="rounded-2xl border border-slate-700/50 dark:border-slate-700/50 
                  border-slate-200/50 bg-slate-900/60 dark:bg-slate-900/60 
                  bg-white/95 backdrop-blur-md p-6 
                  hover:border-emerald-400/50 dark:hover:border-emerald-400/50 
                  hover:border-emerald-500/50 
                  shadow-lg dark:shadow-lg shadow-slate-200/50 dark:shadow-black/20
                  hover:shadow-xl dark:hover:shadow-xl hover:shadow-emerald-500/10 
                  dark:hover:shadow-emerald-500/20 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-bold text-lg text-slate-50 dark:text-slate-50 text-slate-900">
            {item.school}
          </h3>
          <p className="text-sm font-medium text-emerald-300 dark:text-emerald-300 text-emerald-600 mt-1">
            {item.program}
          </p>
        </div>
        {item.gpa && (
          <div className="text-right">
            <p className="text-xs font-semibold text-emerald-300 dark:text-emerald-300 text-emerald-600">
              {item.gpa}
            </p>
            <p className="text-[10px] text-slate-400 dark:text-slate-400 text-slate-500 uppercase tracking-wide">
              GPA
            </p>
          </div>
        )}
      </div>
      <p className="text-xs text-slate-400 dark:text-slate-400 text-slate-500 mb-3 font-medium">
        {item.period}
      </p>
      <div className="pt-3 border-t border-slate-700/30 dark:border-slate-700/30 border-slate-200/30">
        <p className="text-xs text-slate-300 dark:text-slate-300 text-slate-600 leading-relaxed">
          {item.details[0]}
        </p>
      </div>
    </motion.div>
  );
}

