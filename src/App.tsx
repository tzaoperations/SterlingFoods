import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';

// Commented out until we actually write the code for these pages!
import OurStory from './pages/OurStory';
// import Sourcing from './pages/Sourcing';
// import Processing from './pages/Processing';
import Products from './pages/Products';
// import GlobalPresence from './pages/GlobalPresence';
// import Contact from './pages/Contact';
// import Yacht from './pages/Yacht';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-slate-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* These routes are hidden from React for now. 
              As we build each page, we will uncomment its import at the top 
              and its Route down here.
            */}
            <Route path="/our-story" element={<OurStory />} />
            {/* <Route path="/sourcing" element={<Sourcing />} /> */}
            {/* <Route path="/processing" element={<Processing />} /> */}
            <Route path="/products" element={<Products />} />
            {/* <Route path="/global-presence" element={<GlobalPresence />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
            {/* <Route path="/yacht" element={<Yacht />} /> */}
          </Routes>
        </main>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;