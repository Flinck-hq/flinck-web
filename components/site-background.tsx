export function SiteBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute left-[-10%] top-[-12rem] h-[34rem] w-[34rem] rounded-full bg-[#1f7a45]/18 blur-3xl" />
      <div className="absolute right-[-8%] top-[8rem] h-[30rem] w-[30rem] rounded-full bg-[#d9a441]/16 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.75),_transparent_60%)]" />
    </div>
  );
}
