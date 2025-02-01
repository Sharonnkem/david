import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

import gallery1 from '../images/gallery1.png';
import gallery2 from '../images/gallery2.png';
import gallery3 from '../images/gallery3.png';
import gallery4 from '../images/gallery4.png';
import './pictures.css';

function Pictures() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className='pic' data-aos="fade-up">
      <div className='pic2' data-aos="zoom-in">
        <h3>Gallery</h3>
        <p>Lorem ipsum dolor sit amet consectetur. Arcu sociis id pharetra in nulla mattis nec. Pulvinar in egestas vitae lectus.</p>
      </div>  
      
      <div className='pic1'>
        <img src={gallery1} alt="gallery1" data-aos="fade-up" />
        <img src={gallery2} alt="gallery2" data-aos="fade-down" />
        <img src={gallery3} alt="gallery3" data-aos="fade-left" />
        <img src={gallery4} alt="gallery4" data-aos="fade-right" />
        <img src={gallery1} alt="gallery1" data-aos="flip-left" />
        <img src={gallery2} alt="gallery2" data-aos="flip-right" />
        <img src={gallery3} alt="gallery3" data-aos="zoom-in" />
        <img src={gallery4} alt="gallery4" data-aos="zoom-out" />
        <img src={gallery1} alt="gallery1" data-aos="fade-up" />
        <img src={gallery2} alt="gallery2" data-aos="fade-down" />
        <img src={gallery3} alt="gallery3" data-aos="fade-left" />
        <img src={gallery4} alt="gallery4" data-aos="fade-right" />
        <img src={gallery3} alt="gallery3" data-aos="zoom-in-up" />
        <img src={gallery4} alt="gallery4" data-aos="zoom-in-down" />
      </div>
    </div>
  );
}

export default Pictures;
