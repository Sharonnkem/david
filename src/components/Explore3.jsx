import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Rectangle60 from '../images/explore16.jpg';
import explore1 from '../images/explore16.jpg';
import explore2 from '../images/explore16.jpg';
import explore3 from '../images/explore16.jpg';
import c from '../svg/c.svg';
import file from '../svg/file.svg';
import docker from '../svg/docker.svg';
import sql from '../svg/sql.svg';
import cctv1 from '../svg/cctv1.svg';
import mongo from '../svg/mongo.svg';
import chevronfront from '../svg/chevronfront.svg';
import chevronback from '../svg/chevronback.svg';
import './explore.css';



function Explore3() {
  const images = [Rectangle60, explore2, explore3,  explore1]; 
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
          <p>Danfo</p>
        </div>
        <div>
          <h3>ROLE</h3>
          <p>Backend Developer</p>
        </div>
        <div>
          <h3>LINK</h3>
          <a href="https://danfo-admin.netlify.app/" target="_blank" rel="noopener noreferrer">
                          <p>https://danfo-admin.netlify.app/</p>
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

        <p>Danfo enables citizens to report traffic offenses in real time, enhancing road safety and law enforcement efficiency. It provides a seamless platform for submitting reports, including offender details, location data, and media evidence. Law enforcement agencies can review, verify, and take action on reported violations, ensuring swift and effective enforcement.</p>
      </div>

      <div className='explo7' data-aos="fade-up">
        <h3>RESPONSIBILITIES/FEATURES</h3>
        <ul>
          <li>Report Submission – Citizens can easily report traffic violations with a detailed description. </li>
          <li>Photo & Video Uploads – Attach media evidence to strengthen reports.</li>
          <li>Law Enforcement Dashboard – Authorities can review, verify, and take action on reports.</li>
          <li>Anonymous or Verified Reporting – Allows users to submit reports anonymously or with verification.</li>
          <li>Notifications & Updates – Users receive updates on report status and actions taken.</li>
          <li>Authentication - Secure Authentication for Law enforcement agency.</li>
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
            <img src={mongo} alt="mongo" />
            </div>
            
        </div>
      </div>
      </div>
    </div>
  );
}

export default Explore3;
