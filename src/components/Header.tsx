import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  height: 10vh;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.a`
  display: flex;
  margin: 20px;
  img {
    margin-left: 50px;
  }
`;

export const Menu = styled.nav`
  ul {
    display: flex;
    margin-right: 100px;
    li {
      margin-left: 50px;
      &:hover {
        opacity: 0.5;
      }
    }
  }
`;

export const SideMenu = styled.div`
  backgroundcolor: gray;
  width: 1000px;
  height: 20px;
`;

const Home = () => {
  return (
    <Header>
      <Logo>
        <a href="/">
          <img src="http://ensoleng.co.kr/images/common/logo.png" />
        </a>
      </Logo>
      <Menu>
        <ul>
          <li>
            <a href="#">회사소개</a>
          </li>
          <li>
            <a href="#">사업영역</a>
          </li>
          <li>
            <a href="#">3D Design</a>
          </li>
          <li>
            <a href="#">설계품질관리시스템</a>
          </li>
          <li>
            <a href="#">주요실적</a>
          </li>
          <li>
            <a href="#">홍보센터</a>
          </li>
        </ul>
      </Menu>
    </Header>
  );
};

export default Home;
