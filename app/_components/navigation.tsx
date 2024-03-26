import Link from "next/link";
export type DesktopNavProps = {
  className?: string;
};
export default function Navigation({ className }: DesktopNavProps) {
  return (
    <nav className={`text-white text-lg capitalize font-bold ${className}`}>
      <ol className="flex flex-wrap lg:flex-nowrap items-center gap-12">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/"}>About Us</Link>
        </li>
        <li>
          <Link href={"/"}>Insights</Link>
        </li>
        <li>
          <Link href={"/"}>Portfolio</Link>
        </li>
        <li>
          <Link href={"/"}>Contact Us</Link>
        </li>
        <li>
          <Link href={"/"}>Careers</Link>
        </li>
      </ol>
    </nav>
  );
}
