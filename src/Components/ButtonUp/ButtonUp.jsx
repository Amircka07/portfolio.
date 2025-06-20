import { useEffect, useState } from 'react';
import arrow_icon from "../../assets/arrow_icon.svg";
import './ButtonUp.css'; // без styles

export const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(document.documentElement.scrollTop > 350);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {isVisible && (
        <div onClick={scrollToTop} className="scrollToTopButton">
          <img src={arrow_icon} alt="Scroll to top" />
        </div>
      )}
    </div>
  );
};
