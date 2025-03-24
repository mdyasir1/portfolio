import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const responsiveStyles = {
    paddingTop: '4rem',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '4rem 20px 0',
    '@media (max-width: 768px)': {
      padding: '3rem 16px 0',
      maxWidth: '100%'
    },
    '@media (max-width: 480px)': {
      padding: '2rem 12px 0'
    }
  };

  return (
    <BrowserRouter>
      <div style={{ backgroundColor: '#0f172a', minHeight: '100vh' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={
            <main style={responsiveStyles}>
              <About />
            </main>
          } />
          <Route path="/projects" element={
            <main style={responsiveStyles}>
              <Projects />
            </main>
          } />
          <Route path="/skills" element={
            <main style={responsiveStyles}>
              <Skills />
            </main>
          } />
          <Route path="/contact" element={
            <main style={responsiveStyles}>
              <Contact />
            </main>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
