import Nav from './components/Nav';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-fuchsia-500/40 selection:text-white">
      <Nav />
      <Hero />
      <main>
        <Programs />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
