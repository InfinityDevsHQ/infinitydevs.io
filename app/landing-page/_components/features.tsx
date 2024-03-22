import FeatureCard from "./feature-card";
import { Lightbulb } from "lucide-react";
import { Code2 } from "lucide-react";
import { Globe2 } from "lucide-react";
export default function Features() {
  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <FeatureCard
        icon={<Lightbulb size={40} />}
        title="Innovative"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae magni ut
      commodi eaque impedit, molestias alias quidem maxime veniam sunt,
      veritatis minima hic, cum voluptatem. Recusandae in nulla consequatur
      consequuntur!"
      />
      <FeatureCard
        icon={<Code2 size={40} />}
        title="Marketing"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae magni ut
      commodi eaque impedit, molestias alias quidem maxime veniam sunt,
      veritatis minima hic, cum voluptatem. Recusandae in nulla consequatur
      consequuntur!"
      />
      <FeatureCard
        icon={<Globe2 size={40} />}
        title="Development"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae magni ut
      commodi eaque impedit, molestias alias quidem maxime veniam sunt,
      veritatis minima hic, cum voluptatem. Recusandae in nulla consequatur
      consequuntur!"
      />
    </div>
  );
}
