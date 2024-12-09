import { useState } from 'react';
import './contact.css';




function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! Your message has been received.');
    setFormData({ email: '', phone: '', message: '' }); 
  };

  return (
    <div className='cont'>
      <div className='cont1'>
        <h3>Contact Me</h3>
        <p>
          I&#39;m always excited to connect, collaborate, and explore new opportunities!<br/>
          Whether you have a project in mind, need backend expertise, or just want to say hi, feel free to reach out.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className='cont2'>
        <div className='cont3'>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email address"
            required
          />
        </div>

        <div className='cont3'>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone number"
            required
          />
        </div>
        </div>

        <div className='cont4'>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className='cont5'>
        <button type="submit">Send</button>
        </div>
        
      </form>
    </div>
  );
}

export default Contact;
