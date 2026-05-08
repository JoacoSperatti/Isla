import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import './Carousel.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Basic touch swipe logic
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="carousel-container" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
      <div className="carousel-wrapper">
        <div 
          className="carousel-slide-inner" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <div key={index} className="carousel-item">
              <img src={img} alt={`Slide ${index}`} className="carousel-image" />
            </div>
          ))}
        </div>
      </div>
      
      {images.length > 1 && (
        <>
          <button className="carousel-button prev" onClick={prevSlide} aria-label="Previous slide">
            <IoIosArrowBack />
          </button>
          <button className="carousel-button next" onClick={nextSlide} aria-label="Next slide">
            <IoIosArrowForward />
          </button>
          
          <div className="carousel-dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
