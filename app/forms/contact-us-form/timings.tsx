import Heading from "$/app/_components/heading";
import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import { Lock, Clock } from "lucide-react";
export default function Timings() {
  return (
    <div className="col-span-2 lg:col-span-1">
      <Heading className="uppercase font-bold mb-4">Contact Us</Heading>
      <p className="mb-4 leading-relaxed">
        If you have any questions or need any assistance after business hours
        please get in touch.
      </p>
      <div className="grid lg:grid-cols-2 mb-6 uppercase">
        <div className="flex flex-col gap-2">
          <p className="mb-2">Mail:</p>
          <p className="flex gap-3">
            <span>
              <MapPin />
            </span>
            <span className="capitalize">gujrat, punjab, pakistan.</span>
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="mb-2">Phone:</p>
          <p className="flex gap-3">
            <span>
              <Phone />
            </span>
            <span className="capitalize">+92 300 001 1234</span>
          </p>
          <p className="flex gap-3">
            <span>
              <Phone />
            </span>
            <span className="capitalize">+92 300 001 1234</span>
          </p>
        </div>
      </div>
      <p className="uppercase mb-4">business hours</p>
      <div className="flex flex-col gap-1">
        <p className="flex gap-3">
          <span>
            <Clock />
          </span>
          <span className="capitalize">
            Monday to friday:8:30am to 5:30pm [GMT]
          </span>
        </p>
        <p className="flex gap-3">
          <span>
            <Lock />
          </span>
          <span className="capitalize">Closed on weekends</span>
        </p>
      </div>
    </div>
  );
}
