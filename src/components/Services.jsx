import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import cctv from '../svg/cctv.svg';
import database from '../svg/database.svg';
import design from '../svg/design.svg';
import ux from '../svg/ux.svg';
import Rectangle54 from '../images/Rectangle54.png';
import Rectangle60 from '../images/Rectangle60.png';
import front from '../svg/front.svg';
import back from '../svg/back.svg';
import './services.css';
import PropTypes from 'prop-types'; 

function Services({ id }) {
  useEffect(() => {
    AOS.init();
  }, []);

  const navigate = useNavigate(); 

  const handleContactClick = () => {
    navigate('/explore'); 
  };


  useEffect(() => {
    const swiper = document.querySelector('.swiper');
    if (swiper && swiper.swiper) {
      swiper.swiper.params.navigation.prevEl = '.button-prev';
      swiper.swiper.params.navigation.nextEl = '.button-next';
      swiper.swiper.navigation.init();
      swiper.swiper.navigation.update();
    }
  }, []);

  return (
    <div className='services'>
      <h3 data-aos="fade-down">Services</h3>
      <div className='ser'>
        <div className='ser2' data-aos="fade-right">
          <div className='data'>
            <img src={database} alt="database" />
          </div>
          <div>
            <h5>Database Administration</h5>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur. Arcu sociis id pharetra in nulla mattis nec. Pulvinar in egestas vitae lectus..</p>
          </div>
        </div>

        <div className='ser2' data-aos="fade-left">
          <div className='data'>
            <img src={design} alt="design" />
          </div>
          <div>
            <h5>Backend Development</h5>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur. Arcu sociis id pharetra in nulla mattis nec. Pulvinar in egestas vitae lectus..</p>
          </div>
        </div>

        <div className='ser2' data-aos="fade-right">
          <div className='data'>
            <img src={cctv} alt="cctv" />
          </div>
          <div>
            <h5>ANPR Hardware Installation</h5>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur. Arcu sociis id pharetra in nulla mattis nec. Pulvinar in egestas vitae lectus..</p>
          </div>
        </div>

        <div className='ser2' data-aos="fade-left">
          <div className='data'>
            <img src={ux} alt="ux" />
          </div>
          <div>
            <h5>UX Design</h5>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur. Arcu sociis id pharetra in nulla mattis nec. Pulvinar in egestas vitae lectus..</p>
          </div>
        </div>
      </div>

      <div className='Project' id={id}>
        <h3 data-aos="zoom-in">Projects</h3>
        <div className='pro' data-aos="fade-up">
          <img src={back} alt="back" className="button-prev" />
          <Swiper modules={[Navigation]} spaceBetween={30} slidesPerView={1} loop={true} navigation={{ prevEl: '.button-prev', nextEl: '.button-next' }}>
            <SwiperSlide>
              <div className="pro1">
                <div className='img'><img src={Rectangle54} alt="Rectangle54" /></div>
                <div className="pro2">
                  <h3>Chithub back office solution</h3>
                  <p>Lorem ipsum dolor sit amet consectetur. Arcu sociis id pharetra in nulla mattis nec. Pulvinar in egestas vitae lectus.Lorem ipsum dolor sit amet consectetur. Arcu sociis id pharetra in nulla mattis nec. Pulvinar in egestas vitae lectus.Lorem ipsum dolor sit amet consectetur. Arcu sociis id pharetra in nulla mattis nec. Pulvinar in egestas vitae lectus.Lorem ipsum dolor sit amet consectetur. Arcu sociis id pharetra in nulla mattis nec. Pulvinar in egestas vitae lectus.Lorem ipsum dolor sit amet consectetur. Arcu sociis id pharetra in nulla mattis nec. Pulvinar in egestas vitae lectus. </p>
                  <button onClick={handleContactClick}>Learn more</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pro1">
                <div className='img'><img src={Rectangle60} alt="Rectangle60" /></div>
                <div className="pro2">
                  <h3>Chithub back office solution</h3>
                  <p>Lorem ipsum dolor sit amet consectetur. Arcu sociis id pharetra in nulla mattis nec. Pulvinar in egestas vitae lectus.Lorem ipsum dolor sit amet consectetur. Arcu sociis id pharetra in nulla mattis nec. Pulvinar in egestas vitae lectus.Lorem ipsum dolor sit amet consectetur. Arcu sociis id pharetra in nulla mattis nec. Pulvinar in egestas vitae lectus.Lorem ipsum dolor sit amet consectetur. Arcu sociis id pharetra in nulla mattis nec. Pulvinar in egestas vitae lectus.Lorem ipsum dolor sit amet consectetur. Arcu sociis id pharetra in nulla mattis nec. Pulvinar in egestas vitae lectus. </p>
                  <button onClick={handleContactClick}>Learn more</button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <img src={front} alt="front" className="button-next" />
        </div>
      </div>
    </div>
  );
}
Services.propTypes = {
  id: PropTypes.string.isRequired,  
};
export default Services;
