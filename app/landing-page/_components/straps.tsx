export default function Straps() {
  return (
    <div className='mt-16 w-full'>
      <div className='relative w-full'>
        <marquee
          direction='right'
          className='strap justify-between'
          scrollamount='15'
        >
          <div className='flex gap-36'>
            <span>web design</span>
            <span>web apps</span>
            {/* <span>seo</span> */}
            <span>mobile apps</span>
            <span>web development</span>
          </div>
        </marquee>
        <marquee
          direction='left'
          className='strap absolute border top-0 left-0 shadow-lg -rotate-3 flex justify-around'
          scrollamount='18'
        >
          <div className='flex  gap-36'>
            <span>ui/ux design</span>
            <span>Mobile apps</span>
            <span>web development</span>
            <span>graphic design</span>
            <span>seo</span>
          </div>
        </marquee>
      </div>
    </div>
  );
}

