import React, { Component } from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #e3e3e3;
  color: #66717e;
  padding: 1rem 1rem 2rem 1rem;
`;

const Copyright = styled.p`
  color: #66717e;
  text-align: center;
  margin: 0;
`;

class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <Copyright>
          Copyright &copy; 2018 - 2019 Jot down All rights reserved.
        </Copyright>
      </StyledFooter>
    );
  }
}

export default Footer;
