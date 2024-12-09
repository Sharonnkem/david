import gallery1 from '../images/gallery1.png';
import gallery2 from '../images/gallery2.png';
import gallery3 from '../images/gallery3.png';
import gallery4 from '../images/gallery4.png';
import './pictures.css';





function Pictures() {
  return (
    <div className='pic'>
      <div className='pic2'>
      <h3>Gallery</h3>
      <p>Lorem ipsum dolor sit amet consectetur. Arcu sociis id pharetra in nulla mattis nec. Pulvinar in egestas vitae lectus.</p>
      </div>  
      
      <div className='pic1'>
      <img src={gallery1} alt="gallery1" />
      <img src={gallery2} alt="gallery2" />
      <img src={gallery3} alt="gallery3" />
      <img src={gallery4} alt="gallery4" />
      <img src={gallery1} alt="gallery1" />
      <img src={gallery2} alt="gallery2" />
      <img src={gallery3} alt="gallery3" />
      <img src={gallery4} alt="gallery4" />
      <img src={gallery1} alt="gallery1" />
      <img src={gallery2} alt="gallery2" />
      <img src={gallery3} alt="gallery3" />
      <img src={gallery4} alt="gallery4" />
      <img src={gallery3} alt="gallery3" />
      <img src={gallery4} alt="gallery4" />
      </div>
    </div>
  );
}

export default Pictures;
