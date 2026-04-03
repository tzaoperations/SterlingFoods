import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [time, setTime] = useState(new Date());
  const [city, setCity] = useState('MANGALORE');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Time clock
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Silent IP Geolocation fetch for the city
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        if (data.city) {
          setCity(data.city.toUpperCase());
        }
      } catch (error) {
        console.error("Could not fetch location, using default.", error);
      }
    };
    fetchLocation();
  }, []);

  // Scroll Direction Tracker for Navbar Fade
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Our Story', path: '/our-story' },
    { name: 'Sourcing', path: '/sourcing' },
    { name: 'Processing', path: '/processing' },
    { name: 'Products', path: '/products' },
    { name: 'Global Presence', path: '/global-presence' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    // Applied conditional transform based on isVisible state
    <nav className={`fixed top-0 left-0 z-50 w-full px-6 py-8 transition-transform duration-300 md:px-12 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="mx-auto flex max-w-[1400px] items-center justify-between">
        
        {/* Left: Brand / Logo */}
        <div className="w-1/4">
          <Link to="/" className="transition-opacity hover:opacity-70">
            <span className="font-seasons text-xl tracking-widest text-[#E6F1F8] uppercase md:text-2xl">
              Sterling Foods
            </span>
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden w-2/4 justify-center items-center gap-6 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="font-poppins text-[10px] font-semibold uppercase tracking-[0.15em] text-[#E6F1F8] transition-colors hover:text-[#E6F1F8]/70"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: Dynamic Time and Location Indicator */}
        <div className="hidden w-1/4 justify-end lg:flex">
          <div className="flex items-center font-poppins text-[10px] font-semibold uppercase tracking-[0.15em] text-[#E6F1F8]">
            <span>
              {city} • {time.toLocaleTimeString('en-US', { 
                hour: 'numeric', 
                minute: '2-digit',
                hour12: true
              })}
            </span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="text-[#E6F1F8] lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
          </svg>
        </button>
        
      </div>
    </nav>
  );
};

export default Navbar;