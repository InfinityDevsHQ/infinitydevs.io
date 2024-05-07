import FeatureCard from "./feature-card";
import { Lightbulb } from "lucide-react";
import { Code2 } from "lucide-react";
import { Globe2 } from "lucide-react";
export default function Features() {
  return (
    <div className='grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-10  xl:px-20'>
      <FeatureCard
        icon={<Lightbulb size={40} />}
        title='Innovative'
        text='We focuses on enhancing user experience through intuitive interface design and seamless navigation. 
        We aim to create visually appealing designs that captivate and engage users, ensuring a smooth and enjoyable experience.'
      />
      <FeatureCard
        icon={<Code2 size={40} />}
        title='Development'
        text='We provide comprehensive web application development services. 
        From concept to deployment, our team ensures that your web app is robust, scalable, and user-friendly, 
        meeting the highest standards of quality and performance.'
      />
      <FeatureCard
        icon={<Globe2 size={40} />}
        title='Ai Solutions'
        text='Our AI solutions harness the power of machine learning and predictive analytics to revolutionize businesses. 
        By leveraging cutting-edge technology, we provide customized AI solutions to optimize processes and drive innovation.'
      />
    </div>
  );
}
