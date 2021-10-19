import styled from "styled-components";
import { device, colors } from "../../../styles/constants";
import { OperatorStyled } from "./OperatorListItem/styles";

export const OperatorsStyled = styled.ol`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 16px;

  & ${OperatorStyled} {
    width: 100%;
    margin-top: 25px;
  }

  @media ${device.mobileXL} {
    & ${OperatorStyled} {
      width: 49%;
    }
  }

  @media ${device.tablet} {
    & ${OperatorStyled} {
      width: 32%;
    }
  }
`;

export const OperatorsEmptyListStyled = styled.div`
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
