import { testimonials } from "@/lib/site-content";

export function TestimonialsSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#1f7a45]">
            Voices from the network
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
            Built for real agricultural trade.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote
              key={item.name}
              className="reveal-card rounded-[2rem] border border-slate-900/8 bg-white/85 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
            >
              <p className="text-base leading-7 text-slate-700">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-slate-900/8 pt-4">
                <p className="font-semibold text-slate-950">{item.name}</p>
                <p className="text-sm text-slate-500">{item.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
