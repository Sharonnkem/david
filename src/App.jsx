import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect  } from 'react';
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

function App() {
  AOS.init({
    offset: 100,   
    duration: 800, 
  });

  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });
    return () => {
      window.removeEventListener('scroll', () => {
        setScroll(window.scrollY);
      });
    };
  }, [scroll]);


  return (
    <Router>
    <ScrollToTop />
      <Navbar scroll={scroll}/>
      <Routes>
        <Route path="/" element={
          <>
            <LandingPage />
            <Services id="services-section" />
            <Gallery />
            <Socials />
            <Footer />
            <BackToTopBtn scroll={scroll} />
          </>
        } />
        <Route path="/explore" element={<Explore />}/>
        <Route path="/pictures" element={<Pictures />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </Router>
  );
}

export default App;
