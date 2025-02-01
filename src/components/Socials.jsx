import AOS from 'aos';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import whatsapp1 from '../svg/whatsapp1.svg';
import twitter1 from '../svg/twitter1.svg';
import linkedin1 from '../svg/linkedin1.svg';
import github from '../svg/github1.svg';
import Vectorleft from '../svg/Vectorleft.svg';
import Vectorright from '../svg/Vectorright.svg';
import './socials.css';

function Socials() {
  useEffect(() => {
    AOS.init();
  }, []);


  const navigate = useNavigate(); 

  const handleContactClick = () => {
    navigate('/contact'); 
  };


  return (
    <div className='soc' data-aos="fade-up">
      <p>How can I contribute to your organisation&#39;s success?</p>
      <h3>let&#39;s build something amazing!</h3>
      <div className='soc1' data-aos="fade-up">

            <div className='soc2'>
        <a href="https://wa.me/qr/LNKSWXUQBTVGJ1" target="_blank" rel="noopener noreferrer">
          <img src={whatsapp1} alt="whatsapp1" />
        </a>
      </div>

      <div className='soc2'>
        <a href="https://x.com/EshettDavid" target="_blank" rel="noopener noreferrer">
          <img src={twitter1} alt="twitter1" />
        </a>
      </div>

      <div className='soc2'>
        <a href="https://www.linkedin.com/in/eshettdavid/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin1} alt="linkedin1" />
        </a>
      </div>

      <div className='soc3'>
        <a href="https://github.com/davideshett" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="github" />
        </a>
      </div>

      </div>
      <div>
      <button onClick={handleContactClick}>Contact Me</button>
        </div>
        <img src={Vectorleft} alt="vectorleft" className="prev"/>
        <img src={Vectorright} alt="vectorright" className="next"/>
    </div>
  );
}

export default Socials;
