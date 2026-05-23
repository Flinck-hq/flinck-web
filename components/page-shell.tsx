import { SiteBackground } from "@/components/site-background";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type PageShellProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageShell({ children, className = "" }: PageShellProps) {
  return (
    <main
      className={`page-shell min-h-screen overflow-x-clip bg-[#f7f2e8] text-slate-950 ${className}`}
    >
      <SiteBackground />
      <SiteHeader />
      {children}
      <SiteFooter />
    </main>
  );
}
