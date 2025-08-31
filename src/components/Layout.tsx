import { ReactNode } from "react";
import { Navigation } from "./Navigation";
import circuitBg from "@/assets/circuit-bg.webp";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div 
      className="min-h-screen bg-space-black circuit-bg"
      style={{
        backgroundImage: `url(${circuitBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background Overlay */}
      <div className="fixed inset-0 bg-space-black/70 circuit-bg" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10 pt-16">
        {children}
      </main>
      
      {/* Floating Circuit Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-32 h-0.5 bg-gradient-to-r from-transparent via-cyber-green to-transparent opacity-30 circuit-flow`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};