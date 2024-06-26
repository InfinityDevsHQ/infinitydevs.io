import Heading from "../../app/_components/heading";
import Image from "next/image";
export default function HowWeWork() {
  return (
    <section className="px-5 py-8 md:px-8 md:py-12 mx-auto work-bg bg-cover md:bg-contain flex flex-col gap-7 md:gap-10">
      <div className="flex items-center justify-center">
        <div className="box-max-width flex flex-col gap-10">
          <Heading
            size="h2"
            className="uppercase mt-10 md:mt-0 font-bold text-center"
          >
            <span>How</span> we work
          </Heading>
          {/* <p className='main-descriptions text-center'>
            At Infinity Devs, we are passionate about crafting cutting-edge
            software solutions that exceed expectations. Our dedicated team of
            experienced developers and designers collaborate seamlessly to bring
            your vision to life with exceptional precision and creativity.
            Together, we strive to create innovative web apps, MVPs, landing
            pages, and proof of concepts, driving your success with top-notch
            code quality and design expertise.
          </p> */}
        </div>
      </div>
      <div className="flex items-center justify-center w-full uppercase text-base sm:text-xl font-bold text-zinc-300 pt-10 md:pt-16">
        <div className="hidden md:grid grid-cols-3 md:h-[750px] lg:h-auto box-max-width items-start justify-items-center">
          <div className="flex flex-col self-start text-right">
            <h2 className="mt-10">1. Requirement Gathering</h2>
            <br />
            <h2 className="mt-60">3. Prototyping</h2>
            <br />
            <h2 className="mt-56">5. Testing</h2>
          </div>
          <div className="flex flex-col gap-12">
            <Image src={"/work/icon-1.svg"} alt="Icon" width={90} height={90} />
            <Image src={"/work/icon-2.svg"} alt="Icon" width={90} height={90} />
            <Image src={"/work/icon-3.svg"} alt="Icon" width={90} height={90} />
            <Image src={"/work/icon-4.svg"} alt="Icon" width={90} height={90} />
            <Image src={"/work/icon-5.svg"} alt="Icon" width={90} height={90} />
            <Image src={"/work/icon-6.svg"} alt="Icon" width={90} height={90} />
          </div>
          <div className="flex flex-col">
            <h2 className="mt-48">2. Brain Storming</h2>
            <h2 className="mt-64">4. Development</h2>
            <h2 className="mt-64">6. Deliver to the client</h2>
          </div>
        </div>
        <div className="flex md:hidden flex-col h-[550px] gap-12 max-width-[900px] work-bg-phone">
          <div className="flex justify-between gap-4 items-center sm:gap-10">
            <h3>1. Requirement Gathering</h3>
            <Image src={"/work/icon-1.png"} alt="Icon" width={48} height={48} />
          </div>
          <div className="flex justify-between items-center sm:gap-10">
            <Image src={"/work/icon-2.png"} alt="Icon" width={48} height={48} />
            <h3>2. Brain Storming</h3>
          </div>
          <div className="flex justify-between items-center sm:gap-10">
            <h3>3. Prototyping</h3>
            <Image src={"/work/icon-3.png"} alt="Icon" width={48} height={48} />
          </div>
          <div className="flex justify-between items-center sm:gap-10">
            <Image src={"/work/icon-4.png"} alt="Icon" width={48} height={48} />
            <h3>4. Development</h3>
          </div>
          <div className="flex justify-between items-center sm:gap-10">
            <h3>5. Testing</h3>
            <Image src={"/work/icon-5.png"} alt="Icon" width={48} height={48} />
          </div>
          <div className="flex justify-between items-center sm:gap-10">
            <Image src={"/work/icon-6.png"} alt="Icon" width={52} height={52} />
            <h3>6. Deliver to client</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
