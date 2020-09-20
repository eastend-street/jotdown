import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  text: string;
  className?: any;
};

const Button: React.FC<ButtonProps> = ({ text, className }) => (
  <StyledButton className={className}>{text}</StyledButton>
);

export default Button;

const StyledButton = styled.button`
  color: '#fff';
  background-color: ${(props) => props.theme.colors.yellow};
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  width: 5rem;
  &:hover {
    transition: 0.5s;
    opacity: 0.7;
  }
`;
