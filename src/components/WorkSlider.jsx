import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const techIcons = {
  ".NET Core": "⚙️",
  "Next.js": "▲",
  "SQL Server": "🗄️",
  React: "⚛️",
  Leaflet: "🗺️",
  "C#": "💎",
  Django: "🐍",
  Python: "🐍",
  PostgreSQL: "🐘",
  Pandas: "🐼",
  "Data Visualization": "📊",
};

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 400 : -400,
    opacity: 0,
    scale: 0.8,
    filter: "blur(12px)",
    rotateY: direction > 0 ? 20 : -20,
    zIndex: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    rotateY: 0,
    zIndex: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -400 : 400,
    opacity: 0,
    scale: 0.8,
    filter: "blur(12px)",
    rotateY: direction > 0 ? -20 : 20,
    zIndex: 0,
  }),
};

export default function WorkSlider({ projects }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const goTo = (newIndex) => {
    if (newIndex === index) return;
    setDirection(newIndex > index ? 1 : -1);
    setIndex((newIndex + projects.length) % projects.length);
  };

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  const project = projects[index];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xs uppercase tracking-[0.3em] text-slate-400 font-medium"
        >
          Selected Projects
        </motion.p>
        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgba(16, 185, 129, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            onClick={prev}
            className="h-12 w-12 rounded-full border border-slate-700/80 text-slate-200 
                       flex items-center justify-center hover:border-emerald-400/60 hover:text-emerald-300
                       transition-all duration-300 bg-slate-900/40 backdrop-blur-sm
                       shadow-lg hover:shadow-emerald-500/20"
          >
            <span className="text-xl font-light">‹</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgba(16, 185, 129, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            onClick={next}
            className="h-12 w-12 rounded-full border border-slate-700/80 text-slate-200 
                       flex items-center justify-center hover:border-emerald-400/60 hover:text-emerald-300
                       transition-all duration-300 bg-slate-900/40 backdrop-blur-sm
                       shadow-lg hover:shadow-emerald-500/20"
          >
            <span className="text-xl font-light">›</span>
          </motion.button>
        </div>
      </div>

      <div 
        className="relative h-[420px] sm:h-[400px] overflow-visible"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence custom={direction} mode="wait">
          <motion.article
            key={project.name}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 25,
              mass: 0.6,
            }}
            whileHover={{
              scale: 1.03,
              rotateY: 3,
              y: -8,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            style={{ 
              perspective: 1000,
              transformStyle: "preserve-3d",
            }}
            className="absolute inset-0 rounded-3xl border border-slate-700/50 dark:border-slate-700/50 
                       border-slate-200/50
                       bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-emerald-950/40
                       dark:from-slate-900/95 dark:via-slate-800/90 dark:to-emerald-950/40
                       from-white/95 via-slate-50/90 to-emerald-50/40
                       p-10 shadow-[0_0_80px_rgba(16,185,129,0.2),inset_0_1px_0_rgba(255,255,255,0.05)]
                       dark:shadow-[0_0_80px_rgba(16,185,129,0.2),inset_0_1px_0_rgba(255,255,255,0.05)]
                       shadow-emerald-500/10 dark:shadow-[0_0_80px_rgba(16,185,129,0.2)]
                       hover:shadow-[0_0_120px_rgba(16,185,129,0.35),inset_0_1px_0_rgba(255,255,255,0.1)]
                       dark:hover:shadow-[0_0_120px_rgba(16,185,129,0.35),inset_0_1px_0_rgba(255,255,255,0.1)]
                       hover:shadow-emerald-500/20 dark:hover:shadow-[0_0_120px_rgba(16,185,129,0.35)]
                       backdrop-blur-md overflow-hidden group
                       before:absolute before:inset-0 before:bg-gradient-to-br 
                       before:from-emerald-500/0 before:via-emerald-500/0 before:to-emerald-500/10
                       before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500"
          >
            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-cyan-500/0 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={isHovered ? { opacity: 0.1 } : { opacity: 0 }}
            />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col">
              {/* Project number indicator */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[120px] sm:text-[140px] font-bold text-emerald-500/5 
                           absolute -top-8 -right-8 select-none pointer-events-none"
              >
                {String(index + 1).padStart(2, "0")}
              </motion.div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl sm:text-4xl font-bold text-slate-50 dark:text-slate-50 
                               text-slate-900 mb-3 tracking-tight"
                  >
                    {project.name}
                  </motion.h3>
                  {project.tagline && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                      className="text-base text-emerald-300/90 dark:text-emerald-300/90 
                                 text-emerald-600 mb-4 font-medium"
                    >
                      {project.tagline}
                    </motion.p>
                  )}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-sm sm:text-base text-slate-300 dark:text-slate-300 
                               text-slate-600 mb-8 leading-relaxed line-clamp-3"
                  >
                    {project.details}
                  </motion.p>
                </div>

                {/* Tech stack with icons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="flex flex-wrap items-center gap-2.5"
                >
                  {project.tech?.map((tech, techIndex) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + techIndex * 0.05 }}
                      whileHover={{ 
                        scale: 1.15, 
                        y: -4,
                        rotateZ: 2,
                        transition: { type: "spring", stiffness: 400, damping: 10 }
                      }}
                      className="flex items-center gap-2 px-4 py-2 rounded-full 
                                 bg-slate-800/70 dark:bg-slate-800/70 bg-slate-100/70 
                                 border border-slate-700/60 dark:border-slate-700/60 
                                 border-slate-300/60 text-slate-200 dark:text-slate-200 
                                 text-slate-700
                                 hover:border-emerald-400/70 dark:hover:border-emerald-400/70 
                                 hover:border-emerald-500/70 hover:bg-emerald-900/30 
                                 dark:hover:bg-emerald-900/30 hover:bg-emerald-100/50
                                 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]
                                 transition-all duration-300 backdrop-blur-sm"
                    >
                      <span className="text-base">{techIcons[tech] || "⚡"}</span>
                      <span className="text-xs font-semibold tracking-wide">{tech}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>

      {/* Enhanced dots indicator */}
      <div className="flex justify-center items-center mt-8 gap-3">
        {projects.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => goTo(i)}
            whileHover={{ scale: 1.3, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="relative"
          >
            <motion.div
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-12 bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.6)]"
                  : "w-2.5 bg-slate-600 hover:bg-slate-500"
              }`}
              layoutId="activeDot"
            />
          </motion.button>
        ))}
      </div>

      {/* Project counter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex justify-center items-center gap-2 mt-6 text-xs text-slate-500"
      >
        <span className="text-emerald-400 font-semibold">{index + 1}</span>
        <span>/</span>
        <span>{projects.length}</span>
      </motion.div>
    </div>
  );
}
