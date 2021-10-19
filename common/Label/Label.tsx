import React from "react";
import styled from "styled-components";

const Label: React.FC<React.ForwardedRef<HTMLLabelElement>> = (props) => {
  const { children, ...rest } = props;
  return <LabelStyled {...rest}>{children}</LabelStyled>;
};

export default Label;

export const LabelStyled = styled.label`
  display: block;
  padding-left: 16px;
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 500;
  opacity: 0.8;
  text-align: start;
`;
