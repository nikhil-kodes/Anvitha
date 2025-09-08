import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CursorFollower() {
	const cursorRef = useRef(null);
	const [isMouseDevice, setIsMouseDevice] = useState(true);

	useEffect(() => {
		// Check if the device supports a fine pointer (like a mouse)
		const hasMouse = window.matchMedia("(pointer: fine)").matches;
		setIsMouseDevice(hasMouse);

		if (!hasMouse) return; // ✅ Skip attaching events for touch screens

		const el = cursorRef.current;
		if (!el) return;

		const moveHandler = (e) => {
			const { target, x, y } = e;
			const isTargetLinkOrBtn =
				target.closest("a") ||
				target.closest("button") ||
				target.closest(".cursor-scale");

			gsap.to(el, {
				x: x - 15,
				y: y - 15,
				duration: 0.7,
				ease: "power4",
				opacity: isTargetLinkOrBtn ? 0.6 : 1,
				scale: isTargetLinkOrBtn ? 3 : 1,
			});
		};

		const leaveHandler = () => {
			gsap.to(el, {
				duration: 0.7,
				opacity: 0,
			});
		};

		window.addEventListener("mousemove", moveHandler);
		document.addEventListener("mouseleave", leaveHandler);

		return () => {
			window.removeEventListener("mousemove", moveHandler);
			document.removeEventListener("mouseleave", leaveHandler);
		};
	}, []);

	// ✅ Don't render at all on touch devices
	if (!isMouseDevice) return null;

	return (
		<div
			ref={cursorRef}
			className="cursor-follower backdrop-invert"
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "30px",
				height: "30px",
				borderRadius: "50%",
				pointerEvents: "none",
				zIndex: 9999,
			}}
		/>
	);
}
