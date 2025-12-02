import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AudioProvider } from './context/AudioContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <AudioProvider>
        <div className="App">
          <Navbar />
          <main>
            <Hero />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </AudioProvider>
    </ThemeProvider>
  );
}

export default App;
