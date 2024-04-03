export type SpinnerProps = {
  className?: string;
};
export default function Spinner({ className }: SpinnerProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        aria-live="polite"
        aria-label="Loading"
        className="border-t-4 border-blue-700 border-solid  rounded-full animate-spin w-24 h-24"
      ></div>
    </div>
  );
}
