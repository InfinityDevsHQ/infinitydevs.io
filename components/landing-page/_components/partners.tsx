import Image from "next/image";
import { Fragment } from "react";

export default function Partners() {
  const Partners = [
    {
      imgUrl: "/partners/partner-1.png",
      alt: "Partner-1",
    },
    {
      imgUrl: "/partners/partner-2.png",
      alt: "Partner-2",
    },
    {
      imgUrl: "/partners/partner-3.png",
      alt: "Partner-3",
    },
    {
      imgUrl: "/partners/partner-4.png",
      alt: "Partner-4",
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
      {Partners.map((partner, index) => {
        return (
          <Fragment key={index}>
            <span>
              <Image
                src={partner.imgUrl}
                alt={partner.alt}
                width={200}
                height={200}
              />
            </span>
          </Fragment>
        );
      })}
    </div>
  );
}
