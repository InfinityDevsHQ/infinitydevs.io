export default function Straps() {
  return (
    <div className="absolute bottom-16 w-full">
      <div className="relative w-full">
        <marquee className="strap justify-between">
          <span className="px-20">web design</span>
          <span className="px-20">web apps</span>
          <span className="px-20">seo</span>
          <span className="px-20">mobile apps</span>
          <span className="px-20">web development</span>
        </marquee>
        <marquee
          className="strap absolute  top-0 left-0 shadow-lg -rotate-3 flex justify-around"
          direction="right"
        >
          <span className="px-20">ui/ux design</span>
          <span className="px-20">Mobile apps</span>
          <span className="px-20">web development</span>
          <span className="px-20">graphic design</span>
          <span>seo</span>
        </marquee>
      </div>
    </div>
  );
}
