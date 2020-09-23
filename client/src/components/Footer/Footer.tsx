import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <Container>
    <Copyright>Copyright &copy; Jot down All rights reserved.</Copyright>
  </Container>
);

export default Footer;

const Container = styled.footer`
  padding: 1rem 1rem 2rem 1rem;
`;

const Copyright = styled.p`
  color: ${(props) => props.theme.colors.lightGrey};
  text-align: center;
  margin: 0;
`;
