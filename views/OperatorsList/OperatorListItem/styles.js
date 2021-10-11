import styled from "styled-components";
import { colors } from "../../../common/constants";

export const OperatorStyled = styled.li`
  & a {
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
      & .text {
        font-size: 50px;
      }
    }
  }
  & .text {
    color: ${colors.text_dark};
    font-weight: 500;
    font-size: 36px;
    transition: font-size 0.3s;
  }
  & img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    margin-bottom: 20px;
  }
`;
