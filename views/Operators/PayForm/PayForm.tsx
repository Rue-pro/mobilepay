import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Operator, OperatorPayData } from "../../../common/types";
import { api } from "../../../pages/api/operators";
import {
  PayFormBodyStyled,
  PayFormButtonStyled,
  PayFormInputStyled,
  PayFormLabelStyled,
  PayFormRowStyled,
  PayFormStyled,
  PayFormTitleStyled,
} from "./styles";

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
        <PayFormTitleStyled>{operator.name}</PayFormTitleStyled>

        <PayFormRowStyled>
          <PayFormLabelStyled htmlFor="payform_phone">
            Телефон
          </PayFormLabelStyled>
          <PayFormInputStyled
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
        </PayFormRowStyled>

        <PayFormRowStyled>
          <PayFormLabelStyled htmlFor="payform_money">
            Сумма (от 1 до 1000)
          </PayFormLabelStyled>
          <PayFormInputStyled
            id="payform_money"
            type="number"
            min={1}
            max={1000}
            required
            placeholder="1000"
            value={money}
            onInput={handleInputMoney}
          />
        </PayFormRowStyled>

        <PayFormRowStyled>
          <PayFormButtonStyled>Оплатить</PayFormButtonStyled>
        </PayFormRowStyled>
      </PayFormBodyStyled>
    </PayFormStyled>
  );
};

export default PayForm;
