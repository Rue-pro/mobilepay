import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../../common/Button/Button";
import Input from "../../../common/Input/Input";
import Label from "../../../common/Label/Label";
import Row from "../../../common/Row/Row";
import Title from "../../../common/Title/Title";
import { api } from "../../../pages/api/operators";

const AddOperator: React.FC = () => {
  const router = useRouter();

  const [name, setName] = useState<string>("");
  const [logoURL, setLogoURL] = useState<string>("");

  const submit = () => {
    api.createOperator({ name, logoURL });
    router.push("/");
  };

  const handleInputName = (e: any) => {
    const { value } = e.target;
    setName(value);
  };
  const handleInputLogoURL = (e: any) => {
    const { value } = e.target;
    setLogoURL(value);
  };

  return (
    <AddOperatorStyled>
      <AddOperatorBodyStyled
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
      >
        <Title>Оператор</Title>
        <Row>
          <Label htmlFor="createOperatorFormName">Наименование</Label>
          <Input
            id="createOperatorFormName"
            type="text"
            required
            onInput={handleInputName}
          />
        </Row>
        <Row>
          <Label htmlFor="createOperatorFormLogoURL">Ссылка на логотип</Label>
          <Input
            id="createOperatorFormLogoURL"
            type="text"
            required
            onInput={handleInputLogoURL}
          />
        </Row>
        <Row>
          <Button>Сохранить</Button>
        </Row>
      </AddOperatorBodyStyled>
    </AddOperatorStyled>
  );
};

export default AddOperator;

export const AddOperatorStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const AddOperatorBodyStyled = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
