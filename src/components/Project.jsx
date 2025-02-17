import { useEffect } from 'react';
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import frame1 from '../svg/frame1.svg';
import frame2 from '../svg/frame2.svg';
import frame3 from '../svg/frame3.svg';
import frame4 from '../svg/frame4.svg';
import frame5 from '../svg/frame5.svg';
import "./project.css";


function Project() {

    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

  return (
    <div className='jet2'>
      <h2 data-aos="fade-down">Projects</h2>
      <p data-aos="fade-up">Below are some of the projects I have worked on. Please note that some projects are <br/>
      private and proprietary to the organizations I have collaborated with.</p>
      
        <div className='jet4'>
        <div className='jet1' data-aos="fade-up">
            <div className='jet'>
            <Link to="/explore"><img src={frame1} alt="frame1" className='dav' /></Link>
            </div>
            <div className='jet5'>
                <h5>Chithub</h5>
                <a href="https://www.chithub.com.ng" target="_blank" rel="noopener noreferrer">
                          <p>https://www.chithub.com.ng</p>
                        </a>
            </div>
            <span className='tooltip-text'>ChitHub provides traffic enforcement agencies at both state and federal government levels 
with an end-to-end traffic enforcement and penalty management solution to keep cities 
safe and promote the right behaviors in road users and security.</span>
        </div>

        <div className='jet1' data-aos="fade-up" data-aos-delay="100">
        <div className='jet'>
        <Link to="/explore1"><img src={frame2} alt="frame2" className='dav' /></Link>
            </div>
            <div className='jet5'>
                <h5>Personal website</h5>
                <a href="https://david-i7kg.vercel.app" target="_blank" rel="noopener noreferrer">
                          <p>https://david-i7kg.vercel.app</p>
                        </a>
            </div>
            <span className='tooltip-text'>This portfolio showcases my expertise as a .NET Backend Developer, highlighting a range of projects that demonstrate my ability to design and implement scalable, high-performance backend systems. It features my work in building RESTful APIs, authentication and authorization systems, cloud-based solutions, and database-driven applications.</span>
        </div>

        <div className='jet1' data-aos="fade-up" data-aos-delay="200">
        <div className='jet'>
        <Link to="/explore2"><img src={frame3} alt="frame3" className='dav' /></Link>
            </div>
            <div className='jet5'>
                <h5>Authie</h5>
                <a href="https://auth-app-bice-nu.vercel.app/" target="_blank" rel="noopener noreferrer">
                          <p>https://auth-app-bice-nu.vercel.app/</p>
                        </a>
            </div>
            <span className='tooltip-text'>Authie is an authentication project designed to provide a seamless and secure user management experience. It supports OTP-based signup, email confirmation, and comprehensive account management, ensuring user security and convenience.</span>
        </div>

        <div className='jet1' data-aos="fade-up" data-aos-delay="300">
        <div className='jet'>
        <Link to="/explore3"><img src={frame4} alt="frame4" className='dav' /></Link>
            </div>
            <div className='jet5'>
                <h5>Danfo</h5>
                <a href="https://danfo-admin.netlify.app/" target="_blank" rel="noopener noreferrer">
                          <p>https://danfo-admin.netlify.app/</p>
                        </a>
            </div>
            <span className='tooltip-text'>Danfo enables citizens to report traffic offenses in real time, enhancing road safety and law enforcement efficiency. It provides a seamless platform for submitting reports, including offender details, location data, and media evidence. Law enforcement agencies can review, verify, and take action on reported violations, ensuring swift and effective enforcement.</span>
        </div>

        <div className='jet1' data-aos="fade-up" data-aos-delay="400">
        <div className='jet'>
        <Link to="/explore4"><img src={frame5} alt="frame5" className='dav' /></Link>
            </div>
            <div className='jet5'>
                <h5>Ballerholic</h5>
                <a href="still in design phase. " target="_blank" rel="noopener noreferrer">
                          <p>still in design phase. </p>
                        </a>
            </div>
            <span className='tooltip-text'>Ballerholic is a comprehensive platform designed to manage and analyze player and team performance in basketball competitions. The system provides real-time and historical statistics, tracks game results, and offers insights to players, coaches, and analysts.</span>
        </div>

      </div>
    </div>
  )
}

export default Project;
