import React, { Component } from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #424242;
  height: 50px;
  color: white;
  padding: 10px;
`;

const Copyright = styled.p`
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
