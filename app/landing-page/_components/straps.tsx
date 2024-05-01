export default function Straps() {
  return (
    <div className="mt-16 w-full">
      <div className="relative w-full">
        <div className="strap justify-between">
          <span>web design</span>
          <span>web apps</span>
          {/* <span>seo</span> */}
          <span>mobile apps</span>
          <span>web development</span>
        </div>
        <div className="strap absolute border top-0 left-0 shadow-lg -rotate-3 flex justify-around">
          <span>ui/ux design</span>
          <span>Mobile apps</span>
          <span>web development</span>
          <span>graphic design</span>
          {/* <span>seo</span> */}
        </div>
      </div>
    </div>
  );
}
