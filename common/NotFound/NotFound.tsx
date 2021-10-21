import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/constants";

type NotFoundProps = {
  children: React.ReactNode;
};

const NotFound: React.FC<NotFoundProps> = (props) => {
  const { children, ...rest } = props;
  return <NotFoundStyled {...rest}>{children}</NotFoundStyled>;
};

export default NotFound;

const NotFoundStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  & span {
    font-weight: 500;
    font-size: 50px;
    color: ${colors.text_gray_light};
    text-align: center;
  }
`;
