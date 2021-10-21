import React from "react";
import styled from "styled-components";

type TitleProps = {
  children: string;
};

const Title: React.FC<TitleProps> = (props) => {
  const { children, ...rest } = props;
  return <TitleStyled {...rest}>{children}</TitleStyled>;
};

export default Title;

const TitleStyled = styled.h1`
  color: #242424;
  font-weight: 500;
  font-size: 36px;
`;
