import styled from "styled-components";

const Container = styled.div`
  margin-top: 30px;
  width: 100vw;
  height: 10vh;
  display: column;
  text-align: center;
  opactiy: 0.5;
  background-color: gray;
  p {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Footer = () => {
  return (
    <Container>
      <p>
        ADDRESS : 서울특별시 금천구 가산디지털2로 184 316호 TEL : 02-2624-8716
        FAX : 02-2624-8738 E-Mail : bradeum@hongintech.co.kr
      </p>
      <br />
      <p>COPYRIGHT © 2015.EnSol Engineering CO., LTD. ALL RIGHTS RESERVED.</p>
    </Container>
  );
};

export default Footer;
