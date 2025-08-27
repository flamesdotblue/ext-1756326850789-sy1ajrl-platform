import { useState, useEffect } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-xl bg-black/40 border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-fuchsia-500 via-cyan-400 to-indigo-500 animate-pulse" />
            <span className="font-semibold tracking-tight text-white text-lg">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-indigo-400">Nebula</span> Voyages
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#programs" className="hover:text-white transition">Programs</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <a href="#pricing" className="ml-2 rounded-full bg-gradient-to-r from-fuchsia-600 via-indigo-600 to-cyan-500 hover:from-fuchsia-500 hover:via-indigo-500 hover:to-cyan-400 px-4 py-2 text-white shadow-lg shadow-fuchsia-500/20 transition">Book Now</a>
          </nav>
          <a href="#pricing" className="md:hidden rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-500 px-4 py-2 text-sm">Book</a>
        </div>
      </div>
    </header>
  );
}
