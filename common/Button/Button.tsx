import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/constants";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  const { children, ...rest } = props;
  return <ButtonStyled {...rest}>{children}</ButtonStyled>;
};

export default Button;

const ButtonStyled = styled.button`
  margin: 0 auto;
  padding: 12px 18px;
  border: none;
  border-radius: 23px;
  background-color: ${colors.primary};
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.6s;
  &:hover {
    background: linear-gradient(
      45deg,
      ${colors.btn_primary_focus},
      ${colors.btn_primary_hover}
    );
    background-color: ${colors.btn_primary_hover};
  }
  &:focus {
    background: linear-gradient(
      45deg,
      ${colors.btn_primary_active},
      ${colors.btn_primary_focus}
    );
    background-color: ${colors.btn_primary_focus};
  }
  &:active {
    background: linear-gradient(
      45deg,
      ${colors.btn_primary_hover},
      ${colors.btn_primary_active}
    );
    background-color: ${colors.btn_primary_active};
  }
`;
