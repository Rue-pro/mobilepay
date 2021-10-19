import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/constants";

const Input: React.FC<React.ForwardedRef<HTMLInputElement>> = (props) => {
  const { children, ...rest } = props;
  return <InputStyled {...rest}>{children}</InputStyled>;
};

export default Input;

export const InputStyled = styled.input`
  display: block;
  margin: 0 auto;
  width: 100%;
  padding: 10px 16px;
  border: 2px solid #cfd1d8;
  border-radius: 23px;
  font-weight: 500;
  font-size: 16px;
  text-align: left;
  &:focus {
    border: 2px solid ${colors.primary};
    outline: none;
  }
`;
