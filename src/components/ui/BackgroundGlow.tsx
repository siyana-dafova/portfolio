export default function BackgroundGlow() {
  return (
    <div
      className="pointer-events-none fixed top-[-150px] left-[-250px] -z-20 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[180px]"
      aria-hidden
    />
  );
}
