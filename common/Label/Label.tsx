import React from "react";
import styled from "styled-components";

const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = (
  props
) => {
  const { children, ...rest } = props;
  return <LabelStyled {...rest}>{children}</LabelStyled>;
};

export default Label;

const LabelStyled = styled.label`
  display: block;
  padding: 0 16px;
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 500;
  opacity: 0.8;
  text-align: start;
`;
