import { ReactNode } from "react";

export type Headng = {
  children: ReactNode;
  size?: "h2" | "h3" | "h3" | "h4" | "h5" | "h6";
  className?: string;
};
export default function Heading({ children, size = "h2", className }: Headng) {
  switch (size) {
    case "h2":
      return (
        <h2
          className={`text-3xl lg:text-4xl 2xl:text-5xl text-white ${className}`}
        >
          {children}
        </h2>
      );
    default:
      break;
  }
}
