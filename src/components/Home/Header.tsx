import styled from "styled-components";
import React from "react";

const HeaderHead = styled.div`
  display: flex;
  height: 10vh;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.a`
  margin: 20px;
  img {
    margin-left: 50px;
  }
`;

const Menu = styled.nav`
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

const SideMenu = styled.div`
  background-color: gray;
  width: 100vw;
  height: 30px;
`;

const Inform = styled.ul`
  display: none;
  &:hover {
    display: inline;
  }
`;

const Header = () => {
  const subInform = document.getElementById("SubInform");
  const handleSubInform = () => {
    subInform?.classList.remove("Inform");
  };
  subInform?.addEventListener("mouseenter", handleSubInform);
  return (
    <>
      <HeaderHead>
        <>
          <Logo>
            <a href="/">
              <img src="http://ensoleng.co.kr/images/common/logo.png" />
            </a>
          </Logo>
        </>
        <>
          <Menu>
            <ul>
              <li>
                <a href="#">회사소개</a>
              </li>
              <li>
                <a href="/home-sub">사업영역</a>
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
        </>
      </HeaderHead>
      <SideMenu>
        <Inform>
          <li id="SubInform" onMouseEnter={Header}>
            <a href="#">인사말</a>
          </li>
        </Inform>
      </SideMenu>
    </>
  );
};

export default Header;
