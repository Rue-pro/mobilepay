import React from "react";
import styled from "styled-components";

const Form: React.FC<React.FormHTMLAttributes<HTMLFormElement>> = (props) => {
  const { children, ...rest } = props;
  return (
    <FormWrapperStyled>
      <FormStyled {...rest}>{children}</FormStyled>
    </FormWrapperStyled>
  );
};

export default Form;

const FormWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const FormStyled = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
