import styled from "styled-components";
import { device, colors } from "../common/constants";

export const OperatorsStyled = styled.ol`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0 16px;

  & > li {
    width: 100%;
    margin-top: 25px;
  }

  @media ${device.mobileXL} {
    & > li {
      width: 49%;
    }
  }

  @media ${device.tablet} {
    & > li {
      width: 32%;
    }
  }
`;

export const OperatorsLoaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  & img {
    width: 100px;
  }
`;

export const OperatorsEmptyListStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  & span {
    font-weight: 500;
    font-size: 50px;
    color: ${colors.text_gray_light};
    text-align: center;
  }
`;
