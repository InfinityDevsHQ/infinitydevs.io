import Image from "next/image";
import DesktopNav from "../_components/navigation";
import Link from "next/link";
import { Linkedin } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-slate-900  px-8 py-6 ">
      <div className="px-6 py-4 border rounded-2xl bg-indigo-900/40">
        <div className="flex flex-col gap-4 lg:flex-row items-center  justify-between border-b pb-4">
          <div className="flex items-center justify-center">
            <Image
              src={"/logo-light.png"}
              alt="Infinity Devs lOGO"
              width={200}
              height={200}
            />
          </div>
          <DesktopNav />
          <div className="flex gap-4 text-white">
            <Link href={""} className="common-gradient p-4 rounded-full">
              <span>
                <Linkedin size={32} fill="white" />
              </span>
            </Link>
            <Link href={""} className="common-gradient p-4 rounded-full">
              <span>
                <Linkedin size={32} fill="white" />
              </span>
            </Link>
          </div>
        </div>
        <p className="main-description text-zinc-300 text-center uppercase font-bold pt-4 ">
          infinity dev,2023 all rights reserved
        </p>
      </div>
    </footer>
  );
}
