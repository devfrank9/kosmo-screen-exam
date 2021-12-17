import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: #d8d2d2;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const TextArea = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  p {
    margin: 20px 80px;
    text-align: center;
  }
`;
const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 200px;
`;
const Menu = styled.div`
  display: block;
  width: 20vw;
  h1 {
    font-size: 15px;
  }
  li {
    font-size: 13px;
    opacity: 0.4;
    margin: 10px 0;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <TextArea>
        <p>
          Apple TV+는 무료 체험 기간이 끝나면 월 6,500원에 이용할 수 있습니다.
          해지는 무료 체험 기간 중에도 가능합니다. 하나의 멤버십으로 가족 공유를
          통해 공유 가능합니다. 무료 체험 혜택은 2021년 11월 4일부터 대상 기기
          활성화 이후 3개월 이내에 신청할 수 있습니다. 멤버십은 매월 자동으로
          갱신되며, 해지 시 종료됩니다. 제한 사항 및 기타 약관이 적용됩니다.
        </p>
        <hr />
      </TextArea>
      <MenuContainer>
        <Menu>
          <h1>쇼핑 및 알아보기</h1>
          <ul>
            <li>스토어</li>
            <li>Mac</li>
            <li>iPad</li>
            <li>iPhone</li>
            <li>Watch</li>
            <li>Airpods</li>
            <li>TV 및 홈</li>
            <li>IPod Touch</li>
            <li>AirTag</li>
            <li>액세서리</li>
          </ul>
        </Menu>
        <Menu>
          <h1>서비스</h1>
          <ul>
            <li>Apple Music</li>
            <li>Apple TV+</li>
            <li>Apple Arcade</li>
            <li>iCloud</li>
            <li>Apple Books</li>
            <li>Apple Podcast</li>
            <li>App Store</li>
          </ul>
          <h1>계정</h1>
          <ul>
            <li>Apple ID관리</li>
            <li>Apple Store 계정</li>
            <li>iCloud.com</li>
          </ul>
        </Menu>
        <Menu>
          <h1>Apple Store</h1>
          <ul>
            <li>매장찾기</li>
            <li>Genius bar</li>
            <li>Today at Apple</li>
            <li>Apple캠프</li>
            <li>Apple Store 앱</li>
            <li>엄준식은</li>
            <li>살아있따</li>
            <li>금융제품</li>
            <li>Apple Trade In</li>
            <li>주문상태</li>
            <li>쇼핑 도움말</li>
          </ul>
        </Menu>
        <Menu>
          <h1>비즈니스</h1>
          <ul>
            <li>Apple과 비즈니스</li>
            <li>비즈니스를 위한 제품 쇼핑하기</li>
          </ul>
          <h1>교육</h1>
          <ul>
            <li>Apple과 교육</li>
            <li>초중고용 제품 쇼핑하기</li>
            <li>대학생활을 위한 제품 쇼핑하기</li>
          </ul>
        </Menu>
        <Menu>
          <h1>Apple의 가치관</h1>
          <ul>
            <li>손쉬운사용</li>
            <li>환경</li>
            <li>개인정보 보호</li>
            <li>협력업체에 대한 책임</li>
          </ul>
          <h1>Apple 정보</h1>
          <ul>
            <li>Newsroom</li>
            <li>랄로파카괴물쥐</li>
            <li>채용안내</li>
            <li>윤리 및 규정 준수</li>
            <li>이벤트</li>
            <li>일자리 창출</li>
            <li>Apple 연락처</li>
          </ul>
        </Menu>
      </MenuContainer>
      <hr />
    </FooterContainer>
  );
};

export default Footer;
