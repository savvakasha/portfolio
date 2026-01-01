import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ProjectDetail from './pages/ProjectDetail';
import OutSmart from './pages/projects/OutSmart';
import Nimbus from './pages/projects/Nimbus';
import Wave from './pages/projects/Wave';
import Bath from './pages/projects/Bath';
import Charity from './pages/projects/Charity';
import Celestial from './pages/projects/Celestial';
import Astropedia from './pages/projects/Astropedia';
import Refuge from './pages/projects/Refuge';
import Kiosk from './pages/projects/Kiosk';
import NYC from './pages/projects/NYC';

import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className="min-h-screen flex flex-col w-full max-w-6xl mx-auto px-4 sm:px-6">
        <main className="flex-grow justify-self-end md:w-[calc(100%-176px)] w-[calc(100%-56px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/projects/outsmart" element={<OutSmart />} />
          <Route path="/projects/nimbus" element={<Nimbus />} />
          <Route path="/projects/wave" element={<Wave />} />
          <Route path="/projects/bath" element={<Bath />} />
          <Route path="/projects/charity" element={<Charity />} />
          <Route path="/projects/celestial" element={<Celestial />} />
          <Route path="/projects/astropedia" element={<Astropedia />} />
          <Route path="/projects/refuge" element={<Refuge />} />
          <Route path="/projects/kiosk" element={<Kiosk />} />
          <Route path="/projects/nyc" element={<NYC />} />
        </Routes>
      </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
