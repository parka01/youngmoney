import { useEffect, useState } from 'react';
import './Archive.css';
import chair from '../assets/images/chair.png'
import frameRectangle from '../assets/images/frame_gold_rectangle.png'
import frameRectangle2 from '../assets/images/frame_gold_rectangle_02.png'
import frameRectangle3 from '../assets/images/frame_gold_rectangle_03.png'
import frameRectangle4 from '../assets/images/frame_gold_rectangle_04.png'




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
        <div
          className="wall"
          style={{ transform: `translateX(-${leftMovement}px)` }}
        >

          <div className="item">
            <div className="frame-small frame1">
              <img
                className="photo"
                src="../assets/images/newbtria_portfolio.png"
                alt="image"
              />
              <img
                className="frame"
                src={frameRectangle}
                alt="gold frame image"
              />
            </div>
            <div className="frame-small frame2">
              <img
                className="photo"
                src="../assets/images/newbtria_portfolio.png"
                alt="image"
              />
              <img
                className="frame"
                src={frameRectangle2}
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
