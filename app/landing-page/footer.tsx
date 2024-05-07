import Image from "next/image";
import DesktopNav from "../_components/navigation";
import Link from "next/link";
import { Linkedin, Twitter, Instagram } from "lucide-react";
export default function Footer() {
  return (
    <footer className='px-5 py-8 md:px-8 md:py-12 mx-auto'>
      <div className='px-6 py-4 common-border3 rounded-3xl bg-indigo-900/40'>
        <div className='flex flex-col gap-4 lg:flex-row items-center  justify-between border-b pb-4'>
          <div className='flex items-center justify-center'>
            <Image
              src={"/logo-light.png"}
              alt='Infinity Devs lOGO'
              width={200}
              height={200}
            />
          </div>
          {/* <DesktopNav /> */}
          <div className='flex gap-4 text-white'>
            <Link
              href={"https://www.linkedin.com/company/infinitydevshq/"}
              target='_blank'
              className='common-gradient hover:-translate-y-1.5 transition duration-300  p-4 rounded-full'
            >
              <Linkedin size={32} fill='transparent' />
            </Link>
            <Link
              href={"https://twitter.com/InfinityDevsHQ"}
              target='_blank'
              className='common-gradient hover:-translate-y-1.5 transition duration-300  p-4 rounded-full'
            >
              <Twitter size={32} fill='transparent' />
            </Link>
            <Link
              href={"https://www.instagram.com/infinitydevshq"}
              target='_blank'
              className='common-gradient hover:-translate-y-1.5 transition duration-300   p-4 rounded-full'
            >
              <Instagram size={32} fill='transparent' />
            </Link>
          </div>
        </div>
        <p className='main-description text-zinc-300 text-center pt-4 '>
          Infinity Devs &copy; 2024, All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
