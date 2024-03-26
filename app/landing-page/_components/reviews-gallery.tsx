import Review from "./review";
export default function ReviewsGallery() {
  return (
    <div className="grid lg:grid-cols-4">
      <div>
        <Review
          imageUrl="/client.jpg"
          name="John Doe"
          review="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
      dignissimos a aut ea! Qui praesentium perspiciatis cumque facilis dolorum
      cupiditate reiciendis aut in, deleniti atque officia voluptatum magnam
      neque totam!"
        />
        <Review
          imageUrl="/client.jpg"
          name="John Doe"
          review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum odit id
          totam odio blanditiis temporibus mollitia sapiente dignissimos,
          reprehenderit, exercitationem dolores quo optio officia ratione
          repudiandae fuga eaque velit inventore!"
        />
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
