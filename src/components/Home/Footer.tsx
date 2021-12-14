import styled from "styled-components";

const Container = styled.div`
  margin-top: 30px;
  width: 100vw;
  display: column;
  text-align: center;
  opactiy: 0.5;
`;

const Footer = () => {
  return (
    <Container>
      ADDRESS : 서울특별시 금천구 가산디지털2로 184 316호 TEL : 02-2624-8716 FAX
      : 02-2624-8738 E-Mail : bradeum@hongintech.co.kr
      <br />
      COPYRIGHT © 2015.EnSol Engineering CO., LTD. ALL RIGHTS RESERVED.
    </Container>
  );
};

export default Footer;
