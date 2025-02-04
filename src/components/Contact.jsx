import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import phone from "../svg/phone.svg";
import mail from "../svg/mail.svg";
import bird from "../svg/bird.svg";
import insta from "../svg/insta.svg";
import linked from "../svg/linked.svg";
import "./contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(""); 

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
  
    const payload = {
      fullName: formData.name.trim(),
      email: formData.email.trim(),
      phoneNumber: String(formData.phone).trim(),
      message: formData.message.trim(),
    };
  
    console.log("Sending data:", JSON.stringify(payload));
  
    let response;
  
    try {
      response = await fetch("https://eshett.runasp.net/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        throw new Error(result.message || "Something went wrong!");
      }
  
      alert("Thank you for reaching out! Your message has been received.");
      setFormData({ name: "", email: "", phone: "", message: "" });
  
    } catch (err) {
      console.error("API Error:", err);
  
      if (response) { 
        try {
          const errorResponse = await response.text();
          console.error("Server response:", errorResponse);
        } catch (errorReadErr) {
          console.error("Error reading response:", errorReadErr);
        }
      }
  
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="cont">
      <div className="cont1" data-aos="fade-right">
        <h3>Contact Me</h3>
        <p>
          I&#39;m always excited to connect, collaborate, and explore new opportunities!<br />
          Whether you have a project in mind, need backend expertise, or just want to say hi, feel free to reach out.
        </p>
      </div>

      <div className="card2" data-aos="zoom-in">
        <form onSubmit={handleSubmit}>
          <div className="cont2">
            <div className="cont3" data-aos="fade-left">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter full name"
                required
              />
            </div>

            <div className="cont3" data-aos="fade-right">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                required
              />
            </div>

            <div className="cont3" data-aos="fade-left">
              <label>Phone number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                required
              />
            </div>
          </div>

          <div className="cont3" data-aos="fade-up">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message..."
              required
            ></textarea>
          </div>

          {error && <p className="error">{error}</p>} 

          <div className="cont5" data-aos="flip-up">
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>

        <div className="card" data-aos="zoom-in">
          <h2>Abuja, Nigeria</h2>
          <p>Available to work remotely</p>
          <div>
            <div className="card1" data-aos="fade-right">
              <img src={phone} alt="phone" />+2348137464039
            </div>

            <div className="card1" data-aos="fade-left">
              <img src={mail} alt="mail" />davideshett5@gmail.com
            </div>

            <div className="card1" data-aos="fade-right">
              <img src={bird} alt="bird" />@EshettDavid
            </div>

            <div className="card1" data-aos="fade-left">
              <img src={insta} alt="insta" />@eshettdavid
            </div>

            <div className="card1" data-aos="fade-right">
              <img src={linked} alt="linked" />David Eshett
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
