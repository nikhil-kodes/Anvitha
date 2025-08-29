import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Home, Zap } from "lucide-react";

const NotFound = () => {
	const location = useLocation();

	useEffect(() => {
		console.error(
			"404 Error: User attempted to access non-existent route:",
			location.pathname,
		);
	}, [location.pathname]);

	return (
		<div className="min-h-screen flex items-center justify-center px-4">
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="text-center max-w-2xl mx-auto">
				<div className="holo-card p-12">
					{/* 404 Icon */}
					<motion.div
						initial={{ scale: 0.8 }}
						animate={{ scale: 1 }}
						transition={{ duration: 1, ease: "easeOut" }}
						className="mb-8">
						<div className="w-24 h-24 bg-cyber-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
							<AlertTriangle className="w-12 h-12 text-cyber-green" />
						</div>

						<h1 className="font-orbitron font-black text-8xl text-glow mb-4 animate-neon-pulse">
							404
						</h1>
					</motion.div>

					{/* Error Message */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.8 }}
						className="mb-8">
						<h2 className="font-orbitron font-bold text-2xl text-neon-green mb-4">
							CIRCUIT NOT FOUND
						</h2>
						<p className="text-glow-green/80 font-exo text-lg leading-relaxed">
							The path{" "}
							<code className="bg-dark-panel px-2 py-1 rounded text-cyber-green">
								{location.pathname}
							</code>{" "}
							doesn't exist in our system. The connection has been lost in the
							digital void.
						</p>
					</motion.div>

					{/* Navigation Options */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6, duration: 0.6 }}
						className="space-y-4">
						<Link
							to="/"
							className="btn-cyber group inline-flex items-center">
							<Home className="w-5 h-5 mr-2 group-hover:animate-pulse" />
							Return to Home Base
						</Link>

						<div className="text-glow-green/60 font-exo text-sm">
							Or navigate using the menu above
						</div>
					</motion.div>

					{/* Circuit Decoration */}
					<div className="mt-8 flex justify-center space-x-4">
						{Array.from({ length: 5 }).map((_, i) => (
							<motion.div
								key={i}
								className="w-2 h-2 bg-cyber-green/60 rounded-full"
								animate={{ opacity: [0.3, 1, 0.3] }}
								transition={{
									duration: 2,
									repeat: Infinity,
									delay: i * 0.2,
								}}
							/>
						))}
					</div>
				</div>

				{/* Background Effects */}
				<div className="absolute inset-0 overflow-hidden pointer-events-none">
					{Array.from({ length: 10 }).map((_, i) => (
						<motion.div
							key={i}
							className="absolute w-1 h-1 bg-cyber-green/40 rounded-full"
							initial={{
								x: Math.random() * window.innerWidth,
								y: Math.random() * window.innerHeight,
							}}
							animate={{
								x: Math.random() * window.innerWidth,
								y: Math.random() * window.innerHeight,
							}}
							transition={{
								duration: Math.random() * 10 + 5,
								repeat: Infinity,
								repeatType: "reverse",
							}}
						/>
					))}
				</div>
			</motion.div>
		</div>
	);
};

export default NotFound;
