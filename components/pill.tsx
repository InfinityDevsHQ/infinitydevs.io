export type PillProps = {
  label: string;
};
export default function Pill({ label }: PillProps) {
  return (
    <>
      <span className="p-4 text-zinc-300 font-medium text-lg text-center bg-blue-900/40 rounded-full common-border">
        {label}
      </span>
    </>
  );
}
