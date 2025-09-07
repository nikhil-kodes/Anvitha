import { Folder } from "lucide-react";
import orientation from "@/assets/orientation.webp";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const EventGallery = () => {
	const events = [
		{
			title: "Anvitha Orientation 2025-26",
			photo: orientation,
			description:
				"The students coming to the second year were welcomed by the Anvitha club.",
		},
	];
	return (
		<div className=" p-5 bg-black h-screen bg-opacity-40 flex flex-col relative gap-5">
			<div>
				<motion.h1
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5 , duration: 0.5 }}
					className="relative text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white font-orbitron">
					Anvitha Photos Gallery
					<div className="h-1 w-full absolute bottom-0 bg-gradient-to-r from-transparent via-electric-blue to-transparent"></div>
				</motion.h1>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 justify-center justify-items-center">
				{events.map((event, index) => {
					return (
						<Link
							key={index}
							to="/gallery/orientation"
							className="relative h-52 w-60 sm:h-72 sm:w-80 border border-neutral-500 rounded-lg hover:scale-105 transition duration-300 ">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.5 * index, duration: 0.5 }}
								className="h-full w-full">
								<img
									src={event.photo}
									className="h-full w-full object-cover rounded-lg"
								/>
								<div className="absolute h-full w-full backdrop-blur-0 rounded-lg z-10 bg-gradient-to-b from-black/80 via-transparent  to-black to-90% top-0"></div>
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.5 * index, duration: 0.5 }}
									className="absolute text-left bottom-4 left-4 items-start flex flex-col  gap-2 z-20">
									<div className="flex text-white relative text-sm sm:text-lg font-bold gap-2">
										{<Folder />} {event.title}
										<div className="h-[1px] w-full bg-neutral-400 bottom-0 absolute"></div>
									</div>
									<div className="text-[0.5rem] sm:text-sm text-neutral-400">
										{event.description}
									</div>
								</motion.div>
							</motion.div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default EventGallery;
