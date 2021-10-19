import styled from "styled-components";
import { colors } from "../../../styles/constants";

export const PayFormStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const PayFormBodyStyled = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PayFormRowStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  width: 280px;
`;

export const PayFormTitleStyled = styled.h1`
  color: #242424;
  font-weight: 500;
  font-size: 36px;
`;

export const PayFormLabelStyled = styled.label`
  display: block;
  padding-left: 16px;
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 500;
  opacity: 0.8;
  text-align: start;
`;

export const PayFormInputStyled = styled.input`
  display: block;
  margin: 0 auto;
  width: 100%;
  padding: 10px 16px;
  border: 2px solid #cfd1d8;
  border-radius: 23px;
  font-weight: 500;
  font-size: 16px;
  text-align: left;
  &:focus {
    border: 2px solid ${colors.primary};
    outline: none;
  }
`;

export const PayFormButtonStyled = styled.button`
  margin: 0 auto;
  padding: 12px 18px;
  border: none;
  border-radius: 23px;
  background-color: ${colors.primary};
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.6s;
  &:hover {
    background: linear-gradient(
      45deg,
      ${colors.btn_primary_focus},
      ${colors.btn_primary_hover}
    );
    background-color: ${colors.btn_primary_hover};
  }
  &:focus {
    background: linear-gradient(
      45deg,
      ${colors.btn_primary_active},
      ${colors.btn_primary_focus}
    );
    background-color: ${colors.btn_primary_focus};
  }
  &:active {
    background: linear-gradient(
      45deg,
      ${colors.btn_primary_hover},
      ${colors.btn_primary_active}
    );
    background-color: ${colors.btn_primary_active};
  }
`;
