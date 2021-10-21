import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Button, { ButtonShapeEnum } from "../../common/Button/Button";
import { CREATE_PATH } from "../../common/constants";
import { Operator } from "../../common/types";
import { Container } from "../../styles/globals";
import OperatorsList from "./OperatorsList/OperatorsList";

type OperatorsProps = {
  operators: Operator[];
};

const Operators: React.FC<OperatorsProps> = (props) => {
  const { operators } = props;
  return (
    <OperatorsContainer>
      <OperatorsList operators={operators} />
      <Link href={CREATE_PATH}>
        <OperatorsAddButton>
          <Button
            btnShape={ButtonShapeEnum.square}
            aria-label="Add operator"
          ></Button>
        </OperatorsAddButton>
      </Link>
    </OperatorsContainer>
  );
};

export default Operators;

const OperatorsContainer = styled(Container)`
  position: relative;
  min-height: 100vh;
  padding: 0;
  & ol {
    min-height: calc(100vh - 48px);
  }
`;

const OperatorsAddButton = styled.div`
  position: sticky;
  bottom: 2vh;
  margin-left: 16px;
  width: 48px;
  z-index: 10;
`;
