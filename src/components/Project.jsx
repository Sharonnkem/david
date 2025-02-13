import { Link } from "react-router-dom";
import frame1 from '../images/frame1.jpg';
import frame2 from '../images/frame2.jpg';
import frame3 from '../images/frame3.jpg';
import frame4 from '../images/frame4.jpg';
import frame5 from '../images/frame5.jpg';
import "./project.css";


function Project() {
  return (
    <div className='jet2'>
      <h2>Projects</h2>
      <p>Below are some of the projects I have worked on. Please note that some projects are <br/>
      private and proprietary to the organizations I have collaborated with.</p>
      
        <div className='jet4'>
        <div className='jet1'>
            <div className='jet'>
            <Link to="/explore"><img src={frame1} alt="frame1"  /></Link>
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

        <div className='jet1'>
        <div className='jet'>
        <Link to="/explore1"><img src={frame2} alt="frame2"  /></Link>
            </div>
            <div className='jet5'>
                <h5>Personal website</h5>
                <a href="https://david-i7kg.vercel.app" target="_blank" rel="noopener noreferrer">
                          <p>https://david-i7kg.vercel.app</p>
                        </a>
            </div>
            <span className='tooltip-text'>ChitHub provides traffic enforcement agencies at both state and federal government levels 
with an end-to-end traffic enforcement and penalty management solution to keep cities 
safe and promote the right behaviors in road users and security.</span>
        </div>

        <div className='jet1'>
        <div className='jet'>
        <Link to="/explore2"><img src={frame3} alt="frame3"  /></Link>
            </div>
            <div className='jet5'>
                <h5>Authie</h5>
                <a href="https://auth-app-bice-nu.vercel.app/" target="_blank" rel="noopener noreferrer">
                          <p>https://auth-app-bice-nu.vercel.app/</p>
                        </a>
            </div>
            <span className='tooltip-text'>ChitHub provides traffic enforcement agencies at both state and federal government levels 
with an end-to-end traffic enforcement and penalty management solution to keep cities 
safe and promote the right behaviors in road users and security.</span>
        </div>

        <div className='jet1'>
        <div className='jet'>
        <Link to="/explore3"><img src={frame4} alt="frame4"  /></Link>
            </div>
            <div className='jet5'>
                <h5>Danfo</h5>
                <a href="https://danfo-admin.netlify.app/" target="_blank" rel="noopener noreferrer">
                          <p>https://danfo-admin.netlify.app/</p>
                        </a>
            </div>
            <span className='tooltip-text'>ChitHub provides traffic enforcement agencies at both state and federal government levels 
with an end-to-end traffic enforcement and penalty management solution to keep cities 
safe and promote the right behaviors in road users and security.</span>
        </div>

        <div className='jet1'>
        <div className='jet'>
        <Link to="/explore4"><img src={frame5} alt="frame5"  /></Link>
            </div>
            <div className='jet5'>
                <h5>Ballerholic</h5>
                <a href="still in design phase. " target="_blank" rel="noopener noreferrer">
                          <p>still in design phase. </p>
                        </a>
            </div>
            <span className='tooltip-text'>ChitHub provides traffic enforcement agencies at both state and federal government levels 
with an end-to-end traffic enforcement and penalty management solution to keep cities 
safe and promote the right behaviors in road users and security.</span>
        </div>

      </div>
    </div>
  )
}

export default Project;
