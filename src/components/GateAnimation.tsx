import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import circuitBg from "@/assets/circuit-bg.jpg";

interface GateAnimationProps {
  onComplete: () => void;
}

export const GateAnimation = ({ onComplete }: GateAnimationProps) => {
  const [showGate, setShowGate] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGate(false);
      setTimeout(onComplete, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!showGate) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-space-black">
      {/* Left Gate Panel */}
      <motion.div
        className="absolute top-0 left-0 w-1/2 h-full gate-panel"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        style={{
          backgroundImage: `url(${circuitBg})`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
        }}
      >
        {/* Circuit Pattern Overlay */}
        <div className="absolute inset-0 circuit-bg opacity-60" />
        
        {/* Glowing Border */}
        <div className="absolute right-0 top-0 w-1 h-full bg-cyber-green animate-glow-pulse" />
        
        {/* Central Circuit Lines */}
        <div className="absolute right-0 top-1/4 w-20 h-2 bg-cyber-green opacity-70 circuit-flow" />
        <div className="absolute right-0 top-1/2 w-32 h-2 bg-neon-green opacity-80 circuit-flow" />
        <div className="absolute right-0 top-3/4 w-16 h-2 bg-electric-blue opacity-60 circuit-flow" />
      </motion.div>

      {/* Right Gate Panel */}
      <motion.div
        className="absolute top-0 right-0 w-1/2 h-full gate-panel"
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        style={{
          backgroundImage: `url(${circuitBg})`,
          backgroundSize: "cover",
          backgroundPosition: "left center",
        }}
      >
        {/* Circuit Pattern Overlay */}
        <div className="absolute inset-0 circuit-bg opacity-60" />
        
        {/* Glowing Border */}
        <div className="absolute left-0 top-0 w-1 h-full bg-cyber-green animate-glow-pulse" />
        
        {/* Central Circuit Lines */}
        <div className="absolute left-0 top-1/4 w-20 h-2 bg-cyber-green opacity-70 circuit-flow" />
        <div className="absolute left-0 top-1/2 w-32 h-2 bg-neon-green opacity-80 circuit-flow" />
        <div className="absolute left-0 top-3/4 w-16 h-2 bg-electric-blue opacity-60 circuit-flow" />
      </motion.div>

      {/* Central Loading Element */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="font-orbitron text-4xl font-bold text-neon mb-4 animate-neon-pulse">
            ANVITHA ECE CLUB
          </div>
          <div className="text-cyber-green text-lg font-exo tracking-widest">
            [ INITIALIZING SYSTEM ]
          </div>
          
          {/* Loading Bars */}
          <div className="mt-8 space-y-2">
            <motion.div
              className="w-64 h-1 bg-dark-panel rounded-full overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: "16rem" }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-cyber-green to-neon-green"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 1.5 }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Particle Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyber-green rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 10,
              opacity: 0,
            }}
            animate={{
              y: -10,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              delay: Math.random() * 2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>
    </div>
  );
};