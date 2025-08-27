import { Rocket, SatelliteDish, Moon, Star } from 'lucide-react';

const items = [
  {
    icon: Rocket,
    title: 'Suborbital Hop',
    price: 'from $49,000',
    desc: 'Skim the edge of space, experience minutes of weightlessness, and glimpse Earth6s curve.'
  },
  {
    icon: SatelliteDish,
    title: 'Orbital Weekend',
    price: 'from $199,000',
    desc: 'Two days in low Earth orbit inside our boutique capsule with panoramic cupola views.'
  },
  {
    icon: Moon,
    title: 'Lunar Flyby',
    price: 'from $599,000',
    desc: 'Slingshot around the Moon with professional crew and cinematic live feeds.'
  },
  {
    icon: Star,
    title: 'Aurora Cruise',
    price: 'from $89,000',
    desc: 'Night-side flight to chase auroras and cosmic phenomena above the poles.'
  }
];

export default function Programs() {
  return (
    <section id="programs" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 opacity-60">
        <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute top-1/3 right-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Programs for every kind of explorer</h2>
          <p className="mt-3 text-white/70">Choose your trajectory. Each experience includes full training, medical screening, and white-glove concierge support.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, idx) => (
            <article
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:border-fuchsia-400/30 hover:bg-white/10"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-fuchsia-500/0 via-cyan-400/0 to-indigo-500/0 opacity-0 transition group-hover:opacity-20" />
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-gradient-to-tr from-fuchsia-600/30 to-cyan-500/30 p-2.5">
                  <it.icon className="h-6 w-6 text-cyan-200" />
                </div>
                <h3 className="font-semibold tracking-tight">{it.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/75">{it.desc}</p>
              <p className="mt-4 text-sm font-medium text-cyan-300">{it.price}</p>
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-2xl transition group-hover:bottom-0 group-hover:right-0" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
