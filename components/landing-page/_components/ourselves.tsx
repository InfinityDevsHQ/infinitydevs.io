import Card from "$/components/card";
import Image from "next/image";
export default function AboutUs() {
	return (
		<div className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-10 max-w-screen-2xl mx-auto xl:px-20">
			<Card
				icon={
					<Image
						src={"/cards-images/arrow.png"}
						width={164}
						height={164}
						alt="Scope"
						className="w-20 h-20 lg:w-40 lg:h-40"
					/>
				}
				title="Our Mission"
				className={"bg-purple-900/20"}
			>
				Our vision at Infinity Devs is to continuously innovate and push the
				boundaries in software, design, and AI solutions to create endless
				possibilities.
			</Card>

			<Card
				icon={
					<Image
						src={"/cards-images/scope.png"}
						width={164}
						height={164}
						alt="Scope"
						className="w-20 h-20 lg:w-40 lg:h-40"
					/>
				}
				title="Our Vision"
				className={" bg-slate-800/80"}
			>
				Our vision at Infinity Devs is to continuously innovate and push the
				boundaries in software, design, and AI solutions to create endless
				possibilities.
			</Card>

			<Card
				icon={
					<Image
						src={"/cards-images/settings.png"}
						width={164}
						height={164}
						alt="Settings"
						className="w-20 h-20 lg:w-40 lg:h-40"
					/>
				}
				title="Our Strategy"
				className={"bg-purple-900/20"}
			>
				Our strategy at Infinity Devs centers around collaboration, effective
				communication, and ongoing learning to ensure we stay at the forefront
				of digital trends and technologies.
			</Card>
		</div>
	);
}
