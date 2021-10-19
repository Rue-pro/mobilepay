import Link from "next/link";
import React from "react";
import { PAY_PATH } from "../../../../common/constants";
import { Operator } from "../../../../common/types";
import {
  OperatorImgStyled,
  OperatorLinkStyled,
  OperatorStyled,
  OperatorTextStyled,
} from "./styles";

export type OperatorListItemProps = {
  operator: Operator;
};

const OperatorListItem: React.FC<OperatorListItemProps> = ({ operator }) => {
  const { id, name, logoURL } = operator;
  return (
    <OperatorStyled>
      <Link href={PAY_PATH + "/" + id}>
        <OperatorLinkStyled>
          <OperatorImgStyled src={logoURL} alt={name + " logotype"} />
          <OperatorTextStyled className="text">{name}</OperatorTextStyled>
        </OperatorLinkStyled>
      </Link>
    </OperatorStyled>
  );
};

export default OperatorListItem;
