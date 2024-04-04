import Review from "./review";
const DUMMYDATA = [
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
];
export default function ReviewsGallery() {
  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-4 grid-rows-auto gap-4 items-start">
        {DUMMYDATA.map((review, index) => (
          <Review
            key={index}
            imageUrl={review.imgUrl}
            review={review.review}
            name={review.clientName}
            className="col-span-4 md:col-span-2 xl:col-span-1"
          />
        ))}
      </div>
    </div>
  );
}
