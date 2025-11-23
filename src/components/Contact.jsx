import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

export default function Contact({ profile }) {
  return (
    <SectionWrapper title="Contact">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="max-w-md space-y-4"
      >
        <p className="text-slate-300 dark:text-slate-300 text-slate-700">
          I'm open to internships, part-time roles, and interesting collaborations related
          to full-stack development, data science, or developer tools.
        </p>
        <div className="space-y-2 text-sm">
          <p>
            <span className="text-slate-400 dark:text-slate-400 text-slate-500">Email:</span>{" "}
            <a
              href={`mailto:${profile.email}`}
              className="text-emerald-300 dark:text-emerald-300 text-emerald-600 hover:underline"
            >
              {profile.email}
            </a>
          </p>
          <p>
            <span className="text-slate-400 dark:text-slate-400 text-slate-500">Phone:</span>{" "}
            <span className="text-slate-200 dark:text-slate-200 text-slate-700">{profile.phone}</span>
          </p>
        </div>
        <div className="flex gap-3 text-sm">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-full border border-slate-700 dark:border-slate-700 
                       border-slate-300 text-slate-200 dark:text-slate-200 text-slate-700
                       hover:border-emerald-300 dark:hover:border-emerald-300 
                       hover:border-emerald-500 transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-full border border-slate-700 dark:border-slate-700 
                       border-slate-300 text-slate-200 dark:text-slate-200 text-slate-700
                       hover:border-emerald-300 dark:hover:border-emerald-300 
                       hover:border-emerald-500 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={profile.links.vercel}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-full border border-slate-700 dark:border-slate-700 
                       border-slate-300 text-slate-200 dark:text-slate-200 text-slate-700
                       hover:border-emerald-300 dark:hover:border-emerald-300 
                       hover:border-emerald-500 transition-colors"
          >
            Live Projects
          </a>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

