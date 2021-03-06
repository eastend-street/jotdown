import React, { Component } from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 1rem 1rem 2rem 1rem;
`;

const Copyright = styled.p`
  color: ${props => props.theme.colors.lightGrey};
  text-align: center;
  margin: 0;
`;

class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <Copyright>Copyright &copy; Jot down All rights reserved.</Copyright>
      </StyledFooter>
    );
  }
}

export default Footer;
