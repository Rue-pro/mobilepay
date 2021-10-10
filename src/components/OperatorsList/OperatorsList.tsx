import React, { useEffect, useState } from "react";
import api from "../../api/api";
import { Operator } from "../../common/types";
import spinner from "../../static/images/spinner.svg";
import OperatorListItem from "./OperatorListItem/OperatorListItem";
import {
  OperatorsEmptyListStyled,
  OperatorsLoaderStyled,
  OperatorsStyled,
} from "./styles";

const OperatorsList: React.FC = () => {
  const [showLoader, setShowLoader] = useState<boolean>(true);
  const [operators, setOperators] = useState<Operator[]>([]);

  useEffect(() => {
    api.operators.getOperators().then((operators) => {
      setOperators(operators);
      setShowLoader(false);
    });
  }, []);

  if (showLoader) {
    return (
      <OperatorsLoaderStyled>
        <img src={spinner} alt="loader" />
      </OperatorsLoaderStyled>
    );
  }

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
