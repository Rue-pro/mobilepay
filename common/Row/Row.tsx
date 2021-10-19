import React from "react";
import styled from "styled-components";

type Row = {
  children: React.ReactNode;
};

const Row: React.FC<Row> = (props) => {
  const { children, ...rest } = props;
  return <RowStyled {...rest}>{children}</RowStyled>;
};

export default Row;

export const RowStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  width: 280px;
`;
