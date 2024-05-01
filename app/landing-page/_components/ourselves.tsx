import Card from "$/components/card";
import CardVission from "$/components/card-2";
import Image from "next/image";
export default function Overselves() {
  return (
    <div className="grid lg:grid-cols-3 gap-6 mb-12">
      <Card
        icon={
          <Image
            src={"/cards-images/arrow.png"}
            width={200}
            height={200}
            alt="Arrow in the bow image"
          />
        }
        title="Our Mission"
      >
        At Infinity Devs, we are dedicated to empowering individuals and
        businesses by transforming their ideas into tangible solutions with
        top-notch code.
      </Card>
      <CardVission
        icon={
          <Image
            src={"/cards-images/scope.png"}
            width={200}
            height={200}
            alt="Scope"
          />
        }
        title="Our vision"
      >
        Our vision at Infinity Devs is to continuously innovate and push the
        boundaries in software, design, and AI solutions to create endless
        possibilities.
      </CardVission>
      <Card
        icon={
          <Image
            src={"/cards-images/settings.png"}
            width={200}
            height={200}
            alt="Settings"
          />
        }
        title="Our Strategy"
      >
        Our strategy at Infinity Devs centers around collaboration, effective
        communication, and ongoing learning to ensure we stay at the forefront
        of digital trends and technologies.
      </Card>
    </div>
  );
}
