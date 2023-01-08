import React, { useState, useEffect } from 'react';
import './ImageGrid.css'
import { FiPlus } from "react-icons/fi";
import { flexRowCenter } from '../../Assets/Style/Flex';

const ImageGrid = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://picsum.photos/v2/list?limit=9');
      const data = await response.json();
      setImageUrls(data.map(item => item.download_url));
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const handleImageClick = (url) => {
    setSelectedImage(url);
    setShowOverlay(true);
  };

  const handleOverlayClose = () => {
    setShowOverlay(false);
  };

  if (isLoading) {
    return (
      <div className='container p-5' style={flexRowCenter}>
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
    );
  }

  return (
    <>
      <div className="image-grid d-flex flex-wrap">
        {
          imageUrls.map((url, index) => {
            return (
                <div className="img col-md-4 col-12 p-2"   onClick={() => handleImageClick(url) }>
                    <img src={url} alt={` ${index + 1}`}  style={{width : '100%'}} loading="lazy" />
                    <div className='img-hover' style={flexRowCenter}>
                        <div style={{...flexRowCenter, width : '30px' , height : '30px', borderRadius : '50%' , backgroundColor : "#fff" ,color :"#F27289"}}>
                            <FiPlus/>
                        </div>
                    </div>
                </div>
            //   
            );
          })
        }
      </div>
      { showOverlay && (
  <div className="overlay d-flex flex-column  align-items-center justify-content-center position-fixed w-100 h-100" style={{ top: 0, left: 0, backgroundColor: 'rgba(0,0,0,0.8)',zIndex : 9,backdropFilter : 'blur(5px)' }}>
    
      <img src={selectedImage} alt="Selected" onClick={handleOverlayClose} style={{width : '50%'}} className='mt-5 '/>
      <button className="btn btn-primary " onClick={handleOverlayClose}>Fermer</button>
    
  </div>
) }

    </>
  );
};

export default ImageGrid;
