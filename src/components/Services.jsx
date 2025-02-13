import { useEffect } from 'react';
import { Link } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import cctv from '../svg/cctv.svg';
import database from '../svg/database.svg';
import design from '../svg/design.svg';
import ux from '../svg/ux.svg';
import display1 from '../images/display1.jpg';
import display2 from '../images/display2.jpg';
import display3 from '../images/display3.jpg';
import arrow1 from '../svg/arrow1.svg';
import './services.css';
import PropTypes from 'prop-types'; 

function Services({ id }) {
  useEffect(() => {
    AOS.init();
  }, []);



  return (
    <div className='services'>
      <h3 data-aos="fade-down">Services</h3>
      <div className='ser'>
        <div className='ser2' data-aos="fade-right">
        <div className='beli'>
          <div className='data'>
            <img src={database} alt="database" />
          </div>
            <h5>Database Administration</h5>
          </div>
          <div>
            <p>Skilled in database administration, ensuring optimal performance, security, and scalability. Proficient in managing relational and NoSQL databases, implementing backups, tuning queries, and ensuring data integrity for seamless application functionality.</p>
          </div>
        </div>

        <div className='ser2' data-aos="fade-right">
        <div className='beli'>
          <div className='data'>
            <img src={cctv} alt="cctv" />
          </div>
            <h5>ANPR Hardware Installation</h5>
          </div>
          <div>
            <p>Proficient in deploying and configuring Automatic Number Plate Recognition (ANPR) hardware, including Einar cameras, ensuring accurate data capture, system integration, and operational efficiency for traffic enforcement and monitoring systems.</p>
          </div>
        </div>

        <div className='ser2' data-aos="fade-left">
        <div className='beli'>
          <div className='data'>
            <img src={ux} alt="ux" />
          </div>
            <h5>UX Design</h5>
          </div>
          <div>
            <p>Designing user-centric interfaces that prioritize accessibility and aesthetics, ensuring intuitive navigation and enhanced user experiences through meticulous wireframing, prototyping, and testing across web and mobile platforms.</p>
          </div>
        </div>

        <div className='ser2' data-aos="fade-left">
        <div className='beli'>
          <div className='data'>
            <img src={design} alt="design" />
          </div>
            <h5>Backend Development</h5>
          </div>
          <div>
            <p>Experienced in building robust backend systems with .NET, implementing APIs, managing databases, and ensuring scalability, security, and performance to deliver seamless, high-quality solutions for diverse applications.</p>
          </div>
        </div>
        
      </div>

      <div className='Project' id={id}>
        <h3 data-aos="zoom-in">Projects</h3>
        <div className='again5'>

          <div className='again1' data-aos="fade-up">
          <div className='again2'>
          <img src={display1} data-aos="zoom-in" alt="display1" className="again" />
          </div>
          <div className='again3'>
            <h5>Chithub back office solution</h5>
            <p>Chithub is a Traffic Law Enforcement Back Office 
Solution for managing violations, evidence, and 
compliance.</p>
          </div>
          <span> <Link to="/explore">Learn more <img src={arrow1} alt="arrow1" /></Link></span>
          </div>

          <div className='again1' data-aos="fade-up">
          <div className='again2'>
          <img src={display2} data-aos="zoom-in" alt="display2" className="again" />
          </div>
          <div className='again3'>
            <h5>Portfolio website</h5>
            <p>A showcase of my backend development expertise, projects designs and all the tools utilized.</p>
          </div>
          <span> <Link to="/explore1">Learn more <img src={arrow1} alt="arrow1" /></Link></span>
          </div>

          <div className='again1' data-aos="fade-up">
          <div className='again2'>
          <img src={display3} data-aos="zoom-in" alt="display3" className="again" />
          </div>
          <div className='again3'>
            <h5>Authie</h5>
            <p>Authie is an authentication project that implements 
            OTP login and signup with email notifications. It also includes file upload for avatars.</p>
          </div>
          <span> <Link to="/explore2">Learn more <img src={arrow1} alt="arrow1" /></Link></span>
          </div>

        </div>

        <div className='again6'>
        <span> <Link to="/project">View all</Link></span>
        </div>
      </div>
    </div>
  );
}
Services.propTypes = {
  id: PropTypes.string.isRequired,  
};
export default Services;
