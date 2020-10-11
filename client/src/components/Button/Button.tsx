import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  children?: HTMLCollection | string;
  onClick: (e?: React.MouseEvent) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  ...otherProps
}) => (
  <StyledButton onClick={onClick} {...otherProps}>
    {children}
  </StyledButton>
);

export default Button;

const StyledButton = styled.button<ButtonProps>`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.green};
  border: none;
  width: 100%;
  padding: 0.7rem 0.5rem;
  transition: 0.3s;
  cursor: pointer;
  font-size: 1rem;
  outline: none;
  &:hover {
    opacity: 0.7;
  }
`;
