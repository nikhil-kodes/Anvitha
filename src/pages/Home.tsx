import { motion } from "framer-motion";
import { Zap, Target, Cpu, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/anvithaLogo.webp";
import hod from "@/assets/HOD.webp";

export const Home = () => {
	const anvitha = [
		{
			initial: "A",
			meaning: "Aspiring",
			side: "left",
		},
		{
			initial: "N",
			meaning: "Noble",
			side: "right",
		},
		{
			initial: "V",
			meaning: "Visualist",
			side: "left",
		},
		{
			initial: "I",
			meaning: "Ingenuity",
			side: "right",
		},
		{
			initial: "T",
			meaning: "Tenacity",
			side: "left",
		},
		{
			initial: "H",
			meaning: "Hardware",
			side: "right",
		},
		{
			initial: "A",
			meaning: "Ambitious",
			side: "left",
		},
	];

	return (
		<div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				className="text-center max-w-4xl mx-auto">
				{/* Main Title */}
				<div className="mb-6 sm:mb-8">
					<motion.h1
						className="font-orbitron font-black text-3xl sm:text-4xl md:text-6xl lg:text-8xl text-white mb-4 sm:mb-6 animate-navy-pulse"
						initial={{ scale: 0.8 }}
						animate={{ scale: 1 }}
						transition={{ duration: 1.2, ease: "easeOut" }}>
						<img
							className="size-16 sm:size-20 md:size-28 mx-auto mt-3 sm:mt-5"
							src={logo}
							alt="Anvitha Club Logo"
						/>
						<p className="mt-3 sm:mt-5">ANVITHA CLUB</p>
					</motion.h1>

					<motion.div
						className="flex flex-col sm:flex-row items-center justify-center sm:space-x-2 md:space-x-4 text-sm sm:text-lg md:text-2xl lg:text-3xl text-cyber-green font-exo font-light tracking-wide sm:tracking-widest space-y-2 sm:space-y-0"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.5, duration: 1 }}>
						<div className="flex items-center space-x-2">
							<Zap className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
							<span>Innovation</span>
						</div>
						<div className="hidden sm:block w-2 h-2 bg-cyber-green rounded-full animate-glow-pulse" />
						<span>Legacy</span>
						<div className="hidden sm:block w-2 h-2 bg-cyber-green rounded-full animate-glow-pulse" />
						<div className="flex items-center space-x-2">
							<span>Technology</span>
							<Zap className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
						</div>
					</motion.div>
				</div>

				{/* Description */}
				<motion.p
					className="text-sm sm:text-base md:text-lg lg:text-xl text-glow-green/80 mb-8 sm:mb-12 leading-relaxed font-exo max-w-2xl mx-auto px-4 sm:px-0"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1, duration: 0.8 }}>
					Welcome to the official Electronics and Communication Engineering
					club. Where innovation meets legacy, and technology shapes the future.
					Join us in our mission to push the boundaries of electronic
					excellence.
				</motion.p>

				<motion.a
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1, duration: 0.8 }}
					href="https://chat.whatsapp.com/H3va0uNavmOL0XI1t807uR"
					target="_blank"
					className="relative flex items-center justify-center gap-2 shadow-white shadow-[0_0_25px_rgba(255,255,255,0.2)] w-fit mx-auto my-5 px-4 sm:px-6 py-2 sm:py-3 bg-white text-gray-800 font-bold text-sm sm:text-base md:text-lg rounded-3xl group hover:-translate-y-1 hover:scale-105 transition-all duration-300">
					Join Now
					<ArrowRight className="group-hover:translate-x-1 transition-transform w-4 h-4 sm:w-5 sm:h-5" />
					<span className="absolute inset-0 rounded-3xl border-2 border-cyber-green animate-circulate"></span>
				</motion.a>

				{/* Feature Cards */}
				<motion.div
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 sm:mt-10 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 px-4 sm:px-0"
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.2, duration: 0.8 }}>
					<div className="bg-neutral-900 border shadow-[0_0_25px_rgba(255,255,255,0.2)] p-4 sm:p-6 group hover:scale-105 transition-transform duration-300 rounded-lg">
						<Target className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-cyber-green mx-auto mb-3 sm:mb-4 group-hover:animate-spin" />
						<h3 className="font-orbitron font-bold text-lg sm:text-xl text-neon-green mb-2">
							Innovation Hub
						</h3>
						<p className="text-glow-green/70 font-exo text-sm sm:text-base">
							Fostering creativity and breakthrough solutions in electronics
						</p>
					</div>

					<div className="bg-neutral-900 border shadow-[0_0_25px_rgba(255,255,255,0.2)] p-4 sm:p-6 group hover:scale-105 transition-transform duration-300 rounded-lg">
						<Cpu className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-electric-blue mx-auto mb-3 sm:mb-4 group-hover:animate-pulse" />
						<h3 className="font-orbitron font-bold text-lg sm:text-xl text-neon-green mb-2">
							Technical Excellence
						</h3>
						<p className="text-glow-green/70 font-exo text-sm sm:text-base">
							Building next-generation electronic systems and circuits
						</p>
					</div>

					<div className="bg-neutral-900 border shadow-[0_0_25px_rgba(255,255,255,0.2)] p-4 sm:p-6 group hover:scale-105 transition-transform duration-300 rounded-lg sm:col-span-2 lg:col-span-1">
						<Zap className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-cyber-green mx-auto mb-3 sm:mb-4 group-hover:animate-bounce" />
						<h3 className="font-orbitron font-bold text-lg sm:text-xl text-neon-green mb-2">
							Future Ready
						</h3>
						<p className="text-glow-green/70 font-exo text-sm sm:text-base">
							Preparing engineers for tomorrow's technological challenges
						</p>
					</div>
				</motion.div>

				{/* CTA Buttons */}
				<motion.div
					className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center px-4 sm:px-0"
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 1.5, duration: 0.6 }}>
					<Link
						to="/events"
						className="btn-cyber group w-full sm:w-auto">
						<span className="flex items-center justify-center space-x-2 text-sm sm:text-base">
							<span>Explore Events</span>
							<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
						</span>
					</Link>

					<Link
						to="/submit-ideas"
						className="btn-cyber group w-full sm:w-auto">
						<span className="flex items-center justify-center space-x-2 text-sm sm:text-base">
							<span>Submit Your Ideas</span>
							<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
						</span>
					</Link>
				</motion.div>

				{/* Stats Section */}
				<motion.div
					className="my-12 sm:my-16 md:my-20 font-orbitron px-4 sm:px-0"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 2, duration: 0.8 }}>
					<div className="flex items-center gap-5 flex-col w-full">
						<h1 className="relative text-white text-2xl sm:text-3xl md:text-5xl lg:text-7xl w-full font-bold text-center">
							Know Your Club!!
							<div className="absolute bottom-0 h-0.5 sm:h-1 w-full bg-gradient-to-r from-transparent via-electric-blue to-transparent"></div>
						</h1>
						<div className="w-full">
							<p className="text-center text-xs sm:text-sm md:text-base leading-relaxed text-glow-green/80 max-w-4xl mx-auto">
								THE NAME IMPLIES A SENSE OF HARMONY AND UNIFICATION, SUGGESTING
								THAT THE INDIVIDUAL MAY POSSESS QUALITIES OF BRINGING PEOPLE
								TOGETHER, FOSTERING UNDERSTANDING, AND BUILDING BRIDGES OF
								COMMUNICATION AND COOPERATION.
							</p>
							<div className="relative max-w-xs sm:max-w-sm md:max-w-md mx-auto my-6 sm:my-8 md:my-10">
								<div className="absolute h-full w-0.5 sm:w-1 bg-gradient-to-b from-cyber-green/60 to-white/60 left-1/2 transform -translate-x-1/2 top-0"></div>
								{anvitha.map((letter, index) => (
									<motion.div
										key={index}
										initial={{ scale: 0, opacity: 0 }}
										animate={{ scale: 1, opacity: 1 }}
										transition={{ delay: 0.2 * index + 0.3, duration: 0.5 }}
										className={`relative flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6 ${
											letter.side == "left" ? "justify-start" : "justify-end"
										}`}>
										<div className="absolute rounded-full size-3 sm:size-4 bg-cyber-green left-1/2 transform -translate-x-1/2 z-10">
											<div className="absolute inset-0 bg-cyber-green rounded-full animate-ping" />
										</div>
										<div className="absolute w-1/2 h-[1px] bg-white -z-10"></div>
										<div className="bg-white border-2 sm:border-4 flex flex-col items-center justify-center border-neon-green p-1.5 sm:p-2 size-16 sm:size-20 md:size-28 rounded-lg hover:shadow-[0_0_10px_#39FF14] transition-all duration-300">
											<h3 className="text-lg sm:text-2xl md:text-4xl text-cyber-green font-bold font-orbitron">
												{letter.initial}
											</h3>
											<h5 className="font-medium text-[10px] sm:text-xs md:text-sm text-black text-center">
												{letter.meaning}
											</h5>
										</div>
									</motion.div>
								))}
							</div>
						</div>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 2, duration: 1 }}
					className="my-8 sm:my-10 md:my-12 flex flex-col gap-5 px-4 sm:px-0">
					<h1 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white font-orbitron text-center">
						<div className="absolute h-0.5 sm:h-1 rounded-lg w-full bg-gradient-to-r from-electric-blue to-transparent bottom-0"></div>
						Head of the Department
					</h1>
					<div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-center lg:items-start justify-center">
						<img
							src={hod}
							alt="Head of Department"
							className="border-2 sm:border-4 h-48 sm:h-56 md:h-60 lg:h-72 w-auto border-neon-green shadow-[0_0_10px_#39FF14] rounded-xl flex-shrink-0"
						/>
						<p className="text-xs sm:text-sm md:text-base text-glow-green/80 leading-relaxed text-justify lg:text-left max-w-2xl">
							He has received Bachelor of Engineering degree in Electronics and
							Communication Engineering from IEI Calcutta, India, Masters of
							Engineering with specialization in VLSI Design from UPTU Lucknow
							and Ph.D. from NIT Kurukshetra. He has served 17 years in Indian
							Air Force for installation, operation & maintenance of various
							radars and communication's equipment. His aim in life is ‘Work is
							Worship’. He has authored 41 research papers in reputed journals.
							He has held several administrative and academic positions during
							42 years of experience. His current research interests include
							network planning, designing and optimization of cellular networks.
							He is a member of ISTE and AMIE.
						</p>
					</div>
				</motion.div>
			</motion.div>
		</div>
	);
};
