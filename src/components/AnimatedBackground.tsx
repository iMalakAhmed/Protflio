import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { MousePosition } from "../types";

interface AnimatedBackgroundProps {
  mouse: MousePosition;
}

export default function AnimatedBackground({ mouse }: AnimatedBackgroundProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  // Blob 1 - Emerald, follows mouse with parallax
  const blob1X = useMotionValue(0);
  const blob1Y = useMotionValue(0);
  const smoothBlob1X = useSpring(blob1X, { stiffness: 30, damping: 25 });
  const smoothBlob1Y = useSpring(blob1Y, { stiffness: 30, damping: 25 });

  // Blob 2 - Cyan, follows mouse with different parallax intensity
  const blob2X = useMotionValue(0);
  const blob2Y = useMotionValue(0);
  const smoothBlob2X = useSpring(blob2X, { stiffness: 25, damping: 20 });
  const smoothBlob2Y = useSpring(blob2Y, { stiffness: 25, damping: 20 });

  // Blob 3 - Emerald (smaller), subtle movement
  const blob3X = useMotionValue(0);
  const blob3Y = useMotionValue(0);
  const smoothBlob3X = useSpring(blob3X, { stiffness: 20, damping: 18 });
  const smoothBlob3Y = useSpring(blob3Y, { stiffness: 20, damping: 18 });

  // Update blobs based on mouse position (parallax effect)
  useEffect(() => {
    if (!mouse || typeof mouse.x !== "number" || typeof mouse.y !== "number") {
      // Initialize blobs at center if no mouse data
      blob1X.set(0);
      blob1Y.set(0);
      blob2X.set(0);
      blob2Y.set(0);
      blob3X.set(0);
      blob3Y.set(0);
      return;
    }

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    // Different parallax intensities for depth effect - increased for more visible movement
    blob1X.set((mouse.x - centerX) * 0.25);
    blob1Y.set((mouse.y - centerY) * 0.25);
    
    blob2X.set((mouse.x - centerX) * 0.2);
    blob2Y.set((mouse.y - centerY) * 0.2);
    
    blob3X.set((mouse.x - centerX) * 0.15);
    blob3Y.set((mouse.y - centerY) * 0.15);
  }, [mouse, mouse?.x, mouse?.y, blob1X, blob1Y, blob2X, blob2Y, blob3X, blob3Y]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Base background - changes with theme */}
      <div className="absolute inset-0 bg-[#020617] dark:bg-[#020617] bg-white" style={{ zIndex: 0 }} />

      {/* Large emerald blob - top left */}
      <motion.div
        style={{ 
          x: smoothBlob1X, 
          y: smoothBlob1Y,
          opacity: isDark ? 0.3 : 0.2,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          backgroundColor: '#34d399',
          filter: 'blur(80px)',
          zIndex: 1,
        }}
      />

      {/* Large cyan blob - bottom right */}
      <motion.div
        style={{ 
          x: smoothBlob2X, 
          y: smoothBlob2Y,
          opacity: isDark ? 0.25 : 0.2,
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          backgroundColor: '#22d3ee',
          filter: 'blur(80px)',
          zIndex: 1,
        }}
      />

      {/* Medium emerald blob - center */}
      <motion.div
        style={{ 
          x: smoothBlob3X, 
          y: smoothBlob3Y,
          opacity: isDark ? 0.2 : 0.15,
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          backgroundColor: '#6ee7b7',
          filter: 'blur(70px)',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
        }}
      />
    </div>
  );
}

