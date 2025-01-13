import david from "../../images/david.jpg";
import overview from '../../svg/overview.svg';
import hero from '../../svg/hero.svg';
import services from '../../svg/services.svg';
import projects from '../../svg/projects.svg';
import contact from '../../svg/contact.svg';
import media from '../../svg/media.svg';
import skills from '../../svg/skills.svg';
import organisation from '../../svg/organisation.svg';
import gallery from '../../svg/gallery.svg';
import logout from '../../svg/logout.svg';






import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="user-info">
        <div className='profile' data-aos="fade-down">
                <img src={david} alt="Profile" className="profile3" />
              </div>
        <div className="name">
        <h3>David Eshett</h3>
        <p>Administrator</p>
        </div>
      </div>
      <div className="nav">
        <ul>
          <li><a href="/"><img src={overview} alt="overview" />Overview</a></li>
          <li><a href="/hero"><img src={hero} alt="hero" />Hero Section</a></li>
          <li><a href="/services"><img src={services} alt="services" />Services</a></li>
          <li><a href="/projects"><img src={projects} alt="projects" />Projects</a></li>
          <li><a href="/contact"><img src={contact} alt="contact" />Contact</a></li>
          <li><a href="/social-media"><img src={media} alt="media" />Social Media</a></li>
          <li><a href="/skills"><img src={skills} alt="skills" />Skills</a></li>
          <li><a href="/organisation"><img src={organisation} alt="organisation" />Organisation</a></li>
          <li><a href="/gallery"><img src={gallery} alt="gallery" />Gallery</a></li>
        </ul>
      </div>
      <button className="logout"><img src={logout} alt="logout" />Logout</button>
    </div>
  );
};

export default Sidebar;
