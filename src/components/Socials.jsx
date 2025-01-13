import AOS from 'aos';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import whatsapp1 from '../svg/whatsapp1.svg';
import twitter1 from '../svg/twitter1.svg';
import linkedin1 from '../svg/linkedin1.svg';
import vectorleft from '../svg/vectorleft.svg';
import vectorright from '../svg/vectorright.svg';
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
      <img src={whatsapp1} alt="whatsapp1" />
      </div>
      <div className='soc2'>
      <img src={twitter1} alt="twitter1" />
      </div>
      <div className='soc2'>
      <img src={linkedin1} alt="linkedin1" />
      </div>
      </div>
      <div>
      <button onClick={handleContactClick}>Contact Me</button>
        </div>
        <img src={vectorleft} alt="vectorleft" className="prev"/>
        <img src={vectorright} alt="vectorright" className="next"/>
    </div>
  );
}

export default Socials;
