import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Users, Zap, CheckCircle, AlertCircle } from "lucide-react";
import { format } from "date-fns";

const upcomingEvents = [
  {
    id: 1,
    title: "IoT Innovation Workshop",
    date: new Date("2025-01-15"),
    time: "10:00 AM - 4:00 PM",
    location: "ECE Lab Block A",
    type: "Workshop",
    description: "Hands-on workshop on IoT device development using ESP32 and sensor networks.",
    maxParticipants: 50,
    registered: 35,
    status: "active",
    isHighlighted: true,
  },
  {
    id: 2,
    title: "Circuit Design Competition",
    date: new Date("2025-01-22"),
    time: "2:00 PM - 6:00 PM", 
    location: "Main Auditorium",
    type: "Competition",
    description: "Design innovative analog and digital circuits to solve real-world problems.",
    maxParticipants: 80,
    registered: 42,
    status: "active",
    isHighlighted: true,
  },
  {
    id: 3,
    title: "Industry Expert Talk: 5G & Beyond",
    date: new Date("2025-02-05"),
    time: "3:00 PM - 5:00 PM",
    location: "Seminar Hall",
    type: "Seminar",
    description: "Guest lecture by industry experts on the future of wireless communication.",
    maxParticipants: 200,
    registered: 156,
    status: "active",
    isHighlighted: false,
  },
];

const pastEvents = [
  {
    title: "PCB Design Masterclass",
    date: new Date("2024-12-10"),
    type: "Workshop",
    participants: 45,
    success: true,
  },
  {
    title: "Robotics Hackathon 2024",
    date: new Date("2024-11-25"),
    type: "Hackathon",
    participants: 120,
    success: true,
  },
  {
    title: "AI in Electronics Symposium",
    date: new Date("2024-10-18"),
    type: "Symposium", 
    participants: 200,
    success: true,
  },
];

export const Events = () => {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Calendar className="w-16 h-16 text-cyber-green animate-glow-pulse mr-4" />
            <h1 className="font-orbitron font-black text-5xl md:text-7xl text-glow animate-neon-pulse">
              EVENTS
            </h1>
            <Calendar className="w-16 h-16 text-cyber-green animate-glow-pulse ml-4" />
          </div>
          <p className="text-xl text-glow-green/80 font-exo max-w-3xl mx-auto">
            Discover exciting workshops, competitions, and seminars that push the boundaries of ECE innovation
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="flex bg-dark-panel rounded-lg p-1 border border-cyber-green/30">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`px-8 py-3 rounded-lg font-orbitron font-bold transition-all duration-300 ${
                activeTab === "upcoming"
                  ? "bg-cyber-green text-space-black"
                  : "text-glow-green hover:text-cyber-green"
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`px-8 py-3 rounded-lg font-orbitron font-bold transition-all duration-300 ${
                activeTab === "past"
                  ? "bg-cyber-green text-space-black"
                  : "text-glow-green hover:text-cyber-green"
              }`}
            >
              Past Events
            </button>
          </div>
        </motion.div>

        {/* Upcoming Events */}
        {activeTab === "upcoming" && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className={`holo-card p-6 relative overflow-hidden group ${
                  event.isHighlighted ? "border-cyber-green animate-glow-pulse" : ""
                }`}
              >
                {/* Active Event Glow */}
                {event.isHighlighted && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-green/10 to-transparent" />
                )}

                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    {/* Event Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                          event.type === "Workshop" ? "bg-cyber-green/20 text-cyber-green" :
                          event.type === "Competition" ? "bg-electric-blue/20 text-electric-blue" :
                          "bg-neon-green/20 text-neon-green"
                        }`}>
                          {event.type}
                        </div>
                        {event.isHighlighted && (
                          <div className="flex items-center text-cyber-green">
                            <Zap className="w-4 h-4 mr-1" />
                            <span className="text-sm font-bold">LIVE EVENT</span>
                          </div>
                        )}
                      </div>

                      <h3 className="font-orbitron font-bold text-2xl text-neon-green mb-3">
                        {event.title}
                      </h3>

                      <p className="text-glow-green/80 font-exo mb-4 leading-relaxed">
                        {event.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center text-glow-green/70">
                          <Calendar className="w-4 h-4 mr-2 text-cyber-green" />
                          {format(event.date, "MMM dd, yyyy")}
                        </div>
                        <div className="flex items-center text-glow-green/70">
                          <Clock className="w-4 h-4 mr-2 text-cyber-green" />
                          {event.time}
                        </div>
                        <div className="flex items-center text-glow-green/70">
                          <MapPin className="w-4 h-4 mr-2 text-cyber-green" />
                          {event.location}
                        </div>
                      </div>
                    </div>

                    {/* Registration Stats */}
                    <div className="lg:w-64 space-y-4">
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Users className="w-5 h-5 text-cyber-green mr-2" />
                          <span className="font-orbitron font-bold text-neon-green">
                            {event.registered}/{event.maxParticipants}
                          </span>
                        </div>
                        <div className="w-full bg-dark-panel rounded-full h-2 mb-3">
                          <div 
                            className="bg-gradient-to-r from-cyber-green to-neon-green h-2 rounded-full transition-all duration-500"
                            style={{ width: `${(event.registered / event.maxParticipants) * 100}%` }}
                          />
                        </div>
                        <button className="btn-cyber w-full">
                          Register Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Circuit Line Decorations */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyber-green/50 to-transparent" />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Past Events */}
        {activeTab === "past" && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="holo-card p-6 group hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                    event.type === "Workshop" ? "bg-cyber-green/20 text-cyber-green" :
                    event.type === "Hackathon" ? "bg-electric-blue/20 text-electric-blue" :
                    "bg-neon-green/20 text-neon-green"
                  }`}>
                    {event.type}
                  </div>
                  {event.success ? (
                    <CheckCircle className="w-6 h-6 text-cyber-green" />
                  ) : (
                    <AlertCircle className="w-6 h-6 text-yellow-500" />
                  )}
                </div>

                <h3 className="font-orbitron font-bold text-xl text-neon-green mb-3">
                  {event.title}
                </h3>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-glow-green/70">
                    <Calendar className="w-4 h-4 mr-2 text-cyber-green" />
                    {format(event.date, "MMM dd, yyyy")}
                  </div>
                  <div className="flex items-center text-glow-green/70">
                    <Users className="w-4 h-4 mr-2 text-cyber-green" />
                    {event.participants} participants
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-cyber-green/30">
                  <span className="text-cyber-green font-exo font-bold text-sm">
                    ✓ Successfully Completed
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="holo-card p-8 max-w-2xl mx-auto">
            <Zap className="w-12 h-12 text-cyber-green mx-auto mb-4 animate-glow-pulse" />
            <h2 className="font-orbitron font-bold text-2xl text-neon-green mb-4">
              Want to Suggest an Event?
            </h2>
            <p className="text-glow-green/80 font-exo mb-6">
              Have an innovative idea for a workshop, competition, or seminar? 
              Share your suggestions and help us create amazing learning experiences.
            </p>
            <button className="btn-cyber">
              Submit Event Idea
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};