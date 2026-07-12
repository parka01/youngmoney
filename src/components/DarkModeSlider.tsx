import React from 'react';
import './DarkMode.css';

const DarkModeSlider = () => {
  const setDarkMode = () => {
    document.querySelector('#wrap-main')?.setAttribute('data-theme', 'dark');
    localStorage.setItem('selectedTheme', 'dark');
    console.log('set dark mode');
  };
  const setLightMode = () => {
    document.querySelector('#wrap-main')?.setAttribute('data-theme', 'light');
    localStorage.setItem('selectedTheme', 'light');
    console.log('set light mode');
  };
  const selectedTheme = localStorage.getItem('selectedTheme');

  if (selectedTheme === 'dark') {
    setDarkMode();
  }

  const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  return (
    <div className="dark-mode">
      라이트모드 & 다크모드
      <label className="switch-track" htmlFor="darkmode-toggle">
        <input
          type="checkbox"
          className="slide-checkbox"
          id="darkmode-toggle"
          onChange={toggleTheme}
          defaultChecked={selectedTheme === 'dark'}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default DarkModeSlider;
