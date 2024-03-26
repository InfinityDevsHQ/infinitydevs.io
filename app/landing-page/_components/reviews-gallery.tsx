import Review from "./review";
export default function ReviewsGallery() {
  return (
    <div className="flex items-center justify-center">
      <div className="lg:grid lg:grid-cols-4 gap-4">
        <div className="flex flex-col gap-4">
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
        <div className="flex flex-col gap-4">
          <Review
            imageUrl="/client.jpg"
            name="John Doe"
            review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum odit id
          totam odio blanditiis temporibus mtore! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
          deleniti eveniet consequatur eos quo velit nostrum, impedit voluptatem
          fuga at temporibus harum voluptatum sint repellendus repellat.
          Exercitationem eius ex possimus."
          />
          <Review
            imageUrl="/client.jpg"
            name="John Doe"
            review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum odit id
          totam odio blanditiis temporibus molli!"
          />
        </div>
        <div className="flex flex-col gap-4">
          <Review
            imageUrl="/client.jpg"
            name="John Doe"
            review="Lorem ipsum dolor sit amum sint repellendus repellat.
          Exercitationem eius ex possimus."
          />
          <Review
            imageUrl="/client.jpg"
            name="John Doe"
            review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum odit id
          totam odio blanditiis po molli!"
          />
          <Review
            imageUrl="/client.jpg"
            name="John Doe"
            review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum odit id
          totam odio blanditiis temporibus molli!"
          />
        </div>
        <div className="flex flex-col gap-4">
          <Review
            imageUrl="/client.jpg"
            name="John Doe"
            review="Lorem ipsum dolor sit  sint repellendus repellat."
          />
          <Review
            imageUrl="/client.jpg"
            name="John Doe"
            review="Lorem ipsum dolor sit amet consectetur adipisicing"
          />
          <Review
            imageUrl="/client.jpg"
            name="John Doe"
            review="Lorem ipsuiis temporibus molli!"
          />
          <Review
            imageUrl="/client.jpg"
            name="John Doe"
            review="Lorem ipsuiis temporibus molli!"
          />
        </div>
      </div>
    </div>
  );
}
