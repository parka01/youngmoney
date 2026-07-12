function Home() {
  return (
    <section id="wrap-container">
      <div className="container">
        <span className="title">
          "감성과 경험을 연결하는 웹퍼블리셔 박아영입니다."
        </span>
        <div className="flexbox center">
          <div className="box-glass big">
            <div className="selfie">
              <video src="/videos/selfie.mp4" muted loop autoPlay></video>
            </div>
            <p id="about">
              안녕하세요.
              <br />
              웹퍼블리셔 박아영입니다.
              <br />
              저는 프론트엔드 개발자로 처음 근무를 시작하였습니다. 화면을 더
              알차게 구성하는 법을 깊게 연마하고 싶어 웹퍼블리셔로 근무를
              시작하려합니다.
              <br />
              저는 안주하지 않고 발전해 나가길 희망하고
              <br />
              먼훗날 저는 풀스택 개발자가 되려합니다.
            </p>
          </div>
          <ul className="list-portfolio">
            <li className="box-glass medium col">
              <div className="portfolio-cover"></div>
              <h2>뷰티 브랜드 newB.tria 기획</h2>
              <p>
                부산 낙동강의 뉴트리아를 활용하는 방안으로 기획하게된 뷰티브랜드
                newB.tria입니다.
              </p>
            </li>
            <li className="box-glass medium col">
              <div className="portfolio-cover"></div>
              <h2>newB.tria 웹사이트</h2>
              <p>
                부산 낙동강의 뉴트리아를 활용하는 방안으로 기획하게된 뷰티브랜드
                newB.tria입니다.
              </p>
            </li>
            <li className="box-glass medium col">
              <div className="portfolio-cover"></div>
              <h2>신세계 백화점 미디어 파사드 영상 제작</h2>
              <p>
                신세계 백화점 명동점의 미디어 파사드 광고 배너 영상을
                제작하였습니다.
              </p>
            </li>
            <li className="box-glass medium col">
              <div className="portfolio-cover"></div>
              <h2>newB.tria 웹사이트</h2>
              <p>
                부산 낙동강의 뉴트리아를 활용하는 방안으로 기획하게된 뷰티브랜드
                newB.tria입니다.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Home;
