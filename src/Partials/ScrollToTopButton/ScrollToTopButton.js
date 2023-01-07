import React from 'react';
import './ScrollToTopButton.css';
import { BsChevronDoubleUp } from "react-icons/bs";


const ScrollToTopButton = () => {
  const [visible, setVisible] = React.useState(false);

  const handleScroll = () => {
    setVisible(window.pageYOffset > 600);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  if (!visible) {
    return null;
  }

  return (
    <button className="scroll-to-top-button" onClick={handleClick}> 
      <BsChevronDoubleUp/>
    </button>
  );
};

export default ScrollToTopButton;
// 