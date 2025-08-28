import { motion } from "framer-motion";
import { Zap, Target, Cpu, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-4xl mx-auto"
      >
        {/* Main Title */}
        <div className="mb-8">
          <motion.h1
            className="font-orbitron font-black text-6xl md:text-8xl text-glow mb-6 animate-neon-pulse"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            ANVITHA ECE CLUB
          </motion.h1>
          
          <motion.div
            className="flex items-center justify-center space-x-4 text-2xl md:text-3xl text-cyber-green font-exo font-light tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Zap className="w-8 h-8" />
            <span>Innovation</span>
            <div className="w-2 h-2 bg-cyber-green rounded-full animate-glow-pulse" />
            <span>Legacy</span>
            <div className="w-2 h-2 bg-cyber-green rounded-full animate-glow-pulse" />
            <span>Technology</span>
            <Zap className="w-8 h-8" />
          </motion.div>
        </div>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-glow-green/80 mb-12 leading-relaxed font-exo max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Welcome to the official Electronics and Communication Engineering club. 
          Where innovation meets legacy, and technology shapes the future. Join us in our 
          mission to push the boundaries of electronic excellence.
        </motion.p>

        {/* Feature Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="holo-card p-6 group hover:scale-105 transition-transform duration-300">
            <Target className="w-12 h-12 text-cyber-green mx-auto mb-4 group-hover:animate-spin" />
            <h3 className="font-orbitron font-bold text-xl text-neon-green mb-2">
              Innovation Hub
            </h3>
            <p className="text-glow-green/70 font-exo">
              Fostering creativity and breakthrough solutions in electronics
            </p>
          </div>

          <div className="holo-card p-6 group hover:scale-105 transition-transform duration-300">
            <Cpu className="w-12 h-12 text-electric-blue mx-auto mb-4 group-hover:animate-pulse" />
            <h3 className="font-orbitron font-bold text-xl text-neon-green mb-2">
              Technical Excellence
            </h3>
            <p className="text-glow-green/70 font-exo">
              Building next-generation electronic systems and circuits
            </p>
          </div>

          <div className="holo-card p-6 group hover:scale-105 transition-transform duration-300">
            <Zap className="w-12 h-12 text-cyber-green mx-auto mb-4 group-hover:animate-bounce" />
            <h3 className="font-orbitron font-bold text-xl text-neon-green mb-2">
              Future Ready
            </h3>
            <p className="text-glow-green/70 font-exo">
              Preparing engineers for tomorrow's technological challenges
            </p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <Link to="/events" className="btn-cyber group">
            <span className="flex items-center space-x-2">
              <span>Explore Events</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link to="/submit-ideas" className="btn-cyber group">
            <span className="flex items-center space-x-2">
              <span>Submit Your Ideas</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          {[
            { number: "100+", label: "Active Members" },
            { number: "50+", label: "Projects Completed" },
            { number: "25+", label: "Events Organized" },
            { number: "10+", label: "Years of Excellence" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-orbitron font-bold text-3xl md:text-4xl text-cyber-green mb-2">
                {stat.number}
              </div>
              <div className="text-glow-green/70 font-exo text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <div className="w-6 h-10 border-2 border-cyber-green rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-cyber-green rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
};