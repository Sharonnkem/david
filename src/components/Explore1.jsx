import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import explore4 from '../images/explore4.jpg';
import explore5 from '../images/explore5.jpg';
import explore6 from '../images/explore6.jpg';
import explore7 from '../images/explore7.jpg';
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



function Explore1() {
  const images = [explore4, explore5, explore6,  explore7]; 
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
          <p>Personal website</p>
        </div>
        <div>
          <h3>ROLE</h3>
          <p>Backend Developer/UI/UX designer</p>
        </div>
        <div>
          <h3>LINK</h3>
          <a href="https://david-i7kg.vercel.app" target="_blank" rel="noopener noreferrer">
                          <p>https://david-i7kg.vercel.app</p>
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

        <p>This portfolio showcases my expertise as a .NET Backend Developer, highlighting a range of projects that demonstrate my ability to design and implement scalable, high-performance backend systems. It features my work in building RESTful APIs, authentication and authorization systems, cloud-based solutions, and database-driven applications. </p>
      </div>

      <div className='explo7' data-aos="fade-up">
        <h3>RESPONSIBILITIES/FEATURES</h3>
        <ul>
          <li>Designed the UI on Figma for both mobile and desktop views, ensuring a seamless user experience. </li>
          <li>Implemented the Contact Me feature to enable email communication directly from the form.</li>
          <li>Integrated Cloudinary for efficient media file storage and uploads.</li>
          <li>Collaborated closely with the frontend developer to bring the project to life, ensuring smooth integration between backend and UI.</li>
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

export default Explore1;
