import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import explore8 from '../images/explore8.jpg';
import explore9 from '../images/explore9.jpg';
import explore10 from '../images/explore10.jpg';
import explore11 from '../images/explore11.jpg';
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



function Explore2() {
  const images = [explore8, explore9, explore10,  explore11]; 
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
          <p>Authie</p>
        </div>
        <div>
          <h3>ROLE</h3>
          <p>Backend Developer</p>
        </div>
        <div>
          <h3>LINK</h3>
          <a href="https://auth-app-bice-nu.vercel.app/" target="_blank" rel="noopener noreferrer">
                          <p>https://auth-app-bice-nu.vercel.app/</p>
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

        <p>Authie is an authentication project designed to provide a seamless and secure user management experience. It supports OTP-based signup, email confirmation, and comprehensive account management, ensuring user security and convenience. </p>
      </div>

      <div className='explo7' data-aos="fade-up">
        <h3>RESPONSIBILITIES/FEATURES</h3>
        <ul>
          <li>Email Confirmation – Verifies user identity via email validation. </li>
          <li>Account Management – Allows users to update account details and manage credentials.</li>
          <li>Profile Picture Upload – Supports image uploads for user profiles.</li>
          <li>Secure Authentication – Implements industry best practices for authentication security with JWT.</li>
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

export default Explore2;
