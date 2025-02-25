import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import group from '../svg/group.svg';
import "./pictures.css";
import Footer from "./Footer";

function Pictures() {
  const [galleryImages, setGalleryImages] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  const aosEffects = [
    "fade-up", "fade-down", "fade-left", "fade-right",
    "flip-left", "flip-right", "zoom-in", "zoom-out",
    "fade-up", "fade-down", "fade-left", "fade-right",
    "zoom-in-up", "zoom-in-down"
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const fetchGalleryImages = async () => {
      try {
        const response = await fetch("https://eshett.runasp.net/api/Gallery");
        if (!response.ok) {
          throw new Error(`Failed to fetch images: ${response.statusText}`);
        }

        const data = await response.json(); 
        setGalleryImages(data.data || []); 
      } catch (err) {
        console.error("Error fetching gallery images:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryImages();
  }, []);

  return (
    <div className="view">
    <div className="pic" data-aos="fade-up">
      <div className="pic2" data-aos="zoom-in">
        <h3>Gallery</h3>
        <p>
        A collection of my hands-on work in installing, configuring, and integrating enforcement technologies with powerful backend systems.        </p>
                  <div className='gup'><img src={group} alt="group" /></div>
        
      </div>

      {loading && <p>Loading images...</p>}
      {error && <p className="error">{error}</p>}

      <div className="pic1">
        {galleryImages.length > 0 ? (
          galleryImages.map((image, index) => (
            <img
              key={image.id}
              src={image.imageUrl} 
              alt={`Gallery Image ${image.id}`}
              className="pic1img"
              data-aos={aosEffects[index % aosEffects.length]} 
              onError={(e) => (e.target.style.display = "none")}
            />
          ))
        ) : (
          !loading && <p>No images available.</p>
        )}
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default Pictures;
