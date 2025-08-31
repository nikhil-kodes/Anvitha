import { useState } from "react";
import { easeInOut, motion } from "framer-motion";
import {
	Crown,
	Shield,
	Users,
	Star,
	Briefcase,
	ChevronDown,
	ChevronUp,
	Send,
} from "lucide-react";
import ProfileCard from "@/components/ui/profileCard";
import shilpa from "@/assets/dr_shilpa_chaoudhary.webp";
import smriti from "@/assets/dr_smriti_sachan.webp";
import rishabh from "@/assets/mr_rishabh_yadav.webp";
import { Members } from "@/assets/Members";
import ExecutiveMemberCard from "@/components/ui/executive";

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
		email: "ec23081@glbitm.ac.in",
		icon: Shield,
		description: "Supporting leadership and strategic initiatives",
		color: "electric-blue",
	},
	{
		role: "Secretary",
		name: "Shriman Nivas",
		email: "shrimandeonlyone@gmail.com",
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

	const [isActive, setIsActive] = useState({
		Technical: { active: false },
		Management: { active: false },
		DAM: { active: false },
		Photography: { active: false },
		Editorial: { active: false },
	});

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
					<h1 className="text-2xl sm:text-4xl md:text-5xl font-bold font-orbitron relative">
						<div className="absolute h-0.5 w-full bg-gradient-to-r from-electric-blue to-transparent bottom-0"></div>
						Faculty Co-Ordinators
					</h1>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1, duration: 0.4 }}
						className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
						{faculty.map((faculty) =>(
								<ProfileCard
									name={faculty.name}
									image={faculty.image}
								/>
							)
						)}
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
					<h2 className="font-orbitron font-bold text-2xl md:text-3xl text-neon-green mb-8">
						AVENUES
					</h2>
					<motion.div
						variants={container as any}
						initial="hidden"
						animate="show"
						className="flex flex-col gap-5">
						{Object.entries(teams).map(([team, teamDetails]) => (
							<motion.div
								variants={item as any}
								key={team}
								onClick={() =>
									setIsActive((prev) => ({
										...prev,
										[team]: { active: !prev[team].active },
									}))
								}>
								<div className="group flex flex-col gap-2">
									<div className="w-full flex p-4 bg-black relative rounded-lg justify-between items-center">
										<h1 className="font-orbitron  font-bold text-xl md:text-2xl ">
											{team} {"Team"}
										</h1>
										{isActive[team]?.active === true ? (
											<ChevronUp size={30} />
										) : (
											<ChevronDown size={30} />
										)}
									</div>
									{isActive[team]?.active === true && (
										<motion.div
											initial={{ opacity: 0, y: -10 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{
												delay: 0.3,
												duration: 0.3,
												ease: easeInOut,
											}}
											className=" bg-neutral-700/60 flex flex-col relative  rounded-lg gap-5 px-5 py-3">
											<div className="absolute -z-50"></div>
											<h2 className="relative text-white text-xl md:text-3xl font-bold font-orbitron">
												Position Holders
												<div className="absolute h-0.5 w-full bg-gradient-to-r from-transparent via-sky-500 bottom-0 to-transparent"></div>
											</h2>
											<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5 items-center justify-items-center">
												{teamDetails.positionHolders.map((entity) => (
													<ProfileCard
														name={entity.name}
														role={entity.post}
														image={entity.image}
														link={entity.socials}
													/>
												))}
											</div>
											<h2 className="relative text-white text-xl md:text-2xl font-bold font-orbitron">
												Executive Members
												<div className="absolute h-0.5 bottom-0 w-full bg-gradient-to-r from-transparent via-sky-500 to-transparent"></div>
											</h2>
											<motion.div
												initial={{ opacity: 0, y: 30 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{ delay: 0.8, duration: 0.5 }}
												className={`grid sm:grid-cols-1 ${teamDetails.executiveMembers.length ==1 ? " justify-center grid-cols-1" :"md:grid-cols-2"} items-center gap-5 justify-items-center`}>
												{teamDetails.executiveMembers.map((entity) => (
													<ExecutiveMemberCard
														name={entity.name}
														link={entity.socials}
													/>
												))}
											</motion.div>
											<h2 className="relative text-white text-lg md:text-xl font-bold font-orbitron">
												Members
												<div className="absolute h-0.5 bottom-0 w-full bg-gradient-to-r from-transparent via-sky-500 to-transparent"></div>
											</h2>
											<div className="flex items-center justify-center">
												<table className=" border border-collapse bg-white [&_td]:border  [&_th]:border [&_th]:border-gray-800 [&_td]:border-gray-800 rounded-lg shadow-md border-gray-800">
													<tr className="text-black text-md md:text-lg">
														<th>Name</th>
														<th>Year</th>
														<th>Socials</th>
													</tr>
													{teamDetails.members.map((entity) => (
														<tr>
															<td className="text-md md:text-lg font-bold text-neutral-800 px-2 sm:px-4 py-1 sm:py-2">
																{entity.name}
															</td>
															<td className="text-neutral-600 px-1 sm:px-2">
																{entity.year}
															</td>
															<td className="px-2 sm:px-4 py-1 sm:py-2">
																<a
																	href={entity.socials}
																	className="bg-blue-600 px-4 py-2 text-white font-bold rounded-3xl hover:scale-110">
																	Connect
																</a>
															</td>
														</tr>
													))}
												</table>
											</div>
										</motion.div>
									)}
								</div>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
};
