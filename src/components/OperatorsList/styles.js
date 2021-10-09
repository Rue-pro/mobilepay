import styled from "styled-components";
import { device } from "../../common/constants";

export const OperatorsStyled = styled.ol`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 16px;

  & > li {
    width: 100%;
    margin-top: 24px;
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
