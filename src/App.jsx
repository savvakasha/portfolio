import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
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

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
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
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
