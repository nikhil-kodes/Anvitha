import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Zap, Users, Trophy, Calendar, Lightbulb } from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: Zap },
  { name: "Position Holders", path: "/positions", icon: Users },
  { name: "Hall of Fame", path: "/hall-of-fame", icon: Trophy },
  { name: "Events", path: "/events", icon: Calendar },
  { name: "Submit Ideas", path: "/submit-ideas", icon: Lightbulb },
];

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-space-black/80 backdrop-blur-md border-b border-cyber-green/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-cyber-green rounded-full animate-glow-pulse flex items-center justify-center">
              <Zap className="w-4 h-4 text-space-black" />
            </div>
            <span className="font-orbitron font-bold text-neon-green text-xl">
              ANVITHA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-cyber-green text-space-black font-bold"
                      : "text-glow-green hover:text-cyber-green hover:bg-cyber-green/10"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-exo">{item.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-cyber-green rounded-lg"
                      style={{ zIndex: -1 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-cyber-green hover:text-neon-green transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            <div className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-cyber-green text-space-black font-bold"
                        : "text-glow-green hover:text-cyber-green hover:bg-cyber-green/10"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-exo">{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};