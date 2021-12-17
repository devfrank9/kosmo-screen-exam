import styled from "styled-components";

const Menu = styled.header`
  display: block;
  position: fixed;
  width: 100vw;
  height: 5vh;
  top: 0;
  left: 0;
  right: 0;

  background-color: gray;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    li {
      margin-right: 20px;
    }
  }
`;

const EventAlert = styled.div`
  width: 100vw;
  background-color: red;
  display: block;
  padding-top: 60px;
  p {
    text-align: center;
    color: white;
    padding-bottom: 15px;
  }
`;

const Header = () => {
  return (
    <>
      <Menu>
        <ul>
          <li>
            <a href="/shop">애플</a>
          </li>
          <li>
            <a href="/shop">스토어</a>
          </li>
          <li>
            <a href="/shop">Mac</a>
          </li>
          <li>
            <a href="/shop">IPad</a>
          </li>
          <li>
            <a href="/shop">IPhone</a>
          </li>
          <li>
            <a href="/shop">Watch</a>
          </li>
          <li>
            <a href="/shop">AirPods</a>
          </li>
          <li>
            <a href="/shop">TV 및 홈</a>
          </li>
          <li>
            <a href="/shop">Apple 독점 제공</a>
          </li>
          <li>
            <a href="/shop">액세서리</a>
          </li>
          <li>
            <a href="/shop">고객지원</a>
          </li>
          <li>
            <a href="/shop">검색</a>
          </li>
          <li>
            <a href="/shop">장바구니</a>
          </li>
        </ul>
      </Menu>
      <EventAlert>
        <p>
          연말연시 선물을 구할 수 있는 마지막 기회. Apple Store에서 픽업하거나
          무료 배송으로 받아 보실 수 있습니다. 지금 쇼핑하기 &rarr;
        </p>
      </EventAlert>
    </>
  );
};

export default Header;
