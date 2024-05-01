import React from "react";
import Review from "./review";
const ReviewData = [
  {
    imgUrl: "/user.svg",
    review: `Very clean and professional website built in Next.js. Was built and delivered quickly with the occasional updates on the progress. Any requests for changes or updates was made and made quickly. Would definitely use again in the future for anything React related.`,
    clientName: "tylerjjankowski",
  },
  {
    imgUrl: "/user.svg",
    review: `Outstanding work. They worked fast and were happy to fix problems in a revision which I initially didn't communicated. I am a very happy customer.`,
    clientName: "wintermeyer",
  },
  {
    imgUrl: "/user.svg",
    review: `Great communication, I highly recommend working with them, tremendously talented and should be at the top of your list when it comes to web development!`,
    clientName: "johnmctighe",
  },
  {
    imgUrl: "/user.svg",
    review: `They did an amazing job on the Tailwind templates I asked them to put together. They went above and beyond in a number of ways such as adding smooth little animations and overall polish stuff that we had not even considered. Definitely going to be considering them for all future projects.`,
    clientName: "brettlawson276",
  },
  {
    imgUrl: "/user.svg",
    review: `Exceptional work, on time and at a very reasonable price. I would highly recommend to anyone.`,
    clientName: "voguetyre",
  },
  {
    imgUrl: "/user.svg",
    review: `Very responsive and the quality of the work is excellent.`,
    clientName: "idanvelleman",
  },
  {
    imgUrl: "/user.svg",
    review: `Great communication, I highly recommend working with them, tremendously talented and should be at the top of your list when it comes to web development!`,
    clientName: "johnmctighe",
  },
  {
    imgUrl: "/user.svg",
    review: `They did an amazing job on the Tailwind templates I asked them to put together. They went above and beyond in a number of ways such as adding smooth little animations and overall polish stuff that we had not even considered. Definitely going to be considering them for all future projects.`,
    clientName: "brettlawson276",
  },
  {
    imgUrl: "/user.svg",
    review: `Exceptional work, on time and at a very reasonable price. I would highly recommend to anyone.`,
    clientName: "voguetyre",
  },
  {
    imgUrl: "/user.svg",
    review: `Very responsive and the quality of the work is excellent.`,
    clientName: "idanvelleman",
  },
  {
    imgUrl: "/user.svg",
    review: `Great communication, I highly recommend working with them, tremendously talented and should be at the top of your list when it comes to web development!`,
    clientName: "johnmctighe",
  },
  {
    imgUrl: "/user.svg",
    review: `Exceptional work, on time and at a very reasonable price. I would highly recommend to anyone.`,
    clientName: "voguetyre",
  },
  {
    imgUrl: "/user.svg",
    review: `Very responsive and the quality of the work is excellent.`,
    clientName: "idanvelleman",
  },
  {
    imgUrl: "/user.svg",
    review: `Exceptional work, on time and at a very reasonable price. I would highly recommend to anyone.`,
    clientName: "voguetyre",
  },
  {
    imgUrl: "/user.svg",
    review: `Exceptional work, on time and at a very reasonable price. I would highly recommend to anyone.`,
    clientName: "voguetyre",
  },
  {
    imgUrl: "/user.svg",
    review: `Exceptional work, on time and at a very reasonable price. I would highly recommend to anyone.`,
    clientName: "voguetyre",
  },
  {
    imgUrl: "/user.svg",
    review: `Exceptional work, on time and at a very reasonable price. I would highly recommend to anyone.`,
    clientName: "voguetyre",
  },
  {
    imgUrl: "/user.svg",
    review: `Exceptional work, on time and at a very reasonable price. I would highly recommend to anyone.`,
    clientName: "voguetyre",
  },
  {
    imgUrl: "/user.svg",
    review: `Exceptional work, on time and at a very reasonable price. I would highly recommend to anyone.`,
    clientName: "voguetyre",
  },
];
export default function ReviewsGallery() {
  return (
    <div className="flex items-center justify-center black-fade">
      <div className="grid lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, colIndex) => (
          <div key={colIndex}>
            {ReviewData.slice(colIndex * 4, colIndex * 5 + 5).map(
              (review, index) => (
                <div key={index} className="flex flex-col gap-4 mt-5">
                  <Review
                    imageUrl={review.imgUrl}
                    name={review.clientName}
                    review={review.review}
                  />
                </div>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
