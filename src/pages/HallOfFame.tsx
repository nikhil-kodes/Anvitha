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
		<div className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
			<div className="container mx-auto max-w-6xl">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-12 sm:mb-16">
					<div className="flex items-center justify-center mb-4 sm:mb-6">
						<Trophy className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-electric-blue sm:mr-4 " />
						<h1 className="font-orbitron font-black text-2xl sm:text-3xl md:text-5xl lg:text-7xl text-neon-cyan">
							HALL OF FAME
						</h1>
						<Trophy className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-electric-blue sm:ml-4" />
					</div>
					<p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-300 font-exo max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
						Honoring the legendary leaders who shaped Anvitha ECE Club's legacy
						of excellence and innovation
					</p>
				</motion.div>

				{/* Timeline */}
				<div className="relative">
					{/* Central Timeline Line - Hidden on mobile */}
					<div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-sky-600 to-white opacity-60" />

					{/* Timeline Items */}
					<div className="space-y-8 sm:space-y-12 md:space-y-16">
						{hallOfFameMembers.map((member, index) => (
							<motion.div
								key={member.name}
								initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.2 * index, duration: 0.8 }}
								className={`flex items-center ${
									index % 2 === 0 ? "md:flex-row flex-col" : "md:flex-row-reverse flex-col"
								}`}>
								{/* Content Card */}
								<div className="w-full md:w-5/12 relative">
									<motion.div
										whileHover={{ scale: 1.02 }}
										transition={{ duration: 0.3 }}
										className="border border-blue-400 shadow-[0_0_5px_#87CEEB] p-4 sm:p-5 md:p-6 relative overflow-hidden group"
										style={{
											background:
												"linear-gradient(145deg, hsl(var(--dark-panel)), hsl(var(--space-black)))",
										}}>
										{/* Holographic Border Animation */}
										<div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-400/20 to-transparent -skew-x-12 -left-full group-hover:left-full transition-all duration-1000" />

										{/* Memorial Badge */}
										<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 space-y-2 sm:space-y-0">
											<div className="flex items-center space-x-2">
												<Award className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-200" />
												<span className="font-orbitron font-bold text-gray-200 text-xs sm:text-sm">
													{member.role}
												</span>
											</div>
											<div className="flex items-center space-x-1 text-gray-200/80">
												<Clock className="w-3 h-3 sm:w-4 sm:h-4" />
												<span className="font-exo text-xs sm:text-sm">{member.year}</span>
											</div>
										</div>

										{/* Profile */}
										<div className="flex items-center mb-3 sm:mb-4">
											<div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-cyber-green/20 to-electric-blue/20 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
												<div className="text-base sm:text-lg md:text-2xl font-orbitron font-bold text-neon-green">
													{member.name
														.split(" ")
														.map((n) => n[0])
														.join("")}
												</div>
											</div>
											<div className="min-w-0 flex-1">
												<h3 className="font-orbitron font-bold text-base sm:text-lg md:text-xl text-white leading-tight">
													{member.name}
												</h3>
												<p className="text-neutral-400/80 font-exo text-xs sm:text-sm">
													Legacy Bearer
												</p>
											</div>
										</div>

										{/* Achievements */}
										<div className="mb-3 sm:mb-4">
											<h4 className="font-exo font-bold text-slate-100 mb-2 flex items-center text-xs sm:text-sm">
												<Star className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
												Key Achievements
											</h4>
											<ul className="space-y-1">
												{member.achievements.map((achievement, i) => (
													<li
														key={i}
														className="text-gray-400 font-exo text-xs sm:text-sm flex items-start">
														<div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-sky-400 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0" />
														<span className="leading-relaxed">{achievement}</span>
													</li>
												))}
											</ul>
										</div>

										{/* Legacy Quote */}
										<blockquote className="border-l-2 border-cyber-green/50 pl-3 sm:pl-4 italic text-glow-green/80 font-exo text-xs sm:text-sm leading-relaxed">
											"{member.legacy}"
										</blockquote>

										{/* Decorative Elements */}
										<div className="absolute top-3 sm:top-4 right-3 sm:right-4 opacity-10">
											<Trophy className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cyber-green" />
										</div>
									</motion.div>
								</div>

								{/* Timeline Node - Hidden on mobile */}
								<div className="hidden md:flex w-2/12 justify-center">
									<motion.div
										initial={{ scale: 0 }}
										animate={{ scale: 1 }}
										transition={{ delay: 0.2 * index + 0.3, duration: 0.5 }}
										className="relative">
										<div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-teal-500 rounded-full animate-glow-pulse relative z-10" />
										<div className="absolute inset-0 bg-teal-400 rounded-full animate-ping" />
									</motion.div>
								</div>

								{/* Empty Space for Alternating Layout - Hidden on mobile */}
								<div className="hidden md:block w-5/12" />
							</motion.div>
						))}
					</div>
				</div>

				{/* Memorial Message */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.5, duration: 0.8 }}
					className="mt-12 sm:mt-16 md:mt-20 text-center">
					<div className="border rounded-lg shadow-[0_0_10px_#87CEEB] border-blue-500 bg-slate-200 p-4 sm:p-6 md:p-8 max-w-4xl mx-auto">
						<Trophy className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-sky-600 mx-auto mb-3 sm:mb-4" />
						<h2 className="font-orbitron font-bold text-lg sm:text-xl md:text-2xl text-gray-900 mb-3 sm:mb-4">
							In Memory of Excellence
						</h2>
						<p className="text-neutral-500 font-exo leading-relaxed text-sm sm:text-base px-4 sm:px-0">
							These visionary leaders have left an indelible mark on Anvitha ECE
							Club. Their dedication, innovation, and leadership continue to
							inspire current and future generations. Their legacy lives on in
							every project, every achievement, and every moment of excellence
							that defines our club today.
						</p>

						{/* Digital Memorial Lights */}
						<div className="mt-6 sm:mt-8 flex justify-center space-x-2 sm:space-x-4">
							{Array.from({ length: 6 }).map((_, i) => (
								<motion.div
									key={i}
									className="w-1.5 h-6 sm:w-2 sm:h-8 bg-sky-400 rounded-full"
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
