import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import Button from "../../../common/Button/Button";
import Input from "../../../common/Input/Input";
import Label from "../../../common/Label/Label";
import Row from "../../../common/Row/Row";
import Title from "../../../common/Title/Title";
import { Operator, OperatorPayData } from "../../../common/types";
import { api } from "../../../pages/api/operators";

export interface PayFormOperator {
  id: number;
  name: string;
}
export interface PayFormProps {
  operator: Operator;
}

const PayForm: React.FC<PayFormProps> = (props) => {
  const { operator } = props;
  const router = useRouter();

  const [phone, setPhone] = useState<string>("");
  const [money, setMoney] = useState<string>("");

  const submit = (payData: OperatorPayData) => {
    const data = api.payOperator(payData);
    if (data.code === 0) {
      toast(data.message);
    } else {
      toast(data.message);
      router.push("/");
    }
  };

  const handleInputPhone = (e: any) => {
    const { value } = e.target;
    setPhone(value);
  };
  const handleInputMoney = (e: any) => {
    const { value } = e.target;
    setMoney(value);
  };

  const handleSubmit = () => {
    submit({ id: operator.id, phone: phone, money: Number(money) });
  };

  return (
    <PayFormStyled>
      <PayFormBodyStyled
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <Title>{operator.name}</Title>

        <Row>
          <Label htmlFor="payform_phone">Телефон</Label>
          <Input
            id="payform_phone"
            type="tel"
            pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
            maxLength={12}
            minLength={12}
            required
            placeholder="+79998765432"
            value={phone}
            onInput={handleInputPhone}
          />
        </Row>

        <Row>
          <Label htmlFor="payform_money">Сумма (от 1 до 1000)</Label>
          <Input
            id="payform_money"
            type="number"
            min={1}
            max={1000}
            required
            placeholder="1000"
            value={money}
            onInput={handleInputMoney}
          />
        </Row>

        <Row>
          <Button>Оплатить</Button>
        </Row>
      </PayFormBodyStyled>
    </PayFormStyled>
  );
};

export default PayForm;

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
