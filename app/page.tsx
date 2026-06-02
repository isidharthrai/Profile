import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Skills />
      <Experience />
      <Education />
      <Footer />
    </main>
  );
}
