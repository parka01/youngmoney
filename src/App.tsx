import { Link, Outlet } from 'react-router-dom';
import DarkModeSlider from './components/DarkModeSlider;
import { useEffect, useRef } from 'react';
import { NavHashLink } from 'react-router-hash-link';

function App() {
  const cursorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log('useEffect running');
    console.log(cursorRef.current);
    const cursor = cursorRef.current;

    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    const handleMouseEnter = () => {
      cursor.classList.add('hover');
    };

    const handleMouseLeave = () => {
      cursor.classList.remove('hover');
    };

    const links = document.querySelectorAll('a');

    links.forEach((link) => {
      link.addEventListener('mouseenter', handleMouseEnter);
      link.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);

      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleMouseEnter);
        link.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <main id="wrap-main">
      <header id="wrap-header">
        <section id="wrap-top">
          <div className="top-text-motion">
            <span>#AHYOUNG PARK'S PORTFOLIO</span>
            <span>#AHYOUNG PARK'S PORTFOLIO</span>
            <span>#AHYOUNG PARK'S PORTFOLIO</span>
            <span>#AHYOUNG PARK'S PORTFOLIO</span>
            <span>#AHYOUNG PARK'S PORTFOLIO</span>
            <span>#AHYOUNG PARK'S PORTFOLIO</span>
            <span>#AHYOUNG PARK'S PORTFOLIO</span>
            <span>#AHYOUNG PARK'S PORTFOLIO</span>
            <span>#AHYOUNG PARK'S PORTFOLIO</span>
            <span>#AHYOUNG PARK'S PORTFOLIO</span>
          </div>
        </section>
        <div className="header">
          <h1>
            <Link to="/">🦄AHYOUNG's Portfolio💖✨</Link>
          </h1>
          <ul className="nav-gnb">
            <li>
              <NavHashLink smooth to="/#about">
                About
              </NavHashLink>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
            <Link to="/archive">Archive</Link>
          </ul>{' '}
          <DarkModeSlider />
          <div className="menu-hamburger">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              {/* !Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc. */}
              <path
                fill="#fff"
                d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
              />
            </svg>
          </div>
        </div>
      </header>

      <Outlet />
      <div className="cursor" ref={cursorRef}>
        <span className="cursor-pointer"></span>
      </div>
    </main>
  );
}

export default App;
