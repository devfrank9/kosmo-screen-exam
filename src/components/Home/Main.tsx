import styled from "styled-components";

const BannerContainer = styled.div`
  width: 100vw;
  img {
    width: 100vw;
  }
`;

const Main = () => {
  return (
    <BannerContainer>
      <img src="http://ensoleng.co.kr/images/main/visual1.jpg" alt="" />
    </BannerContainer>
  );
};

export default Main;
