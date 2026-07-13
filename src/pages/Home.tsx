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
              class="btn-view"
            >
              View BI/BX guide
              <div class="arrow-button"></div>
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
    </>
  );
}
export default Home;
