import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ProjectDetail from './pages/ProjectDetail';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen flex flex-col w-full max-w-6xl mx-auto px-4 sm:px-6">
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
