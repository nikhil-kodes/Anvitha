import { motion } from "framer-motion";
import { Zap, Target, Cpu, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/anvithaLogo.png";
import hod from "@/assets/HOD.jpg";

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
		<div className="min-h-screen flex flex-col items-center justify-center px-4">
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				className="text-center max-w-4xl mx-auto">
				{/* Main Title */}
				<div className="mb-8">
					<motion.h1
						className="font-orbitron font-black text-6xl md:text-8xl text-white mb-6 animate-neon-pulse "
						initial={{ scale: 0.8 }}
						animate={{ scale: 1 }}
						transition={{ duration: 1.2, ease: "easeOut" }}>
						<img
							className="size-28 mx-auto mt-5"
							src={logo}
						/>
						<p className="mt-5">ANVITHA CLUB</p>
					</motion.h1>

					<motion.div
						className="flex items-center justify-center space-x-4 text-2xl md:text-3xl text-cyber-green font-exo font-light tracking-widest"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.5, duration: 1 }}>
						<Zap className="w-8 h-8" />
						<span>Innovation</span>
						<div className="w-2 h-2 bg-cyber-green rounded-full animate-glow-pulse" />
						<span>Legacy</span>
						<div className="w-2 h-2 bg-cyber-green rounded-full animate-glow-pulse" />
						<span>Technology</span>
						<Zap className="w-8 h-8" />
					</motion.div>
				</div>

				{/* Description */}
				<motion.p
					className="text-lg md:text-xl text-glow-green/80 mb-12 leading-relaxed font-exo max-w-2xl mx-auto"
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
					className="relative flex items-center justify-center gap-2 shadow-white shadow-[0_0_25px_rgba(255,255,255,0.2)] w-fit mx-auto my-5 px-4 py-2  bg-white text-gray-800 font-bold text-lg rounded-3xl group hover:-translate-y-1 hover:scale-105">
					Join Now
					<ArrowRight className="group-hover:translate-x-1 transition-transform" />
					<span className="absolute inset-0 rounded-3xl border-2 border-cyber-green  animate-circulate"></span>
				</motion.a>

				{/* Feature Cards */}
				<motion.div
					className="grid md:grid-cols-3 mt-10 gap-8 mb-12"
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.2, duration: 0.8 }}>
					<div className="bg-neutral-900 border shadow-[0_0_25px_rgba(255,255,255,0.2)]  p-6 group hover:scale-105 transition-transform duration-300">
						<Target className="w-12 h-12 text-cyber-green mx-auto mb-4 group-hover:animate-spin" />
						<h3 className="font-orbitron font-bold text-xl text-neon-green mb-2">
							Innovation Hub
						</h3>
						<p className="text-glow-green/70 font-exo">
							Fostering creativity and breakthrough solutions in electronics
						</p>
					</div>

					<div className="bg-neutral-900 border shadow-[0_0_25px_rgba(255,255,255,0.2)] p-6 group hover:scale-105 transition-transform duration-300">
						<Cpu className="w-12 h-12 text-electric-blue mx-auto mb-4 group-hover:animate-pulse" />
						<h3 className="font-orbitron font-bold text-xl text-neon-green mb-2">
							Technical Excellence
						</h3>
						<p className="text-glow-green/70 font-exo">
							Building next-generation electronic systems and circuits
						</p>
					</div>

					<div className="bg-neutral-900 border shadow-[0_0_25px_rgba(255,255,255,0.2)] p-6 group hover:scale-105 transition-transform duration-300">
						<Zap className="w-12 h-12 text-cyber-green mx-auto mb-4 group-hover:animate-bounce" />
						<h3 className="font-orbitron font-bold text-xl text-neon-green mb-2">
							Future Ready
						</h3>
						<p className="text-glow-green/70 font-exo">
							Preparing engineers for tomorrow's technological challenges
						</p>
					</div>
				</motion.div>

				{/* CTA Buttons */}
				<motion.div
					className="flex flex-col sm:flex-row gap-6 items-center justify-center"
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 1.5, duration: 0.6 }}>
					<Link
						to="/events"
						className="btn-cyber group">
						<span className="flex items-center space-x-2">
							<span>Explore Events</span>
							<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
						</span>
					</Link>

					<Link
						to="/submit-ideas"
						className="btn-cyber group">
						<span className="flex items-center space-x-2">
							<span>Submit Your Ideas</span>
							<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
						</span>
					</Link>
				</motion.div>

				{/* Stats Section */}
				<motion.div
					className="my-20 font-orbitron"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 2, duration: 0.8 }}>
					<div className="flex items-center gap-5 flex-col w-full">
						<h1 className="relative text-white  text-7xl w-full font-bold">
							Know Your Club!!
							<div className="absolute bottom-0 h-1 w-full bg-gradient-to-r from-transparent via-electric-blue to-transparent"></div>
						</h1>
						<div>
							<p className="text-left">
								THE NAME IMPLIES A SENSE OF HARMONY AND UNIFICATION, SUGGESTING
								THAT THE INDIVIDUAL MAY POSSESS QUALITIES OF BRINGING PEOPLE
								TOGETHER, FOSTERING UNDERSTANDING, AND BUILDING BRIDGES OF
								COMMUNICATION AND COOPERATION.
							</p>
							<div className="relative max-w-sm mx-auto my-10">
								<div className="absolute h-full w-1 bg-gradient-to-b from-cyber-green/60 to-white/60 left-1/2 transform -translate-x-1/2 top-0"></div>
								{anvitha.map((letter, index) => (
									<motion.div
										initial={{ scale: 0, opacity: 0 }}
										animate={{ scale: 1, opacity: 1 }}
										transition={{ delay: 0.2 * index + 0.3, duration: 0.5 }}
										className={`relative flex items-center gap-4 ${
											letter.side == "left" ? "justify-start" : "justify-end"
										}`}>
										<div className="absolute rounded-full size-4 bg-cyber-green left-1/2 transform -translate-x-1/2 ">
											<div className="absolute inset-0 bg-cyber-green rounded-full animate-ping" />
										</div>
										<div className="absolute w-1/2 h-[1px] bg-white -z-10"></div>
										<div className="bg-white border-4  flex flex-col items-center justify-center border-neon-green p-2 size-28 rounded-lg hover:shadow-[0_0_10px_cyber-green] hover:shadow-cyber-green">
											<h3 className="text-4xl text-cyber-green font-bold font-orbitron">
												{letter.initial}
											</h3>
											<h5 className="font-medium text-md text-black">
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
					className="my-10 flex flex-col gap-5">
					<h1 className="relative text-6xl flex font-bold text-white font-orbitron">
						<div className="absolute h-1 rounded-lg w-full bg-gradient-to-r from-electric-blue to-transparent bottom-0"></div>
						Head of the Department
					</h1>
					<div className="flex gap-8 justify-between">
						<img
							src={hod}
							className="border-4 h-60 border-neon-green shadow-[0_0_10px_#39FF14] rounded-xl "
						></img>
						<p className="text-start">
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
