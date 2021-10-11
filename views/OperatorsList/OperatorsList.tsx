import React from "react";
import { Operator } from "../../common/types";
import OperatorListItem from "./OperatorListItem/OperatorListItem";
import { OperatorsEmptyListStyled, OperatorsStyled } from "./styles";

type OperatorsListProps = {
  operators: Operator[];
};
const OperatorsList: React.FC<OperatorsListProps> = (props) => {
  const { operators } = props;

  if (!operators.length) {
    return (
      <OperatorsEmptyListStyled>
        <span>Список мобильных операторов пуст</span>
      </OperatorsEmptyListStyled>
    );
  }

  return (
    <OperatorsStyled>
      {operators.map((operator) => {
        return <OperatorListItem key={operator.name} operator={operator} />;
      })}
    </OperatorsStyled>
  );
};

export default OperatorsList;
