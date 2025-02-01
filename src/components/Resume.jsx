import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import eshett from "../svg/eshett.svg";
import './resume.css';


function Resume() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
      }, []);
  return (
    <div className="resume">

    <div className="address" data-aos="fade-up">

      <div className="abu">
        <p>Abuja, Nigeria.</p>
        <p>davideshett5@gmail.com</p>
      </div>

      <div className="tech" data-aos="fade-right">
        <h2>Technologies:</h2>
        <ul>
            <li>c#</li>
            <li>.net core</li>
            <li>Entityframework core</li>
            <li>Docker</li>
            <li>SqlServer</li>
            <li>Postgres</li>
            <li>Mongo Db</li>
            <li>Postman</li>
            <li>Azure Data Studio</li>
            <li>Rabbit Mq</li>
        </ul>
      </div>

      <div className="sill" data-aos="fade-left">
        <h2>Skills:</h2>
        <ul>
            <li>APNR Camera configuration</li>
            <li>Basic networking</li>
            <li>CCTV Installation</li>
            <li>End to end testing</li>
            <li>UI design</li>
            <li>Database Design</li>
            <li>Microservices</li>
            <li>Database Administration</li>
        </ul>
      </div>

    </div>


    <div className="exper">

        <div className="name3" data-aos="zoom-in">
            <div className="name1">
            <img src={eshett} alt="eshett" />
            </div>

            <div className="name2">
                <h3>Expert Backend Developer || UI Designer</h3>
                <p>Passionate .NET backend developer with expertise in API design, API integration, 
Relational and document databases, and containerization. I create efficient, scalable
solutions with a focus on clean, maintainable code.</p>
            </div>
        </div>


        <div className="mymy" data-aos="fade-up">
            <h2>Work Experience:</h2>

            <div className="mymy1">
                <h3>CHITHUB - <span> Backend Developer</span></h3>
                <h4>March 2022 - Present</h4>
            </div>
            <div className="ping">
            <p>ChitHub provides traffic enforcement agencies at both state and federal government levels 
with an end-to-end traffic enforcement and penalty management solution to keep cities 
safe and promote the right behaviors in road users and security. <br/><br/>
I installed and configured traffic monitoring cameras with remote access for diagnostics 
and maintenance, enabling seamless data transfer through HTTP and FTP log mechanisms. 
To ensure secure access, I implemented authentication and role-based authorization while 
also developing a watchlist system for tracking specific vehicles. I integrated SignalR for 
real-time notifications and built a task management system (Task Bin) for efficient workflow 
organization. Additionally, I developed an email notification system for critical updates and 
user communication. Leading the operations team in the field, I ensured the proper installation 
of sensing layers for efficient data flow.</p>
</div>

            <div className="mymy3">
                <span>Docker</span> 
                <span>C#</span> 
                <span>SqlServer</span> 
                <span>SignalR</span> 
                <span>Einar</span> 
                <span>Vidar</span> 
                <span>Vidar</span> 
                <span>RabbitMq</span> 
            </div>
        </div>

        <div className="mymy"  data-aos="fade-right">

            <div className="mymy1">
                <h3>CHITHUB - <span>  Hardware Installation technician</span></h3>
                <h4>March 2022 - Present</h4>
            </div>
            <div className="ping">
            <p>ChitHub provides traffic enforcement agencies at both state and federal government levels 
with an end-to-end traffic enforcement and penalty management solution to keep cities 
safe and promote the right behaviors in road users and security. <br/><br/>
I configured <strong>ANPR cameras</strong> and set up <strong>networking</strong> to ensure seamless communication between multiple devices. I installed and configured an <strong>FTP server</strong> on the processor (mini-computer) to facilitate efficient data transfer. Additionally, I provided remote access for support and <strong>troubleshooting</strong> while also handling onsite <strong>maintenance</strong> and diagnostics of hardware devices to ensure optimal system performance.</p>
</div>

            <div className="mymy3">
                <span>FileZilla Server</span> 
                <span>AnyDesk</span> 
                <span>Einar</span> 
                <span>Vidar</span> 
                <span>Hikvision</span> 
                <span>RJ45</span> 
                <span>Vidar</span> 
                <span>Crimper</span>
                <span>LAN Tester</span>
                <span>IP Scanner</span>
                <span>IIS Manager</span> 
            </div>
        </div>

        <div className="mymy"  data-aos="fade-left">

            <div className="mymy1">
                <h3>INEC - <span>  Backend Developer(Contract)</span></h3>
                <h4>Setpember 2023 - April 2024</h4>
            </div>
            <div className="ping">
            <p>The Independent National Electoral Commission (INEC) is Nigeria’s electoral body responsible for organizing and overseeing elections at the federal, state, and local government levels. It was established in 1998 to conduct free, fair, and credible elections in the country. <br/><br/>
            My work on the Election Result Management System for INEC involved designing and implementing a secure and scalable backend for managing election results efficiently. I developed a secure <strong>OTP login</strong> system for INEC staff, ensuring safe authentication and controlled access. Additionally, I implemented role-based access control for both the admin and mobile applications, ensuring that users only had permissions relevant to their roles. <br/>
            To enhance data retrieval, I built a smart <strong>search</strong> functionality that allows users to find election-related data using <strong>keywords</strong>. I also designed and managed the <strong>database</strong>, handling updates, <strong>migrations</strong>, and optimizations to ensure system integrity.<br/>
            You developed a scheduled email <strong>notification</strong> system using SendGrid, enabling automated alerts for key events. To improve transparency, you implemented an <strong>audit trail</strong> system to log user activities on the admin app, ensuring accountability.</p>
</div>

            <div className="mymy3">
                <span>Docker</span> 
                <span>C#</span> 
                <span>SqlServer</span> 
                <span>MongoDb</span> 
                <span>SendGrid</span> 
                <span>RabbitMq</span> 
                <span>SignalR</span> 
                <span>HTML</span> 
            </div>
        </div>

        <div className="mymy" data-aos="fade-up">

            <div className="mymy1">
                <h3>Application Laboratory - <span> Volunteer Tutor</span></h3>
                <h4>April 2022 - October 2022</h4>
            </div>
            <div className="ping">
            <p>Application Laboratory is a organisation dedicated to training and employing software development enthusiasts, equipping them with industry-relevant skills to thrive in the tech ecosystem. It provides structured learning programs designed to develop expertise in various technology fields. <br/><br/>
            As a Tutor at Application Laboratory, I taught backend development with C#, guiding students through a well-structured curriculum. I mentored them throughout their learning journey, providing hands-on support, code reviews, and real-world insights to help them build practical skills and confidence in backend development.</p>
</div>
            
        </div>
    </div>
    </div>
  )
}

export default Resume
