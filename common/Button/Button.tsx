import React from "react";
import styled, { css } from "styled-components";
import { colors } from "../../styles/constants";

export enum ButtonShapeEnum {
  normal,
  square,
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  btnShape?: ButtonShapeEnum;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, btnShape = ButtonShapeEnum.normal, ...rest } = props;
  return (
    <ButtonStyled shape={btnShape} {...rest}>
      {children}
    </ButtonStyled>
  );
};

export default Button;

interface ButtonStyledProps {
  shape: ButtonShapeEnum;
}

const ButtonStyled = styled.button<ButtonStyledProps>`
  margin: 0 auto;
  border: none;
  background-color: ${colors.primary};
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.6s;
  outline: none;
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
  ${(props) => {
    const { shape } = props;
    switch (shape) {
      case ButtonShapeEnum.normal:
        return css`
          padding: 12px 18px;
          border-radius: 23px;
        `;
      case ButtonShapeEnum.square:
        return css`
          position: relative;
          width: 48px;
          height: 48px;
          border-top-right-radius: 13px;
          border-bottom-right-radius: 13px;
          border-bottom-left-radius: 13px;
          box-shadow: 0px 6px 6px ${colors.shadow_primary};
          &:after {
            content: "";
            position: absolute;
            top: 5px;
            left: 6px;
            z-index: 9997;
            width: 36px;
            height: 36px;
            background-image: url(${"/plus_icon.svg"});
          }
        `;
      default:
    }
  }}
`;
