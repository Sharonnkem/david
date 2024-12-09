import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import david from '../images/david.jpg';
import wave from '../images/wave.png';
import INEC from '../images/INEC.png';
import CHITHUB from '../images/CHITHUB.png';
import KASTLEA from '../images/KASTLEA.png';
import SERVICOM from '../images/SERVICOM.png';
import postgress from '../svg/postgress.svg';
import c from '../svg/c.svg';
import file from '../svg/file.svg';
import docker from '../svg/docker.svg';
import sql from '../svg/sql.svg';
import cctv from '../svg/cctv.svg';
import mongo from '../svg/mongo.svg';
import jet from '../svg/jet.svg';
import './landingPage.css';

function LandingPage() {

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const handleScrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='landing'>
      <div className='profile' data-aos="fade-down">
        <img src={david} alt="Profile" className="profile2" />
      </div>

      <div className='intro' data-aos="fade-right">
        <h3 className='heading'>
          <img src={wave} alt="wave" className="wave" />
          Hi, I&#39;m <span>David Eshett</span>
        </h3>
        <h5>
          Backend .NET Developer creating secure, scalable APIs and backend solutions.
          <br />
          Let&#39;s turn ideas into reality!
        </h5>

        <div className='tools' data-aos="zoom-in">
          <div className='tools1'><img src={postgress} alt="postgress" /></div>
          <div className='tools1'><img src={c} alt="c" /></div>
          <div className='tools1'><img src={file} alt="file" /></div>
          <div className='tools1'><img src={docker} alt="docker" /></div>
          <div className='tools1'><img src={sql} alt="sql" /></div>
          <div className='tools1'><img src={cctv} alt="cctv" /></div>
          <div className='tools1'><img src={mongo} alt="mongo" /></div>
          <div className='tools1'><img src={jet} alt="jet" /></div>
        </div>

        <div data-aos="fade-up">
          <button onClick={handleScrollToServices}>&#123; Explore Projects &#125;</button>
        </div>
      </div>

      <div className='jobs' data-aos="fade-left">
        <h5>Some organisations I’ve worked with</h5>
        <div className='jobs1'>
          <div className='jas1' data-aos="flip-up">
            <div className='jas'><img src={KASTLEA} alt="KASTLEA" /></div>
            <h5>SERVICOM</h5>
          </div>
          <div className='jas1' data-aos="flip-up" data-aos-delay="200">
            <div className='jas'><img src={INEC} alt="INEC" /></div>
            <h5>INEC</h5>
          </div>
          <div className='jas1' data-aos="flip-up" data-aos-delay="400">
            <div className='jas'><img src={CHITHUB} alt="CHITHUB" /></div>
            <h5>CHITHUB</h5>
          </div>
          <div className='jas1' data-aos="flip-up" data-aos-delay="600">
            <div className='jas'><img src={SERVICOM} alt="SERVICOM" /></div>
            <h5>KASTLEA</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
