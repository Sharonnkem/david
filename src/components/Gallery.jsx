import AOS from 'aos';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Rectangle1 from '../images/Rectangle1.png';
import Rectangle2 from '../images/Rectangle2.png';
import Rectangle3 from '../images/Rectangle3.png';
import Rectangle4 from '../images/Rectangle4.png';
import './gallery.css';

function Gallery() {
  useEffect(() => {
    AOS.init();
  }, []);

  const navigate = useNavigate(); 

  const handleContactClick = () => {
    navigate('/pictures'); 
  };

  return (
    <div className='gal'>
      <h3 data-aos="fade-down">Gallery</h3>
      <div className='gal3'>
        <div className='gal1' data-aos="zoom-in">
          <div className='gal4'><img src={Rectangle1} alt="Rectangle1" /></div>
          <div className='gal4'><img src={Rectangle2} alt="Rectangle2" /></div>
          <div className='gal4'><img src={Rectangle3} alt="Rectangle3" /></div>
          <div className='gal4'><img src={Rectangle4} alt="Rectangle4" /></div>
        </div>
        <div className='gal2' data-aos="fade-up">
          <h3>Images from work</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <span onClick={handleContactClick}>Take a tour</span>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
