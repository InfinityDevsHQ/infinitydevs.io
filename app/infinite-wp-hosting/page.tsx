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
	"Smart WordPress Auto Updates",
	"WordPress Vulnerabilities Scanner",
	"AI Website Builder",
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
	"Powerful Control Panel",
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
					<div className="col-span-1 grid grid-cols-3">
						{keyFeatures.map((keyFeature, index) => (
							<div
								key={index}
								className="p-3 rounded-lg flex items-start space-x-4"
							>
								<div className="bg-gray-800 p-2 rounded-lg">
									<keyFeature.icon
										className="text-blue-400"
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

					<div className="col-span-2 flex flex-col p-6 rounded-3xl border border-purple-400/30 bg-purple-900/20 text-left">
						<div className="flex flex-row items-center justify-between mb-4">
							<Heading
								size="h4"
								className="uppercase font-bold text-center"
							>
								🌟 Managed WordPress Hosting – Feature-Packed & Affordable! 🌟
							</Heading>
							<Button
								onClick={openWhatsApp}
								className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-all"
							>
								Get Yours Now
							</Button>
						</div>
						<div className="grid grid-cols-4 gap-1 gap-x-5 mt-3 text-left">
							{features.map((feature, index) => (
								<div
									key={index}
									className="flex items-center space-x-2 text-gray-300"
								>
									<CheckIcon
										className="text-green-400"
										size={18}
									/>
									<span>{feature}</span>
								</div>
							))}
							<div>
								<h4 className="text-7xl font-bold">$19</h4>
								<p className="text-sm font-medium text-muted-foreground">
									Billed Monthly
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
