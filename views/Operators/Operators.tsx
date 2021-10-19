import React from "react";
import { Operator } from "../../common/types";
import OperatorsList from "./OperatorsList/OperatorsList";
import { OperatorsAddButton } from "./styles";

type OperatorsProps = {
  operators: Operator[];
};

const Operators: React.FC<OperatorsProps> = ({ operators }) => {
  return (
    <>
      <OperatorsList operators={operators} />
      <OperatorsAddButton
        aria-label="Add operator"
        onClick={() => {
          console.log("Добавление оператора");
        }}
      />
    </>
  );
};

export default Operators;
