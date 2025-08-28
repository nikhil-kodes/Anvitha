import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GateAnimation } from "./components/GateAnimation";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { PositionHolders } from "./pages/PositionHolders";
import { HallOfFame } from "./pages/HallOfFame";
import { Events } from "./pages/Events";
import { SubmitIdeas } from "./pages/SubmitIdeas";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
	const [showGate, setShowGate] = useState(true);
	const [hasVisited, setHasVisited] = useState(false);

	useEffect(() => {
		// Check if user has visited before (for this session)
		const visited = sessionStorage.getItem("anvitha-visited");
		if (visited) {
			setShowGate(false);
			setHasVisited(true);
		}
	}, []);

	const handleGateComplete = () => {
		setShowGate(false);
		setHasVisited(true);
		sessionStorage.setItem("anvitha-visited", "true");
	};

	return (
		<QueryClientProvider client={queryClient}>
			<TooltipProvider>
				<Toaster />
				<Sonner />

				{/* Gate Animation - Only show on first visit */}
				{showGate && !hasVisited && (
					<GateAnimation onComplete={handleGateComplete} />
				)}

				{/* Main Application */}
				<BrowserRouter>
					<Layout>
						<Routes>
							<Route
								path="/"
								element={<Home />}
							/>
							<Route
								path="/positions"
								element={<PositionHolders />}
							/>
							<Route
								path="/hall-of-fame"
								element={<HallOfFame />}
							/>
							<Route
								path="/events"
								element={<Events />}
							/>
							<Route
								path="/submit-ideas"
								element={<SubmitIdeas />}
							/>
							<Route
								path="*"
								element={<NotFound />}
							/>
						</Routes>
					</Layout>
				</BrowserRouter>
			</TooltipProvider>
		</QueryClientProvider>
	);
};

export default App;
