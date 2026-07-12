import { useEffect, useState } from 'react';
import './Archive.css';

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
        <div
          className="wall"
          style={{ transform: `translateX(-${leftMovement}px)` }}
        >
          <div className="item">
            <div className="frame-small heart">
              <img
                className="photo"
                src="../src/images/newbtria_portfolio.png"
                alt=""
              />
              <img
                className="frame"
                src="../src/images/frame_gold_rectangle.png"
                alt=""
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
