import React from "react";
import { OperatorStyled } from "./styles";

export type Operator = {
  id: number;
  name: string;
  logoURL: string;
};

export type OperatorListItemProps = {
  operator: Operator;
};

const OperatorListItem: React.FC<OperatorListItemProps> = ({ operator }) => {
  const { name, logoURL } = operator;
  return (
    <OperatorStyled>
      <img src={logoURL} alt={name + " logotype"} />
      <div className="text">{name}</div>
    </OperatorStyled>
  );
};

export default OperatorListItem;
