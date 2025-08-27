import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-gradient-to-t from-black via-black/60 to-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-fuchsia-500 via-cyan-400 to-indigo-500" />
              <span className="font-semibold tracking-tight text-white">Nebula Voyages</span>
            </div>
            <p className="mt-3 text-sm text-white/70 max-w-sm">
              We build safe, spectacular adventures beyond Earth with pricing that brings the stars within reach.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-white/90">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#programs" className="hover:text-white">Programs</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Safety & Training</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-white/90">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@nebulavoyages.com</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (555) 012-3456</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Nebula Voyages. All rights reserved.</p>
          <p>Crafted for the cosmos — built with React, Vite, and Tailwind.</p>
        </div>
      </div>
    </footer>
  );
}
