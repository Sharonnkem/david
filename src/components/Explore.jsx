import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';import Rectangle60 from '../images/Rectangle60.png';
import explore1 from '../images/explore1.png';
import explore2 from '../images/explore2.png';
import explore3 from '../images/explore3.png';
import c from '../svg/c.svg';
import file from '../svg/file.svg';
import docker from '../svg/docker.svg';
import sql from '../svg/sql.svg';
import cctv from '../svg/cctv.svg';
import mongo from '../svg/mongo.svg';
import chevronfront from '../svg/chevronfront.svg';
import chevronback from '../svg/chevronback.svg';
import './explore.css';



function Explore() {
  const images = [Rectangle60, explore1, explore2, explore3]; 
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
          <p>CHITHUB Back Office Solution</p>
        </div>
        <div>
          <h3>ROLE</h3>
          <p>Backend Developer/APNR Installation Engineer</p>
        </div>
        <div>
          <h3>LINK</h3>
          <p>www.linkhere.org</p>
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

        <p>Lorem ipsum dolor sit amet consectetur. Arcu sociis id pharetra in nulla mattis nec. Pulvinar in egestas vitae lectus. Lorem ipsum dolor sit amet consectetur. Arcu sociis id pharetra in nulla mattis nec. PLorem ipsum dolor sit amet consectetur. Arcu sociis id pharetra in nulla mattis nec. Pulvinar in egestas vitae lectus. Lorem ipsum dolor sit amet consectetur. Arcu sociis id pharetra in nulla mattis nec. PLorem ipsum dolor sit amet consectetur. Arcu sociis id pharetra in nulla mattis nec. Pulvinar in egestas vitae lectus. Lorem ipsum dolor sit amet consectetur. Arcu sociis id pharetra in nulla mattis nec. PLorem ipsum dolor sit amet consectetur. Arcu sociis id pharetra in nulla mattis nec. Pulvinar in egestas vitae lectus. Lorem ipsum dolor sit amet consectetur. Arcu sociis id pharetra in nulla mattis nec. PLorem ipsum dolor sit amet consectetur. </p>
      </div>

      <div className='explo7' data-aos="fade-up">
        <h3>RESPONSIBILITIES/FEATURES</h3>
        <ul>
          <li>Lorem ipsum dolor sit amet consectetur. Arcu sociis id pharetra in nulla mattis nec. Pulvinar in egestas vitae lectus.</li>
          <li>Arcu sociis id pharetra in nulla mattis nec. Pulvinar in egestas vitae lectus. Lorem ipsum dolor sit amet consectetu.</li>
          <li>Arcu sociis id pharetra in nulla mattis nec. Pulvinar in egestas vitae lectus. Lorem ipsum dolor sit amet.</li>
          <li>Arcu sociis id pharetra in nulla mattis nec. Pulvinar in egestas vitae lectus. Lorem ipsum dolor sit amet consectetu.</li>
          <li>Arcu sociis id pharetra in nulla mattis nec. Pulvinar in egestas vitae lectus. Lorem ipsum dolor sit amet.</li>
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
            <img src={cctv} alt="cctv" />
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

export default Explore;
