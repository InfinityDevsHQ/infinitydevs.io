import Review from "./review";
export default function ReviewsGallery() {
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
  return (
    // <div className="flex items-center justify-center black-fade">
    //   <div className="grid lg:grid-cols-4 gap-4">
    //     <div className="flex flex-col gap-4">
    //       <Review
    //         imageUrl="/user.png"
    //         name="tylerjjankowski"
    //         review="Very clean and professional website built in Next.js. Was built and delivered quickly with the occasional updates on the progress. Any requests for changes or updates was made and made quickly. Would definitely use again in the future for anything React related."
    //       />
    //     </div>
    //     <div className="flex flex-col gap-4">
    //       <Review
    //         imageUrl="/user.png"
    //         name="voguetyre"
    //         review="Exceptional work, on time and at a very reasonable price. I would highly recommend to anyone."
    //       />
    //       <Review
    //         imageUrl="/user.png"
    //         name="johnmctighe"
    //         review="Great communication, I highly recommend working with them, tremendously talented and should be at the top of your list when it comes to web development!"
    //       />
    //     </div>
    //     <div className="flex flex-col gap-4">
    //       <Review
    //         imageUrl="/user.png"
    //         name="wintermeyer"
    //         review="Outstanding work. They worked fast and were happy to fix problems in a revision which I initially didn't communicated. I am a very happy customer."
    //       />
    //       <Review
    //         imageUrl="/user.png"
    //         name="idanvelleman"
    //         review="Very responsive and the quality of the work is excellent."
    //       />
    //     </div>
    //     <div className="flex flex-col gap-4">
    //       <Review
    //         imageUrl="/user.png"
    //         name="brettlawson276"
    //         review="They did an amazing job on the Tailwind templates I asked them to put together. They went above and beyond in a number of ways such as adding smooth little animations and overall polish stuff that we had not even considered. Definitely going to be considering them for all future projects."
    //       />
    //     </div>
    //   </div>
    // </div>
    <div className="flex items-center justify-center black-fade">
      <div className="grid lg:grid-cols-4 gap-4">
        {ReviewData.reduce((acc, review, index) => {
          const colIndex = index % 4;
          if (!acc[colIndex]) {
            acc[colIndex] = [];
          }
          acc[colIndex].push(
            <div key={index} className="flex flex-col gap-4 mt-5">
              <Review
                imageUrl={review.imgUrl}
                name={review.clientName}
                review={review.review}
              />
            </div>
          );
          return acc;
        }, []).map((column, colIndex) => (
          <div key={colIndex}>{column}</div>
        ))}
      </div>
    </div>
  );
}
