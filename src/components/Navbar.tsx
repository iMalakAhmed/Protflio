import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

const sections = ["home", "about", "experience", "projects", "achievements", "contact"];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50
                 max-w-[95vw] sm:max-w-[90vw] lg:max-w-none
                 rounded-full border border-slate-700/60 dark:border-slate-700/60 
                 bg-slate-900/80 dark:bg-slate-900/80 bg-white/80 dark:bg-slate-900/80
                 backdrop-blur-xl px-4 sm:px-6 py-2 flex items-center gap-2 sm:gap-4 text-xs sm:text-sm
                 shadow-lg overflow-hidden"
    >
      <span className="font-semibold tracking-wide dark:text-slate-50 text-slate-900 whitespace-nowrap">
        Malak
      </span>
      <div className="w-px h-4 bg-slate-700/70 dark:bg-slate-700/70 bg-slate-300/70" />
      <ul className="flex gap-2 sm:gap-4 overflow-x-auto scrollbar-hide">
        {sections.map((id) => (
          <li key={id} className="whitespace-nowrap">
            <button
              onClick={() => {
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="uppercase tracking-wider text-slate-300 dark:text-slate-300 
                         text-slate-700 hover:text-emerald-300 dark:hover:text-emerald-300 
                         transition-colors"
            >
              {id}
            </button>
          </li>
        ))}
      </ul>
      <div className="w-px h-4 bg-slate-700/70 dark:bg-slate-700/70 bg-slate-300/70 flex-shrink-0" />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleTheme}
        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
                   bg-slate-800/50 dark:bg-slate-800/50 bg-slate-200/50
                   hover:bg-emerald-500/20 dark:hover:bg-emerald-500/20
                   transition-colors"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <span className="text-xl">☀️</span>
        ) : (
          <span className="text-xl">🌙</span>
        )}
      </motion.button>
    </motion.nav>
  );
}

