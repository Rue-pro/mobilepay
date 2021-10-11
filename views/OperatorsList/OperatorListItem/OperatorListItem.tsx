import React from "react";
import Link from "next/link";
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
      <Link href={PAY_PATH + "/" + id}>
        <a>
          <img src={logoURL} alt={name + " logotype"} />
          <div className="text">{name}</div>{" "}
        </a>
      </Link>
    </OperatorStyled>
  );
};

export default OperatorListItem;
