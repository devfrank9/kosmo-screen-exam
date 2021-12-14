import styled from "styled-components";

const Img = styled.div`
  display: flex;
  justify-content: center;
`;
const Main = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const Content = styled.div`
  width: 20vw;
  p {
    font-size: 30px;
    font-weight: 800;
  }
  div {
    background-color: red;
    width: 18vw;
    height: 5vh;
    margin-top: 20px;
    color: white;
    display: flex;

    span {
      display: flex;
      align-items: center;
      margin-left: 10px;
    }
  }
`;

const ContentImg = styled.div`
  p {
    font-size: 20px;
    font-weight: 800;
  }
`;

const Banner = () => {
  return (
    <>
      <Img>
        <img src="http://ensoleng.co.kr/images/sub/sub_visual2.jpg" alt="" />
      </Img>
      <Main>
        <Content>
          <p>사업영역</p>
          <div>
            <span>사업영역</span>
          </div>
        </Content>
        <ContentImg>
          <p>사업영역</p>
          <hr />
          <img src="http://ensoleng.co.kr/images/sub/business.png" alt="" />
        </ContentImg>
      </Main>
    </>
  );
};

export default Banner;
