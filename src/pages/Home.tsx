import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the entry styles
import { Swiper, SwiperSlide } from 'swiper/react';
import htmlIcon from '../assets/images/icon_html.png';
import cssIcon from '../assets/images/icon_css.png';
import jsIcon from '../assets/images/icon_js.png';
import photoshopIcon from '../assets/images/icon_photoshop.png';
import illustratorIcon from '../assets/images/icon_illustrator.png';
import premiereIcon from '../assets/images/icon_premiere.png';
import chatGPTIcon from '../assets/images/icon_chatgpt.png';
import inDesignIcon from '../assets/images/icon_indesign.png';
import coverCheese from '../assets/images/cheese_scone.png';
import coverBetterMonday from '../assets/images/better_monday_banner.png';
import './styles.css';
import 'swiper/css';
import 'swiper/css/pagination';
import meter from '../assets/images/meter.png';
import meterWhite from '../assets/images/meter_white.png';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

function Home() {
  const selectedTheme = localStorage.getItem('selectedTheme');
  const words = [
    '소통',
    '반응형',
    '웹 표준',
    '효율성',
    '관리성',
    '타당성',
    '심미성',
    '상호작용',
    '공동작업',
  ];
  const [index, setIndex] = useState(0);
  const [scrollYAmount, setScrollYAmount] = useState(0);
  const rotateMovement = scrollYAmount * 0.05;

  useEffect(() => {
    AOS.init({
      // Global settings:
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  useEffect(() => {
    // Set up the 900ms interval
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 900);

    // Clean up the interval when the component unmounts to prevent memory leaks
    return () => clearInterval(interval);
  }, [words.length]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollYAmount(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <main
        className="banner box-glass"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h1 className="headline">
          <span className="random">{words[index]}</span>을 생각하는 웹 퍼블리셔
          입니다.
        </h1>
        <video src="./videos/banner.mp4" loop autoPlay muted></video>
      </main>
      <div className="box-meter">
        <div
          className="meter"
          style={{ transform: `rotate(${rotateMovement}deg)` }}
        >
          {selectedTheme === 'light' ? (
            <img src={meter} alt="meter image" />
          ) : (
            <img src={meterWhite} alt="meter image" />
          )}
        </div>
      </div>

      {/* ---- SECTION ABOUT ---- */}
      <section id="section-about">
        <span className="title">
          "감성과 경험을 연결하는 웹 퍼블리셔 박아영입니다."
        </span>
        <div
          className="box-flex center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="box-glass half col">
            <div className="selfie">
              <video src="./videos/selfie.mp4" muted loop autoPlay></video>
            </div>
            <h2>
              안녕하세요,
              <br />
              기초부터 차곡차곡 다져나가며 성장하는 웹 퍼블리셔입니다.
            </h2>
            <p className="about-me">
              프론트엔드 개발자로 일하며 화면을 멋지게 구성하는 웹 퍼블리셔
              직업에 푹 빠졌습니다. 생활속 흥미로운 모습을 화면상에 구현하기
              위해 고민합니다. 탄탄한 기술과 근무경험을 활용하여 불가능에서
              가능을 시각적으로 보여드리겠습니다.
            </p>
          </div>
          <div className="box-glass half col">
            <ul>
              <li className="list-history">
                <div className="date">2026.07.13</div>
                <div className="detail-info">
                  <div className="history">나래디자인학원 수료</div>
                  <div className="description">
                    브랜드 아이덴티티 UI/UX 포트폴리오 작업 및 웹사이트 구현
                  </div>
                </div>
              </li>
              <div className="line-break"></div>
              <li className="list-history">
                <div className="date">2026.07.03</div>
                <div className="detail-info">
                  <div className="history">웹디자인개발기능사 취득</div>
                  <ul className="list-icon">
                    <li>
                      <img src={htmlIcon} alt="html icon image" />
                    </li>
                    <li>
                      <img src={cssIcon} alt="css icon image" />
                    </li>
                    <li>
                      <img src={jsIcon} alt="javascript icon image" />
                    </li>
                    <li>
                      <img src={illustratorIcon} alt="illustrator icon image" />
                    </li>
                    <li>
                      <img src={photoshopIcon} alt="photoshop icon image" />
                    </li>
                  </ul>
                  <div className="description">
                    웹 디자인과 프론트엔드 구현에 대한 기본기를 탄탄하게
                    갖추었습니다. UI 설계부터 HTML, CSS, JavaScript를 이용한
                    퍼블리싱까지 경험하며, 디자인 의도를 정확하게 구현하는 것을
                    목표로 합니다.
                  </div>
                </div>
              </li>
              <div className="line-break"></div>
              <li className="list-history">
                <div className="date">2026.06.26</div>
                <div className="detail-info">
                  <div className="history">컴퓨터그래픽기능사 취득</div>
                  <ul className="list-icon">
                    <li>
                      <img src={inDesignIcon} alt="indesign icon" />
                    </li>
                    <li>
                      <img src={illustratorIcon} alt="illustrator icon image" />
                    </li>
                    <li>
                      <img src={photoshopIcon} alt="photoshop icon image" />
                    </li>
                  </ul>
                  <div className="description">
                    Adobe Photoshop과 Illustrator, InDesign을 활용한 그래픽 제작
                    역량을 갖추었으며, 이를 바탕으로 사용성과 심미성을 모두
                    고려한 UI를 구현합니다.
                  </div>
                </div>
              </li>
              <div className="line-break"></div>
              <li className="list-history">
                <div className="date">2016.05</div>
                <div className="detail-info">
                  <div className="history">
                    Fashion Institute of Technology 졸업
                  </div>
                  <div className="description">액세서리 학과</div>
                </div>
              </li>
              <div className="line-break"></div>
              <li className="list-history">
                <div className="date">2016.05</div>
                <div className="detail-info">
                  <div className="history">
                    State University of New York college at Buffalo 졸업
                  </div>
                  <div className="description">
                    Fashion & textile technology 학과
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---- SECTION BRAND ---- */}
      <section id="section-brand">
        <div
          className="brand-identity box-flex"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <div className="box-flex media">
            <video src="./videos/media_pacade.mp4" autoPlay muted loop></video>
          </div>
          <div className="box-flex col media-info">
            <div>BI/BX guide</div>
            <h1>화장품 브랜드 'newB.tria'</h1>
            <p>
              newB.tria(뉴비트리아)는 부산 낙동강 하구에서 폭발적으로 늘어나
              생태계를 위협하는 뉴트리아를 활용하는 사업에서 출발하게 된
              뷰티브랜드 기업입니다. 깨끗한 낙동강 하구에서 얻을 수 있는 자연
              친화적 원료를 기반으로 한 화장품을 연구 및 개발하고 있습니다.
            </p>
            <a
              href="https://parka01.github.io/brand-portfolio"
              target="_blank"
              className="btn-view"
            >
              View BI/BX guide
              <div className="arrow-button"></div>
            </a>
          </div>
        </div>
        <div
          className="brand-identity  box-flex col-reverse"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          <div className="box-flex col media-info">
            <div>
              <span className="label-blue">반응형</span>Website
            </div>
            <h1>화장품 브랜드 'newB.tria'</h1>
            <p>
              newB.tria의 정체성을 담은 브랜드 아이덴티티 작업을 기반으로 만든
              웹사이트입니다. <br />
              플로깅 행사, 학생증 인증 행사 등 다양한 행사는 물론 통신사와
              결합한 혜택도 제공하고 있습니다.
              <br />
              어떤 환경에서도 완벽하게 상호작용적인 UI/UX를 경험할 수 있도록{' '}
              <b>반응형</b>으로 제작하였습니다.
            </p>
            <a
              href="https://parka01.github.io/portfolio_no.01"
              target="_blank"
              className="btn-view"
            >
              View WEB site
              <div className="arrow-button"></div>
            </a>
          </div>
          <div className="box-flex media">
            <video src="./videos/newbtria.mp4" autoPlay muted loop></video>
          </div>
        </div>
        <div
          className="brand-identity box-flex"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <div className="box-flex media">
            <video src="./videos/daffodil.mp4" autoPlay muted loop></video>
          </div>
          <div className="box-flex col media-info">
            <div>Web guide</div>
            <h1>화장품 브랜드 'newB.tria'</h1>
            <p>
              newB.tria웹사이트를 어떤 생각으로 기획하고 제작하게 되었는지를
              기록해둔 설명서입니다.
            </p>
            <a
              href="https://parka01.github.io/brand-portfolio/pages/web-guide"
              target="_blank"
              className="btn-view"
            >
              View WEB guide
              <div className="arrow-button"></div>
            </a>
          </div>
        </div>
      </section>

      {/* ---- SECTION PROJECT ---- */}
      <section
        id="section-project"
        data-aos="fade-right"
        data-aos-duration="3000"
      >
        <h1 className="txt-40">Extra Projects</h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="swiper-item">
              <a
                className="swiper-video"
                href="https://parka01.github.io/portfolio_no.02"
                target="_blank"
              >
                <video
                  src="./videos/screenshot_corn_farm.mp4"
                  autoPlay
                  loop
                  muted
                ></video>
              </a>
              <div className="swiper-description">
                <div>
                  <h3>
                    <span className="label-blue">반응형</span>Project 01{' '}
                  </h3>
                  <p>초록 농원 초당옥수수 소개 사이트</p>
                </div>
                <ul className="list-icon">
                  <li>
                    <img src={htmlIcon} alt="html icon image" />
                  </li>
                  <li>
                    <img src={cssIcon} alt="css icon image" />
                  </li>
                  <li>
                    <img src={jsIcon} alt="javascript icon image" />
                  </li>
                  <li>
                    <img src={chatGPTIcon} alt="chatgpt icon image" />
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-item">
              <a
                className="swiper-video"
                href="https://parka01.github.io/portfolio_no.03"
                target="_blank"
              >
                <video src="./videos/project_2.mp4" autoPlay loop muted></video>
              </a>
              <div className="swiper-description">
                <div>
                  <h3>
                    <span className="label-blue">반응형</span>Project 02
                  </h3>
                  <p>정부 보안 기밀 웹사이트(비밀번호: 1234, 4321)</p>
                </div>
                <ul className="list-icon">
                  <li>
                    <img src={htmlIcon} alt="html icon image" />
                  </li>
                  <li>
                    <img src={cssIcon} alt="css icon image" />
                  </li>
                  <li>
                    <img src={jsIcon} alt="javascript icon image" />
                  </li>
                  <li>
                    <img src={chatGPTIcon} alt="chatgpt icon image" />
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-item">
              <a
                className="swiper-video"
                href="https://parka01.github.io/brand-portfolio/pages/better-monday"
                target="_blank"
              >
                <img src={coverBetterMonday} alt="better monday cover image" />
              </a>
              <div className="swiper-description">
                <div>
                  <h3>Project 03</h3>
                  <p>BETTER MONDAY 커피 브랜드 배너 작업</p>
                </div>
                <ul className="list-icon">
                  <li>
                    <img src={illustratorIcon} alt="html icon image" />
                  </li>
                  <li>
                    <img src={photoshopIcon} alt="css icon image" />
                  </li>
                  <li>
                    <img src={chatGPTIcon} alt="chatgpt icon image" />
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-item">
              <a
                className="swiper-video"
                href="https://parka01.github.io/brand-portfolio/pages/cheese-scone"
                target="_blank"
              >
                <img src={coverCheese} alt="cheese scone cover image" />
              </a>
              <div className="swiper-description">
                <div>
                  <h3>Project 04</h3>
                  <p>촉촉한 황치즈 스콘 상세페이지 작업</p>
                </div>
                <ul className="list-icon">
                  <li>
                    <img src={illustratorIcon} alt="html icon image" />
                  </li>
                  <li>
                    <img src={photoshopIcon} alt="css icon image" />
                  </li>
                  <li>
                    <img src={chatGPTIcon} alt="chatgpt icon image" />
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* ---- VIDEO WORKS ---- */}
      <section
        id="section-video-project"
        data-aos="fade-right"
        data-aos-duration="3000"
      >
        <h1 className="txt-40">Video Works</h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="swiper-item">
              <div className="swiper-video">
                <video
                  src="./videos/video_work_01.mp4"
                  autoPlay
                  loop
                  muted
                ></video>
              </div>
              <div className="swiper-description">
                <div>
                  <h3>부산시청 온라인 교육영상</h3>
                  <p>기획, 대본 작성, 진행, 촬영, 편집 총 20화 제작</p>
                </div>
                <ul className="list-icon">
                  <li>
                    <img src={premiereIcon} alt="html icon image" />
                  </li>
                  <li>
                    <img src={illustratorIcon} alt="html icon image" />
                  </li>
                  <li>
                    <img src={photoshopIcon} alt="css icon image" />
                  </li>
                  <li>
                    <img src={chatGPTIcon} alt="chatgpt icon image" />
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-item">
              <div className="swiper-video">
                <video
                  src="./videos/video_work_02.mp4"
                  autoPlay
                  loop
                  muted
                ></video>
              </div>
              <div className="swiper-description">
                <div>
                  <h3>부산시청 온라인 교육영상</h3>
                  <p>기획, 대본 작성, 진행, 촬영, 편집 총 20화 제작</p>
                </div>
                <ul className="list-icon">
                  <li>
                    <img src={premiereIcon} alt="html icon image" />
                  </li>
                  <li>
                    <img src={illustratorIcon} alt="html icon image" />
                  </li>
                  <li>
                    <img src={photoshopIcon} alt="css icon image" />
                  </li>
                  <li>
                    <img src={chatGPTIcon} alt="chatgpt icon image" />
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-item">
              <div className="swiper-video">
                <video
                  src="./videos/video_work_03.mp4"
                  autoPlay
                  loop
                  muted
                ></video>
              </div>
              <div className="swiper-description">
                <div>
                  <h3>부산시청 온라인 교육영상</h3>
                  <p>기획, 대본 작성, 진행, 촬영, 편집 총 20화 제작</p>
                </div>
                <ul className="list-icon">
                  <li>
                    <img src={premiereIcon} alt="html icon image" />
                  </li>
                  <li>
                    <img src={illustratorIcon} alt="html icon image" />
                  </li>
                  <li>
                    <img src={photoshopIcon} alt="css icon image" />
                  </li>
                  <li>
                    <img src={chatGPTIcon} alt="chatgpt icon image" />
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-item">
              <div className="swiper-video">
                <video
                  src="./videos/video_work_04.mp4"
                  autoPlay
                  loop
                  muted
                ></video>
              </div>
              <div className="swiper-description">
                <div>
                  <h3>부산시청 온라인 교육영상</h3>
                  <p>기획, 대본 작성, 진행, 촬영, 편집 총 20화 제작</p>
                </div>
                <ul className="list-icon">
                  <li>
                    <img src={premiereIcon} alt="html icon image" />
                  </li>
                  <li>
                    <img src={illustratorIcon} alt="html icon image" />
                  </li>
                  <li>
                    <img src={photoshopIcon} alt="css icon image" />
                  </li>
                  <li>
                    <img src={chatGPTIcon} alt="chatgpt icon image" />
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-item">
              <div className="swiper-video">
                <video
                  src="./videos/video_work_05.mp4"
                  autoPlay
                  loop
                  muted
                ></video>
              </div>
              <div className="swiper-description">
                <div>
                  <h3>부산시청 온라인 교육영상</h3>
                  <p>기획, 대본 작성, 진행, 촬영, 편집 총 20화 제작</p>
                </div>
                <ul className="list-icon">
                  <li>
                    <img src={premiereIcon} alt="html icon image" />
                  </li>
                  <li>
                    <img src={illustratorIcon} alt="html icon image" />
                  </li>
                  <li>
                    <img src={photoshopIcon} alt="css icon image" />
                  </li>
                  <li>
                    <img src={chatGPTIcon} alt="chatgpt icon image" />
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section id="section-contact">
        <div className="inner">
          <p className="contact-sub">LET’S BUILD SOMETHING GREAT</p>
          <h2 className="contact-title">✈️새로운 여정을 위하여,</h2>
          <div>
            <svg className="handwriting" id="b" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 667.47 114.92">
              <defs>
                <style>{`
                  .f {
                    fill: none;
                    stroke: url(#d);
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-width: 3.07px;
                  }
                `}
                </style>
                <linearGradient id="d" x1="0" y1="57.46" x2="667.47" y2="57.46" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#000" />
                  <stop offset=".52" stopColor="#817fff" />
                  <stop offset="1" stopColor="#ff6583" />
                </linearGradient>
              </defs>
              <g id="c" data-name="handwriting">
                <path id="e" data-name="good-luck" className="f"
                  d="M1.54,51.72c13.87.6,27.89-5.14,37.34-15.3-7.43-.47-14.65,5.74-15.31,13.16s5.31,14.8,12.7,15.72c7.39.92,14.98-4.77,16.19-12.12.75-4.51-.68-9.17-3-13.11,2.07,16.56,2.37,33.33.91,49.95-.36,4.03-.85,8.18-2.83,11.72-5.69,10.19-20.42,10.96-31.26,11.62-2.86.18-5.72-1.07-7.25-3.5-3.37-5.33,2.39-10.28,7.48-12.55,17.93-8,38.27-9.09,56.41-16.6,10.67-4.42,21.3-12.32,23.16-23.72-7.75-2.52-16.66.78-22.05,6.9-5.39,6.12-7.58,14.57-7.44,22.72.03,1.8.22,3.73,1.36,5.11,1.33,1.6,3.57,2.05,5.65,2.19,9.41.65,19.3-3.32,24.67-11.07s5.34-19.18-.95-26.2c-1.55,1.16-2.49,3.1-2.44,5.04,11.4,3.91,24.45,2.73,34.96-3.18-2.92-3.22-8,.92-9.8,4.88-3.66,8.04-5.1,17.74.23,25.39,3.3,4.74,9.06,6.39,14.65,4.96,8.53-2.19,9.66-11.66,9.68-19.11,0-2.1.29-4.45-.62-6.41-.7-1.51-1.83-2.83-2.98-4.02-2.35-2.41-5.12-4.59-8.08-6.21-1.88,1.22-2.86,3.69-2.31,5.86,5.08,5.29,22.85,3.61,29.63.82s16-4.73,20.29,1.22c-5.22-2.34-11.54-2.68-16.55.07-5.74,3.15-9.12,10.79-5.67,16.77,2.24,3.89,6.86,6.06,11.15,4.72,3.91-1.22,6.04-4.86,7.89-8.32,9.03-16.83,16.8-34.34,23.22-52.33,2.9-8.13,5.56-16.9,3.5-25.28-13.66,19.4-20.81,43.31-20.02,67.02.15,4.65.73,9.62,3.73,13.18,3.41,4.05,9.32,5.29,14.53,4.33s9.87-3.78,14.26-6.74c25.37-17.1,47.3-43.55,47.88-74.14-7.84-.62-13.7,6.95-17.25,13.96-9.04,17.86-13.64,37.94-13.28,57.95.05,2.79.27,5.83,4.15,7.07,2.05.66,4.28.38,6.25-.48,13.32-5.82,23.98-17.34,28.86-31.02-5.12,6.96-8.56,15.13-10.03,23.64-.93,5.37,4.49,9.56,9.43,7.28,3.74-1.73,7.13-4.91,9.44-8.35,4.35-6.5,6.95-14.37,12.9-19.45-3.22,8.6-4.45,17.95-3.55,27.09.87-5.67,1.77-11.45,4.34-16.58s7.11-9.61,12.76-10.6,12.16,2.47,13.24,8.11c-3.94-11.54-24.49-13.5-27.55,1.26-1.29,6.21,1.12,12.81,6.61,15.99s11.76,1.95,17.38-.01c6.23-2.18,12.37-5.4,16.3-10.7,3.19-4.3,4.67-9.62,5.83-14.85,3.3-14.9,4.53-30.26,3.63-45.5-10.26,24.81,6.05,56.19-8.28,78.89-1.93-9.19,4.61-17.97,11.67-24.15,7.06-6.18,15.4-11.67,19.13-20.28-5.35,5.98-10.69,11.97-16.04,17.95-1.17,1.31-2.39,2.72-2.73,4.45-.49,2.53,1.03,4.96,2.47,7.09,3.04,4.48,6.33,9.17,11.29,11.33,3.58,1.56,8.25,1.1,11.15-1.23,4.03-3.24,8.15-6.37,12.78-8.68l19.89-9.9c-2.49-3.99-8.87-4.1-12.32-.9s-4.22,8.52-3.07,13.08c2.74,10.84,16.25,17.45,26.5,12.97,3.94-1.72,7.18-4.7,10.22-7.73,21.24-21.22,36.53-48.34,43.69-77.49-7.01,3.96-10.55,12.08-12.45,19.91-4.96,20.5-1.79,42.16,4.12,62.4.35,1.21,1.47,2.73,2.51,2.02.95-8.06.2-16.32-2.19-24.07-1.15-3.74-2.75-7.47-5.56-10.19-3.1-3.01-7.95-4.55-11.88-2.46-1.19.63-2.18,1.69-2.44,3.01-.58,2.85,2.08,4.66,4.54,5.5,12.19,4.14,25.79-4.26,31.92-15.58,6.13-11.32,6.65-24.73,7.03-37.6-8.48,26.04-5.7,55.1-16.59,80.22,2.24-10.06,5.3-19.93,9.14-29.49,1.29-3.21,3.41-6.91,6.87-6.93,2.63,7.98,3.14,16.66,1.47,24.89-.55,2.7-1.33,5.52-.23,8.15.55,1.31,1.66,2.37,3.03,2.75,2.04.56,3.22-.6,4.26-1.76,7.97-8.88,11.98-21.19,10.77-33.06-3,6.29,2.5,14.89,9.46,14.63s11.77-9.52,7.83-15.26c.99,11.45,1.56,23.38-2.75,34.04-4.31,10.65-14.88,19.63-26.31,18.43-2.11-7.14,5.34-13.34,12.14-16.35,13.95-6.19,30.2-9.27,40.36-20.65,4.15-4.65,7.75-10.92,13.92-11.8-9.87,3.01-17.18,12.94-17.12,23.25,0,1.02.11,2.13.79,2.89.64.72,1.66.96,2.61,1.08,9.77,1.26,19.48-7.9,18.81-17.72-.3-4.3-3.53-9.13-7.78-8.42-1.67,2.61.27,6.44,3.23,7.37s6.25-.46,8.42-2.68c2.17-2.22,3.44-5.13,4.67-7.98-.89,8.21-1.05,16.5-.48,24.74,2.16,1.1,4.9.16,6.6-1.56,1.7-1.72,2.59-4.06,3.44-6.33,2.22-5.94,4.44-11.88,6.65-17.83,2.41,8.82,2.57,18.24.47,27.13-1.34-7.21-.47-14.82,2.45-21.54.86-1.98,2.12-4.09,4.6-4.06,1.32.02,2.56.74,3.38,1.78,1.75,2.21,1.73,5.03,1.68,7.71l-.2,10.52c-.03,1.44.82,2.85,2.2,3.26,2.29.69,3.45-1.49,3.76-3.37.72-4.38-.91-8.91-.05-13.26.86-4.35,6.62-8.12,9.57-4.8-1.23-1.85-4.33-1.28-5.65.5s-1.36,4.17-1.35,6.39c0,1.36.03,2.81,1.39,3.73,1.71,1.17,4.02.5,5.26-1.16,1.89-2.54,1.25-5.84.57-8.8,2.08,11.63.94,23.82-3.25,34.86-2.95,7.75-8.05,15.51-16.33,17.45-1.54.36-3.22.14-4.46-.84-3.12-2.47-.94-7.19,1.73-9.89,9.27-9.36,22.71-12.87,35.14-17.26s25.48-11.04,30.47-23.24c.51-1.24.92-2.7-.05-3.85s-2.68-1.23-3.99-.5c-2.68,1.49-3.32,4.63-5.34,6.66-1.28-4.08-4.43-9.22-8.65-6.91-2.51,1.38-3.35,4.6-2.1,7.18,3.08,6.39,5.8,13.25,10.5,18.65,3.83,4.4,9.23,7.79,15.07,7.86" />
              </g>
            </svg>
          </div>
          <a href="mailto:for.unique.fashion@gmail.com" className="btn-contact">
            <span>Contact</span>
          </a>
        </div>
      </section>
    </>
  );
}
export default Home;
