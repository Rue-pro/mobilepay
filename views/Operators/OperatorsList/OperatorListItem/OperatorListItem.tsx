import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { PAY_PATH } from "../../../../common/constants";
import { Operator } from "../../../../common/types";
import { colors, device } from "../../../../styles/constants";

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

export const OperatorStyled = styled.li`
  position: relative;
  height: 307px;
  width: 100%;
  margin-top: 25px;

  @media ${device.mobileXL} {
    width: 49%;
    &:nth-child(n) {
      margin-right: 2%;
    }
    &:nth-child(2n) {
      margin-right: 0;
    }
  }

  @media ${device.tablet} {
    width: 32%;
    &:nth-child(2n) {
      margin-right: 2%;
    }
    &:nth-child(3n) {
      margin-right: 0;
    }
  }
`;

const OperatorTextStyled = styled.div`
  color: ${colors.text_dark};
  font-weight: 500;
  font-size: 36px;
  transition: font-size 0.3s;
`;

const OperatorLinkStyled = styled.a`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-decoration: none;
  padding: 16px;
  background-color: #ffffff;
  box-shadow: 0px 0px 8px ${colors.shadow_primary};
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.3s;
  &:hover,
  &:focus {
    transform: rotate(3deg);
    z-index: 1;
    & ${OperatorTextStyled} {
      font-size: 50px;
    }
  }
`;

const OperatorImgStyled = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  margin-bottom: 20px;
`;
