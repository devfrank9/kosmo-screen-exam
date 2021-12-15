import styled from "styled-components";

const ContainerFather = styled.div`
  display: flex;
`;

const Container = styled.div`
  width: 100vw;
  height: 25vh;
  align-items: center;
  display: flex;
  p {
    font-size: 20px;
    margin: 20px 20px;
  }
  span {
    margin-left: 20px;
  }
  &:first-child {
    span {
      margin-top: 40px;
    }
  }
  img:nth-child(0, 1) {
    width: 20vw;
    height: 8vw;
    position: absolute;
  }
  div:first-child {
  }
  div:last-child {
    width: 10vw;
    p {
      margin: 10px 5px;
    }
  }
`;

const LearnBtn = styled.button`
  background-color: gray;
  color: white;
  margin: 10px 20px;
`;

const BannerMenu = () => {
  return (
    <ContainerFather>
      <Container>
        <div>
          <p>사업영역</p>
          <span>석유화학분야 / 산업분야</span>
          <br />
          <span>환경분야 / 발전분야</span>
          <br />
          <LearnBtn>Learn More +</LearnBtn>
        </div>
        <div>
          <img src="http://ensoleng.co.kr/images/main/col1_bg.png" alt="" />
        </div>
      </Container>
      <Container>
        <div>
          <p>3D Design</p>
          <span>HONGIN 3D Design</span>
          <br />
          <span>SP3D / PDS / PDMS</span>
          <br />
          <LearnBtn>Learn More +</LearnBtn>
        </div>
        <div>
          <img src="http://ensoleng.co.kr/images/main/col2_bg.png" alt="" />
        </div>
      </Container>
      <Container>
        <div>
          <p>서비스 바로가기</p>
          <img src="http://ensoleng.co.kr/images/main/btn_pq.png" alt="" />
          <img
            src="http://ensoleng.co.kr/images/main/btn_broshure.png"
            alt=""
          />
        </div>
      </Container>
    </ContainerFather>
  );
};

export default BannerMenu;
