import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Operator } from "../../../common/types";
import { api } from "../../../pages/api/operators";
import { colors } from "../../../styles/constants";
import OperatorListItem from "./OperatorListItem/OperatorListItem";

type OperatorsListProps = {
  operators: Operator[];
};
const OperatorsList: React.FC<OperatorsListProps> = (props) => {
  const { operators: operatorsSSR } = props;
  const [operators, setOperators] = useState<Operator[]>(operatorsSSR);

  useEffect(() => {
    setOperators(api.getOperators());
  }, []);

  if (!operators.length) {
    return (
      <OperatorsEmptyListStyled>
        Список мобильных операторов пуст
      </OperatorsEmptyListStyled>
    );
  }

  return (
    <OperatorsStyled>
      {operators.map((operator) => {
        return <OperatorListItem key={operator.id} operator={operator} />;
      })}
    </OperatorsStyled>
  );
};

export default OperatorsList;

const OperatorsStyled = styled.ol`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 16px;
`;

const OperatorsEmptyListStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  font-weight: 500;
  font-size: 50px;
  color: ${colors.text_gray_light};
  text-align: center;
`;
