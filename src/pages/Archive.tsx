import { useEffect, useState } from 'react';
import './Archive.css';
import chair from '../assets/images/chair.png'
import console from '../assets/images/console.png'
import frameRectangle from '../assets/images/frame_gold_rectangle.png'
import frameRectangle2 from '../assets/images/frame_gold_rectangle_02.png'
import frameRectangle3 from '../assets/images/frame_gold_rectangle_03.png'
import frameRectangle4 from '../assets/images/frame_gold_rectangle_04.png'
import frameHeart from '../assets/images/frame_gold_heart.png'
import img1 from '../assets/images/scholarship.jpg'
import img2 from '../assets/images/artwork.jpg'
import img3 from '../assets/images/presentation.jpg'
import img4 from '../assets/images/intern.jpg'
import main from '../assets/images/main.jpg'
import main2 from '../assets/images/main2.png'




function Archive() {
  const [scrollAmount, setScrollAmount] = useState(0);
  const leftMovement = scrollAmount * 0.5;

  useEffect(() => {
    const handleScroll = () => {
      setScrollAmount(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="wrap-archive">
      <div className="box-wall">
        <div className='chair'>
          <img src={chair} alt="chair image" />
        </div>
        <div className='console'>
          <img src={console} alt="console image" />
        </div>
        <div
          className="wall"
          style={{ transform: `translateX(-${leftMovement}px)` }}
        >
          <div className="item">
            <div className="frame-small frame1">
              <div>
                <img
                  className="photo"
                  src={img1}
                  alt="image"
                />
                <img
                  className="frame"
                  src={frameRectangle}
                  alt="gold frame image"
                />
              </div>
              <div className='photo-description'>
장학금 수여 
              </div>
            </div>
            <div className="frame-small frame2">
              <img
                className="photo"
                src={img2}
                alt="image"
              />
              <img
                className="frame"
                src={frameRectangle2}
                alt="gold frame image"
              />
            </div>
            <div className="frame-small frame3">
              <img
                className="photo"
                src={img3}
                alt="image"
              />
              <img
                className="frame"
                src={frameRectangle3}
                alt="gold frame image"
              />
            </div>
            <div className="frame-small frame4">
              <img
                className="photo"
                src={img4}
                alt="image"
              />
              <img
                className="frame"
                src={frameRectangle4}
                alt="gold frame image"
              />
            </div>
            <div className="frame-small heart">
              <img
                className="photo"
                src={main}
                alt="image"
              />
              <img
                className="frame"
                src={frameHeart}
                alt="gold frame image"
              />
            </div>
            <div className="frame-small frame5">
              <img
                className="photo"
                src={main2}
                alt="image"
              />
              <img
                className="frame"
                src={frameRectangle3}
                alt="gold frame image"
              />
            </div>
            <div className="frame-small frame6">
              <img
                className="photo"
                src={img4}
                alt="image"
              />
              <img
                className="frame"
                src={frameRectangle4}
                alt="gold frame image"
              />
            </div>
          </div>
          {/* <img src="../src/images/wall_mint.png" alt="mint wall image" /> */}
        </div>
      </div>
    </div>
  );
}
export default Archive;
