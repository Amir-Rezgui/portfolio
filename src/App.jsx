import { ThemeProvider } from './components/ThemeContext';
import { LangProvider } from './components/LangContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Beyond from './components/Beyond';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';
import Footer from './components/Footer';
import { useScrollReveal } from './components/useScrollReveal';

function MainContent() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-bg text-ink font-sans transition-colors duration-300 selection:bg-accent-soft selection:text-ink">
      <Navbar />
      <main>
        <Hero />
        <ProjectsSection />
        <Timeline />
        <Skills />
        <Beyond />
        <Contact />
      </main>
      {/* ChatWidget hidden for now */}
      {/* <ChatWidget /> */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <MainContent />
      </LangProvider>
    </ThemeProvider>
  );
}
