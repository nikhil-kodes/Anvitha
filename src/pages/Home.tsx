import { motion } from "framer-motion";
import { Zap, Target, Cpu, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Home = () => {
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
						className="font-orbitron font-black text-6xl md:text-8xl text-white mb-6 animate-neon-pulse"
						initial={{ scale: 0.8 }}
						animate={{ scale: 1 }}
						transition={{ duration: 1.2, ease: "easeOut" }}>
						ANVITHA CLUB
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

				<a
					href=""
					className="relative flex items-center justify-center gap-2 shadow-white shadow-[0_0_25px_rgba(255,255,255,0.2)] w-fit mx-auto my-5 px-4 py-2  bg-white text-gray-800 font-bold text-lg rounded-3xl group hover:-translate-y-1 hover:scale-105">
					Join Now
					<ArrowRight className="group-hover:translate-x-1 transition-transform" />
					<span className="absolute inset-0 rounded-3xl border-2 border-cyber-green  animate-circulate"></span>
				</a>

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
					className="my-20"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 2, duration: 0.8 }}>
					<div className="flex items-center gap-5 flex-col w-full">
						<h1 className="relative text-6xl w-full font-bold">
							Know the Club!!
							<div className="absolute bottom-0 h-[2px] w-full bg-gradient-to-r from-cyber-green to-transparent"></div>
						</h1>
						<div>
							<p className="text-left">
								THE NAME IMPLIES A SENSE OF HARMONY AND UNIFICATION, SUGGESTING
								THAT THE INDIVIDUAL MAY POSSESS QUALITIES OF BRINGING PEOPLE
								TOGETHER, FOSTERING UNDERSTANDING, AND BUILDING BRIDGES OF
								COMMUNICATION AND COOPERATION.
							</p>
							<div className="relative">
                <div className="absolute rounded-xl left-0 h-full w-1 bg-gradient-to-b from-cyber-green to-white"></div>
								<div className="flex ml-5 gap-2">
									<h1 className="">A</h1>
									<p>Aspiring</p>
								</div>
								<div className="flex gap-2 ml-5">
									<h1>N</h1>
									<p>Noble</p>
								</div>
								<div className="flex gap-2 ml-5">
									<h1>V</h1>
									<p>Visualist</p>
								</div>
								<div className="flex gap-2 ml-5">
									<h1>I</h1>
									<p>Ingenuity</p>
								</div>
								<div className="flex gap-2 ml-5">
									<h1>T</h1>
									<p>Tenacity</p>
								</div>
								<div className="flex gap-2 ml-5">
									<h1>H</h1>
									<p>Hardware</p>
								</div>
								<div className="flex gap-2 ml-5">
									<h1>A</h1>
									<p>Ambitious</p>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</motion.div>

			{/* Scroll Indicator
			<motion.div
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 2.5 }}>
				<div className="w-6 h-10 border-2 border-cyber-green rounded-full flex justify-center">
					<motion.div
						className="w-1 h-3 bg-cyber-green rounded-full mt-2"
						animate={{ y: [0, 12, 0] }}
						transition={{ duration: 1.5, repeat: Infinity }}
					/>
				</div>
			</motion.div> */}
		</div>
	);
};
