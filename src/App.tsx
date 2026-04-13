import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import SmoothScroll from './components/layout/SmoothScroll';
import Home from './pages/Home';

// Active Pages
import OurStory from './pages/OurStory';
import Products from './pages/Products';
import Squid from './pages/SquidPage'; 
import Shrimp from './pages/Shrimp';
import Sourcing from './pages/Sourcing';
import Processing from './pages/Processing';
import GlobalPresence from './pages/GlobalPresence';
import Contact from './pages/Contact';
import Yacht from './pages/Yacht';

function App() {
  return (
    <Router>
      <SmoothScroll>
        <ScrollToTop />
        <div className="min-h-screen bg-white font-sans text-slate-900">
          <Navbar />
          <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/products" element={<Products />} />
            <Route path="/squid" element={<Squid />} />
            <Route path="/shrimp" element={<Shrimp />} />
            <Route path="/sourcing" element={<Sourcing />} />
            <Route path="/processing" element={<Processing />} />
            <Route path="/global-presence" element={<GlobalPresence />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/yacht" element={<Yacht />} />
          </Routes>
        </main>
        <Footer /> 
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;