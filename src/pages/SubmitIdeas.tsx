import { useState } from "react";
import { motion } from "framer-motion";
import {
	Lightbulb,
	Send,
	User,
	Mail,
	FileText,
	Zap,
	CheckCircle,
	AlertCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface FormData {
	name: string;
	email: string;
	ideaTitle: string;
	ideaDescription: string;
	category: string;
}

const categories = [
	"IoT & Embedded Systems",
	"Circuit Design & PCB",
	"Robotics & Automation",
	"Signal Processing",
	"Wireless Communication",
	"Power Electronics",
	"AI/ML in Electronics",
	"Sensors & Instrumentation",
	"Other",
];

export const SubmitIdeas = () => {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		ideaTitle: "",
		ideaDescription: "",
		category: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const { toast } = useToast();

	const handleInputChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (
			!formData.name ||
			!formData.email ||
			!formData.ideaTitle ||
			!formData.ideaDescription
		) {
			toast({
				title: "Validation Error",
				description: "Please fill in all required fields",
				variant: "destructive",
			});
			return;
		}

		setIsSubmitting(true);

		try {
			const { data, error } = await supabase.functions.invoke("submit-idea", {
				body: {
					name: formData.name,
					email: formData.email,
					ideaTitle: formData.ideaTitle,
					ideaDescription: formData.ideaDescription,
					category: formData.category,
				},
			});

			if (error) {
				console.error("Submission error:", error);
				throw error;
			}

			setSubmitted(true);
			toast({
				title: "Idea Submitted Successfully!",
				description:
					"Thank you for your innovative contribution to Anvitha ECE Club",
			});

			// Reset form
			setFormData({
				name: "",
				email: "",
				ideaTitle: "",
				ideaDescription: "",
				category: "",
			});
		} catch (error) {
			console.error("Error submitting idea:", error);
			toast({
				title: "Submission Failed",
				description: "Please try again or contact the club administrators",
				variant: "destructive",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	if (submitted) {
		return (
			<div className="min-h-screen flex items-center justify-center px-4">
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8 }}
					className="text-center">
					<div className="holo-card p-12 max-w-2xl mx-auto">
						<motion.div
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ delay: 0.3, duration: 0.5 }}
							className="w-24 h-24 bg-cyber-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
							<CheckCircle className="w-12 h-12 text-cyber-green" />
						</motion.div>

						<h1 className="font-orbitron font-bold text-4xl text-neon-green mb-4">
							Idea Submitted!
						</h1>

						<p className="text-glow-green/80 font-exo text-lg mb-8">
							Your innovative idea has been successfully submitted to Anvitha
							ECE Club. Our team will review it and get back to you soon.
						</p>

						<div className="space-y-4 text-left">
							<div className="flex items-center text-glow-green/70">
								<CheckCircle className="w-5 h-5 text-cyber-green mr-3" />
								<span className="font-exo">
									Idea sent to club administrators
								</span>
							</div>
							<div className="flex items-center text-glow-green/70">
								<CheckCircle className="w-5 h-5 text-cyber-green mr-3" />
								<span className="font-exo">
									Confirmation email sent to your inbox
								</span>
							</div>
							<div className="flex items-center text-glow-green/70">
								<CheckCircle className="w-5 h-5 text-cyber-green mr-3" />
								<span className="font-exo">
									You'll receive updates on implementation status
								</span>
							</div>
						</div>

						<button
							onClick={() => setSubmitted(false)}
							className="btn-cyber mt-8">
							Submit Another Idea
						</button>
					</div>
				</motion.div>
			</div>
		);
	}

	return (
		<div className="min-h-screen py-20 px-4">
			<div className="container mx-auto max-w-4xl">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16">
					<div className="flex items-center justify-center mb-6">
						<Lightbulb className="w-16 h-16 text-cyber-green animate-glow-pulse mr-4" />
						<h1 className="font-orbitron font-black text-5xl md:text-7xl text-glow animate-neon-pulse">
							SUBMIT IDEAS
						</h1>
						<Lightbulb className="w-16 h-16 text-cyber-green animate-glow-pulse ml-4" />
					</div>
					<p className="text-xl text-glow-green/80 font-exo max-w-3xl mx-auto">
						Share your innovative ECE project ideas with us. From IoT solutions
						to circuit innovations, your creativity drives our club's
						technological advancement.
					</p>
				</motion.div>

				{/* Form */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3, duration: 0.8 }}
					className="holo-card p-8">
					<form
						onSubmit={handleSubmit}
						className="space-y-8">
						{/* Personal Information */}
						<div className="space-y-6">
							<h2 className="font-orbitron font-bold text-2xl text-neon-green flex items-center">
								<User className="w-6 h-6 mr-3" />
								Personal Information
							</h2>

							<div className="grid md:grid-cols-2 gap-6">
								<div>
									<label className="block font-exo font-bold text-glow-green mb-2">
										Full Name *
									</label>
									<input
										type="text"
										name="name"
										value={formData.name}
										onChange={handleInputChange}
										className="w-full px-4 py-3 bg-dark-panel border border-cyber-green/30 rounded-lg text-glow-green font-exo focus:border-cyber-green focus:ring-2 focus:ring-cyber-green/20 transition-all duration-300"
										placeholder="Enter your full name"
										required
									/>
								</div>

								<div>
									<label className="block font-exo font-bold text-glow-green mb-2">
										Email Address *
									</label>
									<input
										type="email"
										name="email"
										value={formData.email}
										onChange={handleInputChange}
										className="w-full px-4 py-3 bg-dark-panel border border-cyber-green/30 rounded-lg text-glow-green font-exo focus:border-cyber-green focus:ring-2 focus:ring-cyber-green/20 transition-all duration-300"
										placeholder="your.email@example.com"
										required
									/>
								</div>
							</div>
						</div>

						{/* Idea Details */}
						<div className="space-y-6">
							<h2 className="font-orbitron font-bold text-2xl text-neon-green flex items-center">
								<Lightbulb className="w-6 h-6 mr-3" />
								Your Idea
							</h2>

							<div>
								<label className="block font-exo font-bold text-glow-green mb-2">
									Category
								</label>
								<select
									name="category"
									value={formData.category}
									onChange={handleInputChange}
									className="w-full px-4 py-3 bg-dark-panel border border-cyber-green/30 rounded-lg text-glow-green font-exo focus:border-cyber-green focus:ring-2 focus:ring-cyber-green/20 transition-all duration-300">
									<option value="">Select a category</option>
									{categories.map((category) => (
										<option
											key={category}
											value={category}
											className="bg-dark-panel">
											{category}
										</option>
									))}
								</select>
							</div>

							<div>
								<label className="block font-exo font-bold text-glow-green mb-2">
									Idea Title *
								</label>
								<input
									type="text"
									name="ideaTitle"
									value={formData.ideaTitle}
									onChange={handleInputChange}
									className="w-full px-4 py-3 bg-dark-panel border border-cyber-green/30 rounded-lg text-glow-green font-exo focus:border-cyber-green focus:ring-2 focus:ring-cyber-green/20 transition-all duration-300"
									placeholder="Give your idea a compelling title"
									required
								/>
							</div>

							<div>
								<label className="block font-exo font-bold text-glow-green mb-2">
									Detailed Description *
								</label>
								<textarea
									name="ideaDescription"
									value={formData.ideaDescription}
									onChange={handleInputChange}
									rows={8}
									className="w-full px-4 py-3 bg-dark-panel border border-cyber-green/30 rounded-lg text-glow-green font-exo focus:border-cyber-green focus:ring-2 focus:ring-cyber-green/20 transition-all duration-300 resize-vertical"
									placeholder="Describe your idea in detail. Include the problem it solves, how it works, required components, implementation approach, and expected outcomes. The more detailed, the better we can evaluate and potentially implement your idea."
									required
								/>
								<div className="mt-2 text-sm text-glow-green/60 font-exo">
									Minimum 100 characters. Current:{" "}
									{formData.ideaDescription.length}
								</div>
							</div>
						</div>

						{/* Submission Guidelines */}
						<div className="holo-card p-6 bg-cyber-green/5">
							<h3 className="font-orbitron font-bold text-lg text-neon-green mb-4 flex items-center">
								<FileText className="w-5 h-5 mr-3" />
								Submission Guidelines
							</h3>
							<ul className="space-y-2 text-glow-green/70 font-exo text-sm">
								<li className="flex items-start">
									<Zap className="w-4 h-4 mr-2 mt-0.5 text-cyber-green flex-shrink-0" />
									Ideas should be related to Electronics & Communication
									Engineering
								</li>
								<li className="flex items-start">
									<Zap className="w-4 h-4 mr-2 mt-0.5 text-cyber-green flex-shrink-0" />
									Include technical feasibility and resource requirements
								</li>
								<li className="flex items-start">
									<Zap className="w-4 h-4 mr-2 mt-0.5 text-cyber-green flex-shrink-0" />
									Innovative solutions addressing real-world problems are
									preferred
								</li>
								<li className="flex items-start">
									<Zap className="w-4 h-4 mr-2 mt-0.5 text-cyber-green flex-shrink-0" />
									All submissions are reviewed by our technical committee
								</li>
							</ul>
						</div>

						{/* Submit Button */}
						<div className="flex justify-center pt-6">
							<button
								type="submit"
								disabled={isSubmitting}
								className={`btn-cyber group min-w-[200px] ${
									isSubmitting ? "opacity-50 cursor-not-allowed" : ""
								}`}>
								{isSubmitting ? (
									<div className="flex items-center space-x-2">
										<div className="w-5 h-5 border-2 border-space-black border-t-transparent rounded-full animate-spin" />
										<span>Submitting...</span>
									</div>
								) : (
									<div className="flex items-center space-x-2">
										<Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
										<span>Submit Idea</span>
									</div>
								)}
							</button>
						</div>
					</form>
				</motion.div>

				{/* Additional Info */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6, duration: 0.8 }}
					className="mt-12 text-center">
					<div className="holo-card p-6 max-w-2xl mx-auto">
						<h3 className="font-orbitron font-bold text-xl text-neon-green mb-4">
							What Happens Next?
						</h3>
						<div className="grid md:grid-cols-3 gap-6 text-sm">
							<div className="text-center">
								<div className="w-8 h-8 bg-cyber-green/20 rounded-full flex items-center justify-center mx-auto mb-2">
									<span className="font-orbitron font-bold text-cyber-green">
										1
									</span>
								</div>
								<p className="text-glow-green/70 font-exo">
									Your idea is sent to our technical committee for review
								</p>
							</div>
							<div className="text-center">
								<div className="w-8 h-8 bg-cyber-green/20 rounded-full flex items-center justify-center mx-auto mb-2">
									<span className="font-orbitron font-bold text-cyber-green">
										2
									</span>
								</div>
								<p className="text-glow-green/70 font-exo">
									We evaluate feasibility and alignment with club goals
								</p>
							</div>
							<div className="text-center">
								<div className="w-8 h-8 bg-cyber-green/20 rounded-full flex items-center justify-center mx-auto mb-2">
									<span className="font-orbitron font-bold text-cyber-green">
										3
									</span>
								</div>
								<p className="text-glow-green/70 font-exo">
									Selected ideas become club projects with your involvement
								</p>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
};
