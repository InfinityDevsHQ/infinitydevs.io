"use client";

import { Button } from "../../components/ui/button";
import {
	CloudLightningIcon,
	LockIcon,
	HeadsetIcon,
	DatabaseIcon,
	RefreshCcwIcon,
	CheckIcon,
	BarChart,
	Briefcase,
	Smartphone,
	Users,
} from "lucide-react";
import Heading from "../_components/heading";
import Card from "$/components/card";

const features: string[] = [
	"1 Website (Domain NOT included)",
	"50 GB SSD Storage",
	"Managed Hosting for WordPress",
	"AI Powered Website Builder",
	"Free automatic website migration",
	"1 Email Account",
	"Unlimited Free SSL",
	"Weekly Backups",
	"1-Click WordPress Installation",
	"1-Click Google Integration",
	"Free Pre-built Templates",
	"LiteSpeed Acceleration",
	"Drag & Drop Editor",
	"Marketing Integrations",
	"Standard DDoS Protection",
	"Malware Scanner",
	"Web Application Firewall",
	"Cloudflare Protected Nameservers",
	"Secure Access Manager",
	"200,000 Files & Directories",
	"25 PHP Workers",
	"10,000 Monthly Visits",
	"25 MySQL Max User Connections",
	"GIT Access",
	"Multiple PHP Versions",
	"DNS Management",
	"1 FTP Account",
	"Unlimited Cronjobs",
	"Cache Manager",
	"100 GB Bandwidth",
	"99.9% Uptime Guarantee",
	"Global Data Centers",
];

interface KeyFeature {
	title: string;
	description: string;
	icon: React.ElementType;
}

const keyFeatures: KeyFeature[] = [
	{
		title: "Lightning-Fast WordPress Hosting",
		description:
			"Supercharge your website with optimized speed and performance for maximum visitor engagement.",
		icon: CloudLightningIcon,
	},
	// {
	//     title: "50GB SSD Storage",
	//     description: "Ample space for all your content, media, and e-commerce products with lightning-quick data access.",
	//     icon: DatabaseIcon,
	// },
	{
		title: "Unlimited Free SSL",
		description:
			"Secure your website and build visitor trust with bank-level encryption at no extra cost.",
		icon: LockIcon,
	},
	// {
	//     title: "Automatic Website Migration",
	//     description: "Seamless transition from your current host with zero downtime and no technical hassle.",
	//     icon: RefreshCcwIcon,
	// },
	{
		title: "24/7 Expert Support",
		description:
			"Get immediate assistance from WordPress specialists whenever you need it, day or night.",
		icon: HeadsetIcon,
	},
];

export default function PricingSection(): JSX.Element {
	const openWhatsApp = () => {
		window.open("https://wa.me/923186807809", "_blank");
	};

	return (
		<div className="text-white px-8 hero-bg">
			<div className="max-w-7xl mx-auto">
				<div className="flex items-center justify-center">
					<div className="box-max-width flex flex-col gap-10">
						<Heading
							size="h2"
							className="uppercase font-bold text-center"
						>
							<span>INFINITE</span> WORDPRESS HOSTING
						</Heading>
					</div>
				</div>
				<div className="flex flex-col gap-6 mt-8">
					<div className="order-2 lg:order-1 col-span-1 grid lg:grid-cols-3">
						{keyFeatures.map((keyFeature, index) => (
							<div
								key={index}
								className="p-3 rounded-lg flex items-start space-x-4"
							>
								<div className="common-gradient p-2 rounded-lg">
									<keyFeature.icon
										className="text-white"
										size={24}
									/>
								</div>
								<div>
									<h3 className="text-lg font-semibold">{keyFeature.title}</h3>
									<p className="text-gray-400 mt-2">{keyFeature.description}</p>
								</div>
							</div>
						))}
					</div>
					<div className="order-1 lg:order-2 col-span-2 flex flex-col p-3 md:p-6 rounded-3xl border border-purple-400/30 bg-purple-900/20 text-left">
						<div className="flex flex-col md:flex-row justify-between md:gap-0 mb-4">
							<Heading
								size="h3"
								className="uppercase font-bold text-left md:pr-48 lg:pr-0"
							>
								Managed WP Hosting – Feature-Packed & Affordable!
							</Heading>
							<div className="flex flex-col gap-2">
								<div className="flex flex-row md:flex-col justify-end md:justify-normal items-end gap-2 md:gap-0 relative top-2 lg:-top-3">
								<p className="text-sm font-medium text-muted-foreground">
										only
									</p>
									<h4 className="text-2xl md:text-5xl font-bold">$35</h4>
									<p className="text-sm font-medium text-muted-foreground">
										Billed Yearly
									</p>
								</div>
							</div>
						</div>
						<div className="grid grid-cols-1 lg:grid-cols-4 gap-1 gap-x-5 mt-3 text-left">
							{features.map((feature, index) => (
								<div
									key={index}
									className="flex items-center space-x-2 text-gray-300"
								>
									<CheckIcon
										className="text-green-400"
										size={18}
									/>
									<span className="text-sm md:text-base ">{feature}</span>
								</div>
							))}
						</div>
						<div className="flex  justify-center lg:justify-end mt-5">
							<Button
								onClick={openWhatsApp}
								className="bg-green-600 uppercase hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-all"
							>
								Get Yours Now
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
