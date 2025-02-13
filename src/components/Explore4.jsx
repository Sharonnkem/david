import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import explore12 from '../images/explore12.jpg';
import explore13 from '../images/explore13.jpg';
import explore14 from '../images/explore14.jpg';
import explore15 from '../images/explore15.jpg';
import c from '../svg/c.svg';
import figma from '../svg/figma.svg';
import file from '../svg/file.svg';
import docker from '../svg/docker.svg';
import sql from '../svg/sql.svg';
import cctv1 from '../svg/cctv1.svg';
import mongo from '../svg/mongo.svg';
import chevronfront from '../svg/chevronfront.svg';
import chevronback from '../svg/chevronback.svg';
import './explore.css';



function Explore4() {
  const images = [explore12, explore13, explore14,  explore15]; 
  const [activeIndex, setActiveIndex] = useState(0); 

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className='explo'>
      <div className='explo1' data-aos="fade-up">
        <div>
          <h3>PROJECT</h3>
          <p>Ballerholic</p>
        </div>
        <div>
          <h3>ROLE</h3>
          <p>Backend Developer/UI/UX designer</p>
        </div>
        <div>
          <h3>LINK</h3>
          <a href="still in design phase. " target="_blank" rel="noopener noreferrer">
                          <p>still in design phase. </p>
                        </a>
        </div>
      </div>

      <div className='explob' data-aos="fade-right">
        <div className='explo2'>
          <div className='explo3' data-aos="zoom-in">
            <img
              src={chevronback}
              alt="chevronback"
              className="chevron-prev"
              onClick={handlePrev}
            />
            <img
              src={images[activeIndex]}
              alt={`Displayed Image ${activeIndex + 1}`}
              className='rec'
            />
            <img
              src={chevronfront}
              alt="chevronfront"
              className="chevron-next"
              onClick={handleNext}
            />
          </div>

          <div className='explo4' data-aos="fade-up">
            {images.map((imgSrc, index) => (
              <div
                key={index}
                className={`explo5 ${index === activeIndex ? 'active' : ''}`}
                onClick={() => handleImageClick(index)}
              >
                <img src={imgSrc} alt={`explore${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

      <div className='explo6' data-aos="fade-left">
        <h3>OVERVIEW</h3>

        <p>Ballerholic is a comprehensive platform designed to manage and analyze player and team performance in basketball competitions. The system provides real-time and historical statistics, tracks game results, and offers insights to players, coaches, and analysts.</p>
      </div>

      <div className='explo7' data-aos="fade-up">
        <h3>RESPONSIBILITIES/FEATURES</h3>
        <ul>
          <li>Player Management </li>
          <li>Team Management</li>
          <li>Game and Competition Tracking</li>
          <li>Statistical Analysis and Reporting</li>
          <li>User Roles and Access Control </li>
          <li>Integration and Export Options</li>
        </ul>
      </div>

      <div className='explo8' data-aos="zoom-in-up">
        <h3>STACK | TOOLS | TECHNOLOGIES</h3>

        <div className='tool'>
        
            <div className='tool1'>
            <img src={c} alt="c" />
            </div>
            <div className='tool1'>
            <img src={file} alt="file" />
            </div>
            <div className='tool1'>
            <img src={docker} alt="docker" />
            </div>
            <div className='tool1'>
            <img src={sql} alt="sql" />
            </div>
            <div className='tool1'>
            <img src={cctv1} alt="cctv1" />
            </div>
            <div className='tool1'>
            <img src={figma} alt="figma" />
            </div>
            <div className='tool1'>
            <img src={mongo} alt="mongo" />
            </div>
            
        </div>
      </div>
      </div>
    </div>
  );
}

export default Explore4;
