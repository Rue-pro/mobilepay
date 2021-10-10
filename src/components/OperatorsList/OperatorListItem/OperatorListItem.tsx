import React from "react";
import { Link } from "react-router-dom";
import { PAY_PATH } from "../../../common/constants";
import { Operator } from "../../../common/types";
import { OperatorStyled } from "./styles";

export type OperatorListItemProps = {
  operator: Operator;
};

const OperatorListItem: React.FC<OperatorListItemProps> = ({ operator }) => {
  const { id, name, logoURL } = operator;
  return (
    <OperatorStyled>
      <Link
        to={{
          pathname: PAY_PATH + "/" + id,
        }}
      >
        <img src={logoURL} alt={name + " logotype"} />
        <div className="text">{name}</div>
      </Link>
    </OperatorStyled>
  );
};

export default OperatorListItem;
