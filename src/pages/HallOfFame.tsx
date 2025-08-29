import { motion } from "framer-motion";
import { Trophy, Star, Clock, Award } from "lucide-react";

const hallOfFameMembers = [
	{
		name: "Dr. Rajesh Kumar",
		role: "Founding President",
		year: "2015-2017",
		achievements: [
			"Established club foundation",
			"First robotics team",
			"IEEE collaboration",
		],
		legacy: "Visionary leader who laid the foundation for technical excellence",
	},
	{
		name: "Sanjay Mehta",
		role: "President",
		year: "2018-2019",
		achievements: [
			"National competition winner",
			"IoT workshop series",
			"Industry partnerships",
		],
		legacy: "Pioneered industry-academia connections and practical learning",
	},
	{
		name: "Neha Agarwal",
		role: "President",
		year: "2019-2020",
		achievements: [
			"Virtual event innovation",
			"Coding bootcamps",
			"Alumni network expansion",
		],
		legacy:
			"Transformed club operations during challenging times with innovation",
	},
	{
		name: "Arpit Sharma",
		role: "Technical Director",
		year: "2020-2021",
		achievements: [
			"PCB design workshops",
			"Circuit simulation lab",
			"Patent filing guidance",
		],
		legacy: "Elevated technical standards and research culture in the club",
	},
	{
		name: "Pooja Iyer",
		role: "President",
		year: "2021-2022",
		achievements: [
			"Smart city project",
			"Women in tech initiatives",
			"International collaborations",
		],
		legacy: "Champion of diversity and global perspective in technology",
	},
	{
		name: "Abhishek Patel",
		role: "Vice President",
		year: "2022-2023",
		achievements: [
			"AI/ML study groups",
			"Startup incubation",
			"Publication mentorship",
		],
		legacy: "Fostered entrepreneurial mindset and research publications",
	},
];

export const HallOfFame = () => {
	return (
		<div className="min-h-screen py-20 px-4">
			<div className="container mx-auto max-w-6xl">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16">
					<div className="flex items-center justify-center mb-6">
						<Trophy className="w-16 h-16 text-cyber-green mr-4" />
						<h1 className="font-orbitron font-black text-5xl md:text-7xl text-glow animate-neon-pulse">
							HALL OF FAME
						</h1>
						<Trophy className="w-16 h-16 text-cyber-green ml-4" />
					</div>
					<p className="text-xl text-glow-green/80 font-exo max-w-3xl mx-auto">
						Honoring the legendary leaders who shaped Anvitha ECE Club's legacy
						of excellence and innovation
					</p>
				</motion.div>

				{/* Timeline */}
				<div className="relative">
					{/* Central Timeline Line */}
					<div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyber-green via-electric-blue to-cyber-green opacity-60" />

					{/* Timeline Items */}
					<div className="space-y-16">
						{hallOfFameMembers.map((member, index) => (
							<motion.div
								key={member.name}
								initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.2 * index, duration: 0.8 }}
								className={`flex items-center ${
									index % 2 === 0 ? "flex-row" : "flex-row-reverse"
								}`}>
								{/* Content Card */}
								<div className="w-5/12 relative">
									<motion.div
										whileHover={{ scale: 1.02, rotateY: 5 }}
										transition={{ duration: 0.3 }}
										className="holo-card p-6 relative overflow-hidden group"
										style={{
											background:
												"linear-gradient(145deg, hsl(var(--dark-panel)), hsl(var(--space-black)))",
										}}>
										{/* Holographic Border Animation */}
										<div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-green/30 to-transparent -skew-x-12 -left-full group-hover:left-full transition-all duration-1000" />

										{/* Memorial Badge */}
										<div className="flex items-center justify-between mb-4">
											<div className="flex items-center space-x-2">
												<Award className="w-6 h-6 text-cyber-green" />
												<span className="font-orbitron font-bold text-cyber-green text-sm">
													{member.role}
												</span>
											</div>
											<div className="flex items-center space-x-1 text-glow-green/70">
												<Clock className="w-4 h-4" />
												<span className="font-exo text-sm">{member.year}</span>
											</div>
										</div>

										{/* Profile */}
										<div className="flex items-center mb-4">
											<div className="w-16 h-16 bg-gradient-to-br from-cyber-green/20 to-electric-blue/20 rounded-full flex items-center justify-center mr-4">
												<div className="text-2xl font-orbitron font-bold text-neon-green">
													{member.name
														.split(" ")
														.map((n) => n[0])
														.join("")}
												</div>
											</div>
											<div>
												<h3 className="font-orbitron font-bold text-xl text-neon-green">
													{member.name}
												</h3>
												<p className="text-glow-green/70 font-exo text-sm">
													Legacy Bearer
												</p>
											</div>
										</div>

										{/* Achievements */}
										<div className="mb-4">
											<h4 className="font-exo font-bold text-cyber-green mb-2 flex items-center">
												<Star className="w-4 h-4 mr-2" />
												Key Achievements
											</h4>
											<ul className="space-y-1">
												{member.achievements.map((achievement, i) => (
													<li
														key={i}
														className="text-glow-green/70 font-exo text-sm flex items-start">
														<div className="w-1.5 h-1.5 bg-cyber-green rounded-full mt-2 mr-3 flex-shrink-0" />
														{achievement}
													</li>
												))}
											</ul>
										</div>

										{/* Legacy Quote */}
										<blockquote className="border-l-2 border-cyber-green/50 pl-4 italic text-glow-green/80 font-exo text-sm">
											"{member.legacy}"
										</blockquote>

										{/* Decorative Elements */}
										<div className="absolute top-4 right-4 opacity-10">
											<Trophy className="w-8 h-8 text-cyber-green" />
										</div>
									</motion.div>
								</div>

								{/* Timeline Node */}
								<div className="w-2/12 flex justify-center">
									<motion.div
										initial={{ scale: 0 }}
										animate={{ scale: 1 }}
										transition={{ delay: 0.2 * index + 0.3, duration: 0.5 }}
										className="relative">
										<div className="w-6 h-6 bg-cyber-green rounded-full animate-glow-pulse relative z-10" />
										<div className="absolute inset-0 bg-cyber-green rounded-full animate-ping" />
									</motion.div>
								</div>

								{/* Empty Space for Alternating Layout */}
								<div className="w-5/12" />
							</motion.div>
						))}
					</div>
				</div>

				{/* Memorial Message */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.5, duration: 0.8 }}
					className="mt-20 text-center">
					<div className="holo-card p-8 max-w-4xl mx-auto">
						<Trophy className="w-12 h-12 text-cyber-green mx-auto mb-4 animate-glow-pulse" />
						<h2 className="font-orbitron font-bold text-2xl text-neon-green mb-4">
							In Memory of Excellence
						</h2>
						<p className="text-glow-green/80 font-exo leading-relaxed">
							These visionary leaders have left an indelible mark on Anvitha ECE
							Club. Their dedication, innovation, and leadership continue to
							inspire current and future generations. Their legacy lives on in
							every project, every achievement, and every moment of excellence
							that defines our club today.
						</p>

						{/* Digital Memorial Lights */}
						<div className="mt-8 flex justify-center space-x-4">
							{Array.from({ length: 6 }).map((_, i) => (
								<motion.div
									key={i}
									className="w-2 h-8 bg-cyber-green rounded-full"
									animate={{ opacity: [0.3, 1, 0.3] }}
									transition={{
										duration: 2,
										repeat: Infinity,
										delay: i * 0.3,
									}}
								/>
							))}
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
};
