import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Profile } from "../types";

interface HeroProps {
  profile: Profile;
}

export default function Hero({ profile }: HeroProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D tilt effect for highlight card
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / rect.width);
    y.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const techLogos = [
    { name: ".NET", icon: "⚙️" },
    { name: "Django", icon: "🐍" },
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "SQL Server", icon: "🗄️" },
    { name: "Python", icon: "🐍" },
    { name: "Git", icon: "📦" },
    { name: "GitHub", icon: "💻" },
  ];

  return (
    <div className="w-full px-6 sm:px-10 lg:px-24">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Text side */}
        <div className="space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-[0.3em] text-emerald-300/80 dark:text-emerald-300/80 
                       text-emerald-600"
          >
            Computer Science @ Nile University
          </motion.p>
          <div className="flex items-start gap-6">
            {/* Small photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.6, type: "spring" }}
              className="relative flex-shrink-0"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden 
                              border-2 border-emerald-400/50 dark:border-emerald-400/50 
                              border-emerald-500/50 shadow-lg shadow-emerald-500/30 
                              dark:shadow-emerald-500/30">
                <div className="w-full h-full bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 
                                dark:from-emerald-400/20 dark:to-cyan-400/20
                                flex items-center justify-center">
                  {/* Placeholder - replace with your photo */}
                  <div className="text-4xl">📸</div>
                  {/* Uncomment and add your photo:
                  <img 
                    src="/your-photo.jpg" 
                    alt="Malak Shams"
                    className="w-full h-full object-cover"
                  />
                  */}
                </div>
              </div>
            </motion.div>
            <div className="flex-1">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.7 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight
                           text-slate-50 dark:text-slate-50 text-slate-900 mb-2"
              >
                {profile.name}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-lg sm:text-xl text-emerald-300 dark:text-emerald-300 text-emerald-600 
                           font-medium"
              >
                Builds thoughtful full-stack & data-driven experiences.
              </motion.p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => {
                const el = document.getElementById("projects");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-5 py-2.5 rounded-full bg-emerald-400 dark:bg-emerald-400 
                         text-slate-950 font-semibold shadow-lg 
                         shadow-emerald-500/30 dark:shadow-emerald-500/30
                         hover:scale-[1.02] transition-transform"
            >
              View Projects
            </button>
            <a
              href={`mailto:${profile.email}`}
              className="px-4 py-2 rounded-full border border-slate-600 dark:border-slate-600 
                         border-slate-400 text-sm text-slate-200 dark:text-slate-200 
                         text-slate-700 hover:border-emerald-300 dark:hover:border-emerald-300 
                         hover:border-emerald-600 hover:text-emerald-200 dark:hover:text-emerald-200 
                         hover:text-emerald-600 transition-colors"
            >
              Get in touch
            </a>
          </motion.div>
          {/* Tech logos row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            {techLogos.map((tech) => (
              <TechLogo key={tech.name} name={tech.name} icon={tech.icon} />
            ))}
          </motion.div>
        </div>
        {/* Right side - Highlight Card */}
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              perspective: "1000px",
            }}
            initial={{ opacity: 0, x: 80, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ delay: 0.25, duration: 0.7, type: "spring", stiffness: 100 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-3xl bg-emerald-500/20 dark:bg-emerald-500/20 
                            bg-emerald-400/30 blur-3xl -z-10" />
            <div className="rounded-3xl border border-slate-700/80 dark:border-slate-700/80 
                            border-slate-200/80
                            bg-slate-900/80 dark:bg-slate-900/80 bg-white/90 backdrop-blur-xl 
                            p-6 sm:p-8 
                            shadow-[0_0_60px_rgba(16,185,129,0.25)] dark:shadow-[0_0_60px_rgba(16,185,129,0.25)]
                            shadow-emerald-500/10 dark:shadow-emerald-500/20
                            hover:shadow-[0_0_80px_rgba(16,185,129,0.35)] dark:hover:shadow-[0_0_80px_rgba(16,185,129,0.35)]
                            hover:shadow-emerald-500/20 dark:hover:shadow-emerald-500/30 transition-shadow">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400 dark:text-slate-400 
                           text-slate-500 mb-4">
                Highlight
              </p>
              <p className="text-sm text-slate-200 dark:text-slate-200 text-slate-700 mb-3">
                <span className="font-semibold">Taqyim</span> – a location-aware social review
                app with interactive maps and real-time notifications, backed by a .NET Core API
                and a Next.js front-end.
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-400 text-slate-500">
                Also built a UGRF-winning pet adoption system and a full Django hospital
                management system.
              </p>
            </div>
          </motion.div>
      </div>
    </div>
  );
}

interface TechLogoProps {
  name: string;
  icon: string;
}

function TechLogo({ name, icon }: TechLogoProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.15, filter: "brightness(1.2)" }}
      className="flex flex-col items-center gap-1 cursor-pointer group"
      title={name}
    >
      <div className="text-2xl grayscale group-hover:grayscale-0 transition-all duration-300 
                      group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]">
        {icon}
      </div>
      <span className="text-[10px] text-slate-500 dark:text-slate-500 text-slate-600 
                       group-hover:text-emerald-300 dark:group-hover:text-emerald-300 
                       group-hover:text-emerald-600 transition-colors">
        {name}
      </span>
    </motion.div>
  );
}

