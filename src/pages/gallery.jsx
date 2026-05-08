import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoIosClose } from 'react-icons/io';
import './gallery.css';

const Gallery = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    '/media/images/galery1.jpg',
    '/media/images/galery2.jpg',
    '/media/images/galery3.jpg',
    '/media/images/galery4.jpg',
    '/media/images/galery5.jpg',
    '/media/images/galery6.jpg',
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  return (
    <main style={{ paddingTop: '100px' }}>
      <section className="section gallery-container">
        <h2>{t('gallery.title')}</h2>
        <p>{t('gallery.description')}</p>
        
        <div className="gallery-grid">
          {images.map((img, index) => (
            <div 
              key={index} 
              className="gallery-item"
              onClick={() => openLightbox(img)}
            >
              <img src={img} alt={`Gallery ${index + 1}`} className="gallery-image" />
            </div>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <IoIosClose />
            </button>
            <img src={selectedImage} alt="Enlarged" className="lightbox-image" />
          </div>
        </div>
      )}
    </main>
  );
};

export default Gallery;
