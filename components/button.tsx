import { ReactNode } from "react";
import Link from "next/link";

export type ButtonProps = {
  children: ReactNode;
  type?: "submit" | "button" | "reset";
  className?: string;
  disabled?: boolean;
  scrollTarget?: string;
};
export default function Button({
  children,
  type = "button",
  className,
  disabled = false,
  scrollTarget,
}: ButtonProps) {
  const handleClick = () => {
    if (scrollTarget) {
      const targetElement = document.getElementById(scrollTarget);
      if (targetElement) {
        const offset = targetElement.offsetTop;
        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });
      }
    }
  };

  return scrollTarget ? (
    <button
      className={`px-4 py-2 bg-blue-600 ${
        disabled ? "cursor-not-allowed bg-blue-300 hover:bg-blue-300" : ""
      } hover:bg-blue-400 transition-all text-base font-semibold rounded-md text-white ${className}`}
      type={type}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  ) : (
    <Link href="/">
      <a
        className={`px-4 py-2 bg-blue-600 hover:bg-blue-400 transition-all text-base font-semibold rounded-md text-white ${className}`}
        type={type}
      >
        {children}
      </a>
    </Link>
  );
}
