import { motion } from "framer-motion";
import { Crown, Shield, Users, Star, Briefcase } from "lucide-react";
import shilpa from "@/assets/dr_shilpa_chaoudhary.png";
import smriti from "@/assets/dr_smriti_sachan.png";
import rishabh from "@/assets/mr_rishabh_yadav.png";
import { Members } from "@/assets/Members";

const positions = [
	{
		role: "President",
		name: "Akshat Jain",
		email: "president@anvithaclub.edu",
		icon: Crown,
		description: "Leading the club with vision and innovation",
		color: "cyber-green",
	},
	{
		role: "Vice President",
		name: "Asmit Singh",
		email: "vp@anvithaclub.edu",
		icon: Shield,
		description: "Supporting leadership and strategic initiatives",
		color: "electric-blue",
	},
	{
		role: "Secretary",
		name: "Shriman Nivas",
		email: "secretary@anvithaclub.edu",
		icon: Briefcase,
		description: "Managing administrative operations and documentation",
		color: "neon-green",
	},
	{
		role: "Joint Secretary",
		name: "Tanya Goel",
		email: "jointsec@anvithaclub.edu",
		icon: Users,
		description: "Coordinating member activities and communications",
		color: "cyber-green",
	},
];

export const TheTeam = () => {
	const faculty = [
		{
			image: shilpa,
			name: "Dr Shilpa Choudhary",
		},
		{
			image: smriti,
			name: "Dr Smriti Sachan",
		},
		{
			image: rishabh,
			name: "Mr Rishabh Yadav",
		},
	];
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3, // delay between each div
				when: "beforeChildren",
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: -20 }, // start from slightly above (same point)
		show: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: "easeOut" },
		},
	};
	const teams = Members();
	return (
		<div className="min-h-screen py-20 px-4">
			<div className="container mx-auto max-w-6xl">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16">
					<h1 className="font-orbitron font-bold text-white text-5xl md:text-7xl text-glow mb-6 animate-neon-pulse">
						The Team
					</h1>
					<p className="text-xl text-glow-green/80 font-exo max-w-2xl mx-auto">
						Meet the brilliant minds leading Anvitha ECE Club into the future of
						technology
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3, duration: 0.8 }}
					className="flex flex-col gap-5 my-10">
					<h1 className="text-5xl font-bold font-orbitron relative">
						<div className="absolute h-0.5 w-full bg-gradient-to-r from-electric-blue to-transparent bottom-0"></div>
						Faculty Co-Ordinators
					</h1>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1, duration: 0.4 }}
						className="grid sm:grid-cols-1 md:grid-cols-3 gap-5">
						{faculty.map((faculty) => {
							return (
								<div className="relative mx-auto h-72 bg-white flex flex-col  gap-5 items-center rounded-3xl w-auto p-2">
									<img
										src={faculty.image}
										className="object-cover h-full border border-neutral-400 rounded-3xl  mask-b-from-70%"></img>
									<h2 className="absolute font-bold font-orbitron text-black">
										{faculty.name}
									</h2>
								</div>
							);
						})}
					</motion.div>
				</motion.div>

				{/* Position Cards Grid */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.1, duration: 0.8 }}
					className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
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
					<motion.div
						variants={container as any}
						initial="hidden"
						animate="show">
						{Object.entries(teams).map(([teamName, teamDetails]) => (
							<motion.div variants={item as any}>
								<h1>{teamName}</h1>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
};
