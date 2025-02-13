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
import Resume from './components/Resume';
import Project from './components/Project';
import Explore1 from './components/Explore1';
import Explore2 from './components/Explore2';
import Explore3 from './components/Explore3';
import Explore4 from './components/Explore4';

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
            </>
          }
        />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore1" element={<Explore1/>} />
        <Route path="/explore2" element={<Explore2/>} />
        <Route path="/explore3" element={<Explore3 />} />
        <Route path="/explore4" element={<Explore4 />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/pictures" element={<Pictures />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <BackToTopBtn scroll={scroll} />
      <Footer />
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
