import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0 -z-10">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" />
      </div>

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,rgba(217,70,239,0.25),transparent_40%),radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.25),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
        <div className="pt-28 sm:pt-32 md:pt-36 flex h-full items-center">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              Futuristic. Cosmic. Affordable.
            </p>
            <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Your ticket to the cosmos at a price that3s down-to-earth
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/80">
              From suborbital hops to lunar flybys, Nebula Voyages delivers breathtaking space travel programs with safety-first engineering and transparent pricing.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#programs" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-600 via-indigo-600 to-cyan-500 px-5 py-3 text-sm font-medium shadow-lg shadow-fuchsia-500/20 transition hover:from-fuchsia-500 hover:via-indigo-500 hover:to-cyan-400">
                Explore programs
                <ArrowRight className="h-4 w-4 transition -rotate-45 group-hover:rotate-0" />
              </a>
              <a href="#pricing" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/10">
                Get a quote
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
