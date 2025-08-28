import { motion } from "framer-motion";
import { Crown, Shield, Users, Star, Briefcase } from "lucide-react";

const positions = [
	{
		role: "President",
		name: "Anvitha Reddy",
		email: "president@anvithaclub.edu",
		icon: Crown,
		description: "Leading the club with vision and innovation",
		color: "cyber-green",
	},
	{
		role: "Vice President",
		name: "Rahul Kumar",
		email: "vp@anvithaclub.edu",
		icon: Shield,
		description: "Supporting leadership and strategic initiatives",
		color: "electric-blue",
	},
	{
		role: "Secretary",
		name: "Priya Sharma",
		email: "secretary@anvithaclub.edu",
		icon: Briefcase,
		description: "Managing administrative operations and documentation",
		color: "neon-green",
	},
	{
		role: "Joint Secretary",
		name: "Arjun Patel",
		email: "jointsec@anvithaclub.edu",
		icon: Users,
		description: "Coordinating member activities and communications",
		color: "cyber-green",
	},
	{
		role: "Technical Director",
		name: "Sneha Gupta",
		email: "technical@anvithaclub.edu",
		icon: Star,
		description: "Overseeing technical projects and innovations",
		color: "electric-blue",
	},
	{
		role: "Events Director",
		name: "Vikram Singh",
		email: "events@anvithaclub.edu",
		icon: Star,
		description: "Planning and executing club events and workshops",
		color: "neon-green",
	},
];

export const PositionHolders = () => {
	return (
		<div className="min-h-screen py-20 px-4">
			<div className="container mx-auto max-w-6xl">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16">
					<h1 className="font-orbitron font-black text-5xl md:text-7xl text-glow mb-6 animate-neon-pulse">
						POSITION HOLDERS
					</h1>
					<p className="text-xl text-glow-green/80 font-exo max-w-2xl mx-auto">
						Meet the brilliant minds leading Anvitha ECE Club into the future of
						technology
					</p>
				</motion.div>

				{/* Position Cards Grid */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3, duration: 0.8 }}
					className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{positions.map((position, index) => {
						const Icon = position.icon;

						return (
							<motion.div
								key={position.role}
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 0.1 * index, duration: 0.6 }}
								className="holo-card p-6 group hover:scale-105 transition-all duration-300 relative overflow-hidden">
								{/* Background Glow */}
								<div
									className={`absolute inset-0 bg-gradient-to-br from-${position.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
								/>

								{/* Content */}
								<div className="relative z-10">
									{/* Role Badge */}
									<div className="flex items-center justify-between mb-4">
										<div
											className={`w-12 h-12 bg-${position.color}/20 rounded-full flex items-center justify-center group-hover:animate-pulse`}>
											<Icon className={`w-6 h-6 text-${position.color}`} />
										</div>
										<div
											className={`px-3 py-1 bg-${position.color}/20 rounded-full`}>
											<span
												className={`text-${position.color} font-exo text-sm font-bold`}>
												{position.role}
											</span>
										</div>
									</div>

									{/* Profile Image Placeholder */}
									<div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-cyber-green/30 to-electric-blue/30 rounded-full flex items-center justify-center">
										<div className="text-4xl font-orbitron font-bold text-neon-green">
											{position.name
												.split(" ")
												.map((n) => n[0])
												.join("")}
										</div>
									</div>

									{/* Name and Contact */}
									<div className="text-center mb-4">
										<h3 className="font-orbitron font-bold text-xl text-neon-green mb-2">
											{position.name}
										</h3>
										<a
											href={`mailto:${position.email}`}
											className="text-glow-green/70 hover:text-cyber-green transition-colors font-exo text-sm">
											{position.email}
										</a>
									</div>

									{/* Description */}
									<p className="text-glow-green/60 font-exo text-center text-sm leading-relaxed">
										{position.description}
									</p>

									{/* Circuit Lines Decoration */}
									<div className="mt-6 flex justify-center space-x-2">
										{Array.from({ length: 3 }).map((_, i) => (
											<div
												key={i}
												className={`w-8 h-0.5 bg-${position.color}/50 circuit-flow`}
												style={{ animationDelay: `${i * 0.3}s` }}
											/>
										))}
									</div>
								</div>
							</motion.div>
						);
					})}
				</motion.div>

				{/* Executive Team Section */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.8, duration: 0.8 }}
					className="mt-20 text-center">
					<h2 className="font-orbitron font-bold text-3xl text-neon-green mb-8">
						EXECUTIVE TEAM
					</h2>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
						{[
							"Aditya Raj",
							"Meera Iyer",
							"Rohan Desai",
							"Kavya Nair",
							"Suresh Reddy",
							"Ananya Das",
							"Karthik Menon",
							"Divya Shah",
						].map((name, index) => (
							<motion.div
								key={name}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
								className="holo-card p-4 text-center group hover:scale-105 transition-transform duration-300">
								<div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-metallic-gray/30 to-cyber-green/20 rounded-full flex items-center justify-center">
									<div className="text-lg font-orbitron font-bold text-cyber-green">
										{name
											.split(" ")
											.map((n) => n[0])
											.join("")}
									</div>
								</div>
								<h4 className="font-exo font-semibold text-glow-green">
									{name}
								</h4>
								<p className="text-glow-green/60 text-sm mt-1">Executive</p>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
};
