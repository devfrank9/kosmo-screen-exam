import styled from "styled-components";

const FirstContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: pink;

  img {
    display: inline-block;
    width: 50px;
    height: 60px;
    align-items: center;
    margin-bottom: 30px;
  }
  h1 {
    display: inline-block;
    font-size: 50px;
  }
  h2 {
    display: inline-block;
    font-size: 20px;
    color: blue;
  }
`;

const FirstImageContainer = styled.div`
  display: flex;
  img {
    display: block;
    width: 280px;
    height: 280px;
  }
`;

const SecondContainer = styled.div`
  background-color: white;
  width: 100vw;
  height: 40vh;
  display: block;
  position: relative;
  img {
    width: 100vw;
    height: 40vh;
  }
`;
const SecondTextArray = styled.div`
  display: inline-block;
  position: absolute;
  text-align: center;
  margin-left: 40%;
  div {
    position: relative;
    flex-direction: row;
    h1 {
      font-size: 50px;
      margin: 10px 0;
    }
    h2 {
      font-size: 30px;
      margin-bottom: 10px;
    }
  }
  p {
    display: inline-block;
    position: relative;
    color: blue;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = () => {
  return (
    <>
      <MainContainer>
        <a href="/shop">
          <FirstContainer>
            <img
              src="https://www.apple.com/v/home/ai/images/logos/holiday-2021/logo__dcojfwkzna2q_large_2x.png"
              alt=""
            />
            <h1>한 사람도 빠짐없이 챙길 수 있는 마지막 찬스.</h1>'
            <br />
            <h2>선물 쇼핑하기 &rarr;</h2>
            <FirstImageContainer>
              <img
                src="https://www.apple.com/v/home/ai/images/heroes/holiday-2021/set-b/airpods__b0941p5gmwj6_large_2x.png"
                alt=""
              />
              <img
                src="https://www.apple.com/v/home/ai/images/heroes/holiday-2021/set-b/watch__csqqcayzqueu_large_2x.png"
                alt=""
              />
              <img
                src="https://www.apple.com/v/home/ai/images/heroes/holiday-2021/set-b/ipadmini__f0pd6cilwaie_large_2x.png"
                alt=""
              />
            </FirstImageContainer>
          </FirstContainer>
        </a>
        <a href="/shop">
          <SecondContainer>
            <SecondTextArray>
              <div>
                <h1>iPhone 13 Pro</h1>
                <h2>이것이 바로 프로.</h2>
              </div>
              <p>더알아보기 &rarr; 구입하기 &rarr;</p>
            </SecondTextArray>
            <img
              src="https://www.apple.com/v/home/ai/images/heroes/iphone-13-pro/hero_iphone_13pro__dhnsegysa42u_large_2x.jpg"
              alt=""
            />
          </SecondContainer>
        </a>
      </MainContainer>
    </>
  );
};

export default Main;
