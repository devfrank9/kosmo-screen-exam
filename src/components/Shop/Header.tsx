import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    margin: 20px;
    a {
      margin-left: 20px;
    }
  }
`;

const Logo = styled.div`
  margin: 20px;
  a {
    img {
      width: 287px;
      height: 40px;
    }
  }
`;

const MainContainer = styled.div`
  background-image: url("/src/img/2.jpg");
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Logo>
          <a href="/shop">
            <img
              src="https://www.mandarinaduck.co.kr/data/skin/front/2021-11-11_resize/img/banner/1bb87d41d15fe27b500a4bfcde01bb0e_70303.png"
              alt=""
            />
          </a>
        </Logo>
        <div>
          <a href="/shop">Search</a>
          <a href="/shop">Cart</a>
          <a href="/shop">Profile</a>
        </div>
      </HeaderContainer>
      <MainContainer></MainContainer>
    </>
  );
};

export default Header;
