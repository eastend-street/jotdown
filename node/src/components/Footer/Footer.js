import React, { Component } from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #e3e3e3;
  height: 50px;
  color: #444444;
  padding: 10rem 3rem 2rem 3rem;
`;

const Copyright = styled.p`
  color: #444444;
  text-align: center;
`;

class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <Copyright>
          Copyright &copy; 2018 - 2019 MemoMemo All rights reserved.
        </Copyright>
      </StyledFooter>
    );
  }
}

export default Footer;
