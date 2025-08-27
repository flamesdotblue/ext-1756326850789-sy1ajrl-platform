export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 opacity-60">
        <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Transparent pricing</h2>
          <p className="mt-3 text-white/70">Financing available with flexible schedules. All packages include preflight training, suits, and insurance.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <Plan
            highlight={false}
            name="Explorer"
            price="$49,000"
            blurb="Perfect first step to space."
            features={[
              'Suborbital hop seat',
              '2 days astronaut training',
              'Window-side seating',
              'Launch day VIP access'
            ]}
            cta="Book Explorer"
          />
          <Plan
            highlight
            name="Pioneer"
            price="$199,000"
            blurb="Weekend in orbit with views for days."
            features={[
              '2-night orbital stay',
              'Panoramic cupola access',
              'Onboard concierge',
              'Priority mission slot'
            ]}
            cta="Book Pioneer"
          />
          <Plan
            highlight={false}
            name="Odyssey"
            price="$599,000"
            blurb="Iconic lunar flyby adventure."
            features={[
              'Lunar free-return trajectory',
              'Private cabin upgrade',
              'Exclusive preflight gala',
              'Dedicated mission specialist'
            ]}
            cta="Book Odyssey"
          />
        </div>
      </div>
    </section>
  );
}

function Plan({ highlight, name, price, blurb, features, cta }) {
  return (
    <div
      className={`relative rounded-2xl border p-6 sm:p-8 backdrop-blur-xl transition ${
        highlight
          ? 'border-fuchsia-400/40 bg-gradient-to-b from-white/10 to-white/5 shadow-[0_0_40px_-12px_rgba(217,70,239,0.45)]'
          : 'border-white/10 bg-white/5'
      }`}
    >
      {highlight && (
        <div className="absolute -top-3 left-6 rounded-full border border-fuchsia-400/40 bg-fuchsia-500/20 px-3 py-1 text-xs text-fuchsia-100">
          Most popular
        </div>
      )}
      <div className="flex items-end justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold tracking-tight">{name}</h3>
          <p className="mt-1 text-sm text-white/70">{blurb}</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-fuchsia-300">
            {price}
          </div>
          <div className="text-xs text-white/60">per traveler</div>
        </div>
      </div>
      <ul className="mt-6 space-y-2 text-sm text-white/85">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition ${
          highlight
            ? 'bg-gradient-to-r from-fuchsia-600 via-indigo-600 to-cyan-500 hover:from-fuchsia-500 hover:via-indigo-500 hover:to-cyan-400'
            : 'border border-white/15 bg-white/5 hover:bg-white/10'
        }`}
      >
        {cta}
      </a>
    </div>
  );
}
