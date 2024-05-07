import Heading from "../_components/heading";
import Overselves from "./_components/ourselves";

export default function WhoWeAre() {
  return (
    <section
      className=' flex flex-col gap-8 px-6 py-12 md:px-16 md:py-20 mx-auto who-bg'
      id='about-us'
    >
      <div className='flex items-center justify-center'>
        <div className='box-max-width flex flex-col gap-10'>
          <Heading size='h2' className='uppercase font-bold text-center'>
            <span>who</span> we are
          </Heading>
          <p className='main-descriptions text-center'>
            At Infinity Devs, we are passionate about crafting cutting-edge
            software solutions that exceed expectations. Our dedicated team of
            experienced developers and designers collaborate seamlessly to bring
            your vision to life with exceptional precision and creativity.
            Together, we strive to create innovative web apps, MVPs, landing
            pages, and proof of concepts, driving your success with top-notch
            code quality and design expertise.
          </p>
        </div>
      </div>
      <Overselves />
    </section>
  );
}
