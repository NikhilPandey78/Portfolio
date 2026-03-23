import Header from '../src/components/Header';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Skills from '../src/components/Skills';
import Projects from '../src/components/Projects';
import Experience from '../src/components/Experience';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';

export default function Page() {
  return (
    <div className="min-h-screen bg-obsidian text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
