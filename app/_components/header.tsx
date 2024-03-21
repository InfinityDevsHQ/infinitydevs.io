import Link from "next/link";
export type HeaderProps = {
  className?: string;
};
export default function Header({ className }: HeaderProps) {
  return (
    <header
      className={`flex items-center justify-between w-full  px-4 pt-8 ${className}`}
    >
      <div>
        {
          /* Logo Here */ <span className="text-3xl font-black text-white">
            Logo
          </span>
        }
      </div>
      <nav className="hidden lg:block text-white text-lg capitalize font-bold">
        <ol className="flex items-center gap-12">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/"}>About Us</Link>
          </li>
          <li>
            <Link href={"/"}>Insiahts</Link>
          </li>
          <li>
            <Link href={"/"}>Portfolio</Link>
          </li>
          <li>
            <Link href={"/"}>contact us</Link>
          </li>
          <li>
            <Link href={"/"}>careers</Link>
          </li>
        </ol>
      </nav>
      <div>
        <div className="lg:hidden">
          <span></span>
        </div>
      </div>
    </header>
  );
}
