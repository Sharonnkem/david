import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import 'remixicon/fonts/remixicon.css';
import Navbar from "./components/Navbar";
import LandingPage from './components/LandingPage';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Socials from './components/Socials';
import Footer from './components/Footer';
import BackToTopBtn from './components/BackToTopBtn';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Explore from './components/Explore';
import Pictures from './components/Pictures';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import Overview from './pages/Overview';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
    });
  }, []);

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const location = useLocation(); 

  return (
    <>
      {location.pathname !== "/admin" && <Navbar scroll={scroll} />}
      <ScrollToTop />
      <Routes>
        {/* Admin Dashboard */}
        <Route path="/admin" element={<Overview />} />
        
        {/* Public-Facing Layout */}
        <Route
          path="/"
          element={
            <>
              <LandingPage />
              <Services id="services-section" />
              <Gallery />
              <Socials />
              <Footer />
              <BackToTopBtn scroll={scroll} />
            </>
          }
        />
        <Route path="/explore" element={<Explore />} />
        <Route path="/pictures" element={<Pictures />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
