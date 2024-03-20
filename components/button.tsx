import { ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  type?: "submit" | "button" | "reset";
  className?: string;
  disabled?: boolean;
};
export default function Button({
  children,
  type = "button",
  className,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 bg-blue-600 ${
        disabled ? "cursor-not-allowed bg-blue-300 hover:bg-blue-300" : ""
      } hover:bg-blue-400 transition-all text-base font-semibold rounded-md text-white ${className}`}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
