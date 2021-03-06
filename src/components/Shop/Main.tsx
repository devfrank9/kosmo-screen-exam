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
    &:hover {
      opacity: 0.3;
      text-decoration: underline;
    }
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
    &:hover {
      opacity: 0.3;
      text-decoration: underline;
    }
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ThirdContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
`;

const ThirdPartial = styled.div`
  display: block;
  width: 50vw;
  img {
    width: 50vw;
  }
`;

const FirstDivision = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  text-align: center;
  margin-left: 280px;
  margin-top: 125px;
  color: white;
  h1 {
    font-size: 28px;
  }
  h2 {
    font-size: 18px;
    margin: 10px;
    color: pink;
  }
  p {
    font-size: 15px;
    color: blue;
  }
`;

const Division = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  text-align: center;
  margin-left: 240px;
  margin-top: 40px;
  color: black;
  h1 {
    font-size: 28px;
  }
  h2 {
    font-size: 18px;
    margin: 10px;
    color: black;
  }
  p {
    font-size: 15px;
    color: blue;
  }
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
            <h1>??? ????????? ???????????? ?????? ??? ?????? ????????? ??????.</h1>'
            <br />
            <h2>?????? ???????????? &rarr;</h2>
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
                <h2>????????? ?????? ??????.</h2>
              </div>
              <p>??????????????? &rarr; ???????????? &rarr;</p>
            </SecondTextArray>
            <img
              src="https://www.apple.com/v/home/ai/images/heroes/iphone-13-pro/hero_iphone_13pro__dhnsegysa42u_large_2x.jpg"
              alt=""
            />
          </SecondContainer>
        </a>
        <ThirdContainer>
          <ThirdPartial>
            <FirstDivision>
              <h1>iPhone 13</h1>
              <h2>????????? ?????? ????????? ??????</h2>
              <p>??? ???????????? &rarr; ???????????? &rarr;</p>
            </FirstDivision>
            <img
              src="https://www.apple.com/v/home/ai/images/promos/iphone-13/tile_iphone_13__d9w82q7fwceq_large_2x.jpg"
              alt=""
            />
          </ThirdPartial>
          <ThirdPartial>
            <Division>
              <h1>Watch</h1>
              <h2>????????? ?????? ??? ??????????????? ??????</h2>
              <p>??? ???????????? &rarr; ???????????? &rarr;</p>
            </Division>
            <img
              src="https://www.apple.com/v/home/ai/images/promos/watch-series-7/tile_watch__e9n11b6m6yq2_large_2x.jpg"
              alt=""
            />
          </ThirdPartial>
          <ThirdPartial>
            <Division>
              <h1>Ipad Mini</h1>
              <h2>????????? ??????. ????????? ??????.</h2>
              <p>??? ???????????? &rarr; ???????????? &rarr;</p>
            </Division>
            <img
              src="https://www.apple.com/v/home/ai/images/promos/ipad-mini/promo_ipad_mini__spq4zjcuuaie_large_2x.jpg"
              alt=""
            />
          </ThirdPartial>
          <ThirdPartial>
            <Division>
              <h1>MacBook Pro</h1>
              <h2>???????????? ????????? ??????</h2>
              <p>??? ???????????? &rarr; ???????????? &rarr;</p>
            </Division>
            <img
              src="https://www.apple.com/v/home/ai/images/promos/macbook-pro/tile_macbookpro__cx0ur0qg9biq_large_2x.jpg"
              alt=""
            />
          </ThirdPartial>
        </ThirdContainer>
      </MainContainer>
    </>
  );
};

export default Main;
