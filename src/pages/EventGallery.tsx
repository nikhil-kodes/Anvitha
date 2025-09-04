import { Folder } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const EventGallery = () => {
	const events = [
		{
			title: "Anvitha Orientation 2025-26",
		},
	];
	return (
		<div className=" p-5 bg-black h-screen bg-opacity-40 flex flex-col gap-5">
			<div>
				<h1 className="relative text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white font-orbitron">
					Anvitha Photos Gallery
					<div className="h-1 w-full absolute bottom-0 bg-gradient-to-r from-transparent via-electric-blue to-transparent"></div>
				</h1>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 justify-center justify-items-center">
				{events.map((event, index) => {
					return (
						<Link
							key={index}
              to="/gallery/orientation"
							className="border-2 border-electric-blue/50 shadow-md shadow-electric-blue/50 flex px-4 py-2 rounded-lg bg-gradient-to-br from-neutral-500 to-transparent gap-2 text-white hover:scale-105 text-xs sm:text-base md:text-md">
							{<Folder />} {event.title}
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default EventGallery;
