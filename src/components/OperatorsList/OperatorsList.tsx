import React from "react";
import OperatorListItem from "./OperatorListItem/OperatorListItem";
import { Operator } from "./OperatorListItem/OperatorListItem";
import { OperatorsStyled } from "./styles";

export type OperatorsListProps = {
  operators: Array<Operator>;
};

const OperatorsList: React.FC<OperatorsListProps> = ({ operators }) => {
  return (
    <OperatorsStyled>
      {operators.map((operator) => {
        return <OperatorListItem key={operator.name} operator={operator} />;
      })}
    </OperatorsStyled>
  );
};

export default OperatorsList;
