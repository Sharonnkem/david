import { useLocation, useNavigate } from 'react-router-dom';
import whatsapp from '../svg/whatsapp.svg';
import twitter from '../svg/twitter.svg';
import linkedin from '../svg/linkedin.svg';
import github from '../svg/github.svg';
import navigateback from '../svg/navigateback.svg';
import './navbar.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLandingPage = location.pathname === '/'; 

  const handleNavigation = () => {
    navigate('/'); 
  };

  return (
    <nav>
      {isLandingPage && (
        <div className='socials'>
          <img src={whatsapp} alt="whatsapp" />
          <img src={twitter} alt="twitter" />
          <img src={linkedin} alt="linkedin" />
          <img src={github} alt="github" />
        </div>
      )}

      {!isLandingPage && (
        <div className='navi' onClick={handleNavigation}>
          <img src={navigateback} alt="navigateback" />
        </div>
      )}

      <div className='cv'>
        <div className='cv2'>
          <p>CV</p>
        </div>
        <div className='cv1'>
          <p>davideshett5@gmail.com</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;