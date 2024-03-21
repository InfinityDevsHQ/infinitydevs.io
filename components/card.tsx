import { ReactNode } from "react";

export type CardProps = {
  icon?: ReactNode;
};
export default function Card({ icon }: CardProps) {
  return (
    <div className="flex flex-col">
      <span>{icon}</span>
    </div>
  );
}
