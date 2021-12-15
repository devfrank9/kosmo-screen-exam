import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 20vh;
  background-color: gray;
`;

const Menu = styled.div`
  margin: 0 20px;
  &:first-child {
    width: 50vh;
    H1 {
      margin-left: 30px;
      font-size: 20px;
    }
  }
  &:nth-child(1, 2, 3, 4, 5) {
    width: 80vh;
  }
`;

const H1 = styled.h1`
  font-size: 17px;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const H2 = styled.h2`
  display: flex;
  font-size: 30px;
  margin-top: 30px;
  margin-left: 100px;
  img {
    margin-right: 20px;
  }
`;

const ChoiceMenu = styled.p`
  opacity: 0.3;
  margin: 5px 0;
`;

const Hr = styled.hr`
  color: black;
`;

const ContactMenu = () => {
  return (
    <Container>
      <Menu>
        <H1>Contact Us</H1>
        <H2>
          <img src="http://ensoleng.co.kr/images/main/tel.png" alt="" />
          02-2624-8716
        </H2>
      </Menu>
      <Hr />
      <Menu>
        <H1>회사소개</H1>
        <ChoiceMenu>인사말</ChoiceMenu>
        <ChoiceMenu>회사연혁</ChoiceMenu>
        <ChoiceMenu>조직도</ChoiceMenu>
        <ChoiceMenu>찾아오는 길</ChoiceMenu>
      </Menu>
      <Hr />
      <Menu>
        <H1>사업영역</H1>
        <ChoiceMenu>석유화학분야</ChoiceMenu>
        <ChoiceMenu>산업분야</ChoiceMenu>
        <ChoiceMenu>환경분야</ChoiceMenu>
        <ChoiceMenu>발전분야</ChoiceMenu>
      </Menu>
      <Hr />
      <Menu>
        <H1>3D Design</H1>
        <ChoiceMenu>3D Design</ChoiceMenu>
      </Menu>
      <Hr />
      <Menu>
        <H1>설계관리품질시스템</H1>
        <ChoiceMenu>Q/C 시스템 및 절차</ChoiceMenu>
      </Menu>
      <Hr />
      <Menu>
        <H1>주요실적</H1>
        <ChoiceMenu>주요실적</ChoiceMenu>
      </Menu>
      <Hr />
      <Menu>
        <H1>홍보센터</H1>
        <ChoiceMenu>지명원 / 브로슈어</ChoiceMenu>
        <ChoiceMenu>채용공고</ChoiceMenu>
      </Menu>
    </Container>
  );
};

export default ContactMenu;
