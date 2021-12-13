import styled from "styled-components";

const ContainerFather = styled.div`
  display: flex;
`;

const Container = styled.div`
  width: 100vw;
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
  img {
    margin-left: 20px;
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
        <p>사업영역</p>
        <span>석유화학분야 / 산업분야</span>
        <br />
        <span>환경분야 / 발전분야</span>
        <br />
        <LearnBtn>Learn More +</LearnBtn>
      </Container>
      <Container>
        <p>3D Design</p>
        <span>HONGIN 3D Design</span>
        <br />
        <span>SP3D / PDS / PDMS</span>
        <br />
        <LearnBtn>Learn More +</LearnBtn>
      </Container>
      <Container>
        <p>서비스 바로가기</p>
        <img src="http://ensoleng.co.kr/images/main/btn_pq.png" />
        <img src="http://ensoleng.co.kr/images/main/btn_broshure.png" />
      </Container>
    </ContainerFather>
  );
};

export default BannerMenu;
