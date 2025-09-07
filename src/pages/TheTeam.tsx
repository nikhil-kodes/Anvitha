import { useState, useEffect, useRef } from "react";
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
import akshat from "@/assets/akshat.webp";
import shriman from "@/assets/shriman.webp";
import tanya from "@/assets/tanya.webp";
import asmit from "@/assets/asmit.webp";
import Positioncard from "@/components/ui/positioncard";

const positions = [
	{
		role: "President",
		name: "Akshat Jain",
		mail: "akshat2017jain@gmail.com",
		icon: <Crown />,
		description: "Leading the club with vision and innovation",
		image: akshat,
	},
	{
		role: "Vice President",
		name: "Asmit Singh",
		mail: "ec23081@glbitm.ac.in",
		icon: <Shield />,
		description: "Supporting leadership and strategic initiatives",
		image: asmit,
	},
	{
		role: "Secretary",
		name: "Shriman Nivas",
		mail: "shrimandeonlyone@gmail.com",
		icon: <Briefcase />,
		description: "Managing administrative operations and documentation",
		image: shriman,
	},
	{
		role: "Joint Secretary",
		name: "Tanya Goel",
		mail: "tannuagarwal903@gmail.com",
		icon: <Users />,
		description: "Coordinating member activities and communications",
		image: tanya,
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
		PR: { active: false },
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
					className="text-center mb-8 md:mb-16 px-4">
					<h1 className="font-orbitron font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-glow mb-4 md:mb-6 text-neon-cyan">
						The Team
					</h1>
					<p className="text-base sm:text-lg md:text-xl text-neutral-300 font-exo max-w-2xl mx-auto px-4">
						Meet the brilliant minds leading Anvitha ECE Club into the future of
						technology
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3, duration: 0.8 }}
					className="flex flex-col gap-5 my-10">
					<h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-orbitron relative">
						<div className="absolute h-0.5 w-full bg-gradient-to-r from-electric-blue to-transparent bottom-0"></div>
						Faculty Co-Ordinators
					</h1>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1, duration: 0.4 }}
						className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
						{faculty.map((faculty, index) => (
							<ProfileCard
								key={index}
								name={faculty.name}
								image={faculty.image}
							/>
						))}
					</motion.div>
				</motion.div>

				<h1 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-orbitron mb-5 px-4">
					Club Officials
					<div className="absolute h-0.5 w-full bg-gradient-to-r from-electric-blue to-transparent bottom-0"></div>
				</h1>
				{/* Position Cards Grid */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.1, duration: 0.8 }}
					className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 px-4">
					{positions.map((position, index) => {
						const Icon = position.icon;

						return (
							<motion.div
								key={position.role}
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 0.1 * index, duration: 0.6 }}
								className="">
								{/* Background Glow */}
								<Positioncard {...position} />
							</motion.div>
						);
					})}
				</motion.div>
				<h2 className="font-orbitron mt-10 mb-5 font-bold text-xl sm:text-2xl md:text-3xl text-white relative px-4">
					AVENUES
					<div className="absolute h-0.5 w-full bg-gradient-to-r from-electric-blue to-transparent bottom-0"></div>
				</h2>
				{/* Executive Team Section */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.8, duration: 0.8 }}
					className="text-center px-4">
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
									<div className="w-full flex p-3 sm:p-4 bg-slate-50 relative rounded-lg justify-between items-center cursor-scale">
										<div>
											<h1 className="font-orbitron text-left font-bold text-gray-900 text-lg sm:text-xl md:text-2xl">
												{team} {"Team"}
											</h1>
											<p className="text-sm text-neutral-600">
												{teamDetails.description}
											</p>
										</div>
										{isActive[team]?.active === true ? (
											<ChevronUp
												size={24}
												className="sm:w-[40px] sm:h-[40px] text-gray-900"
											/>
										) : (
											<ChevronDown
												size={24}
												className="sm:w-[40px] sm:h-[40px] text-gray-900 "
											/>
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
											className=" bg-neutral-700/30 flex flex-col relative backdrop-blur-sm rounded-lg gap-5 px-5 py-3">
											<div className="absolute -z-50"></div>
											<h2 className="relative text-white text-base sm:text-lg md:text-xl lg:text-3xl font-bold font-orbitron">
												Position Holders
												<div className="absolute h-0.5 w-full bg-gradient-to-r from-transparent via-sky-500 bottom-0 to-transparent"></div>
											</h2>
											<motion.div
												initial={{ opacity: 0, y: 30 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{ delay: 0.8, duration: 0.5 }}
												className={`grid grid-cols-1 items-center ${
													teamDetails.positionHolders.length == 1
														? " justify-center grid-cols-1"
														: "lg:grid-cols-2 gap-5 justify-items-center justify-center"
												} items-center gap-5 justify-items-center`}>
												{teamDetails.positionHolders.map((entity) => (
													<ProfileCard
														name={entity.name}
														role={entity.post}
														image={entity.image}
														link={entity.socials}
													/>
												))}
											</motion.div>
											{teamDetails.executiveMembers != null && (
												<>
													<h2 className="relative text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold font-orbitron">
														Executive Members
														<div className="absolute h-0.5 bottom-0 w-full bg-gradient-to-r from-transparent via-sky-500 to-transparent"></div>
													</h2>

													<motion.div
														initial={{ opacity: 0, y: 30 }}
														animate={{ opacity: 1, y: 0 }}
														transition={{ delay: 0.8, duration: 0.5 }}
														className={`grid sm:grid-cols-1 ${
															teamDetails.executiveMembers.length == 1
																? " justify-center grid-cols-1"
																: "md:grid-cols-2 justify-items-center justify-center"
														} items-center gap-5 justify-items-center`}>
														{teamDetails.executiveMembers.map((entity) => (
															<ExecutiveMemberCard
																name={entity.name}
																link={entity.socials}
															/>
														))}
													</motion.div>
												</>
											)}
											<h2 className="relative text-white text-base sm:text-lg md:text-xl font-bold font-orbitron">
												Members
												<div className="absolute h-0.5 bottom-0 w-full bg-gradient-to-r from-transparent via-sky-500 to-transparent"></div>
											</h2>
											<div className="flex items-center justify-center ">
												<table className="min-w-full border border-collapse bg-white [&_td]:border [&_th]:border [&_th]:border-gray-800 [&_td]:border-gray-800 rounded-lg shadow-md border-gray-800">
													<tr className="text-black text-xs sm:text-base md:text-lg">
														<th className="px-2 sm:px-4 py-2">Name</th>
														<th className="px-2 sm:px-4 py-2">Year</th>
														<th className="px-2 sm:px-4 py-2">Socials</th>
													</tr>
													{teamDetails.members.map((entity) => (
														<tr key={entity.name}>
															<td className="text-[0.5rem] sm:text-base md:text-lg font-bold text-neutral-800 px-2 sm:px-4 py-1 sm:py-2 tracking-tighter leading-tight">
																{entity.name}
															</td>
															<td className="text-neutral-600 px-1 sm:px-2 text-[0.5rem] sm:text-sm">
																{entity.year}
															</td>
															<td className="px-2 sm:px-4 py-1 sm:py-2">
																{entity.socials != "" && (
																	<a
																		href={entity.socials}
																		className="bg-blue-600 px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm text-white font-bold rounded-3xl hover:scale-110 inline-block">
																		Connect
																	</a>
																)}
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
