import React, { useState } from "react";
import InputMask from "react-input-mask";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { PayFormStyled } from "./styles";
import { Operator, OperatorPayData } from "../../common/types";
import { api } from "../../pages/api/operators";

type InputData = {
  text: string;
  error?: string;
};
enum MONEY_OPTIONS {
  max = 1000,
  min = 0,
}
enum MONEY_VALIDATION {
  required,
  isInteger,
  max,
  min,
}
const ERRORS = {
  empty: "Обязательно к заполнению",
  money: {
    range: `Принимаются рубли от ${MONEY_OPTIONS.min} до ${MONEY_OPTIONS.max}`,
    max: `Максимальная сумма для пополнения ${MONEY_OPTIONS.max}`,
    min: `Минимальная сумма для пополнения ${MONEY_OPTIONS.min}`,
  },
};

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

  const [showLoader, setShowLoader] = useState<boolean>(true);
  const [phone, setPhone] = useState<InputData>({ text: "" });
  const [money, setMoney] = useState<InputData>({ text: "" });

  const submit = (payData: OperatorPayData) => {
    const data = api.payOperator();
    if (data.code === 0) {
      toast(data.message);
      setShowLoader(false);
    } else {
      toast(data.message);
      setShowLoader(false);
      router.push("/");
    }
  };

  const moneyValidation = (_value: string, type: MONEY_VALIDATION) => {
    const value = Number(_value);
    const { min, max } = MONEY_OPTIONS;
    switch (type) {
      case MONEY_VALIDATION.required:
        if (_value === "") {
          setMoney({ ...money, text: _value, error: ERRORS.empty });
          return 0;
        }
        break;
      case MONEY_VALIDATION.isInteger:
        if (isNaN(value)) {
          setMoney({ ...money, error: ERRORS.money.range });
          return 0;
        }
        break;
      case MONEY_VALIDATION.max:
        if (value > max) {
          setMoney({
            ...money,
            error: ERRORS.money.max,
          });
          return 0;
        }
        break;
      case MONEY_VALIDATION.min:
        if (value < min) {
          setMoney({
            ...money,
            error: ERRORS.money.min,
          });
          return 0;
        }
        break;
    }
    return 1;
  };

  const validateMoney = (value: string) => {
    let result = 1;
    result *= moneyValidation(value, MONEY_VALIDATION.isInteger);
    result *= moneyValidation(value, MONEY_VALIDATION.max);
    result *= moneyValidation(value, MONEY_VALIDATION.min);
    return result;
  };
  const validatePhone = (value: string) => {
    if (!value.trim()) {
      setPhone({ ...phone, text: value, error: ERRORS.empty });
      return 0;
    }
    return 1;
  };

  const handleInputPhone = (e: any) => {
    setPhone({ ...phone, text: e.target.value, error: "" });
  };
  const handleInputMoney = (e: any) => {
    const { value } = e.target;
    if (!validateMoney(value)) return;
    setMoney({ ...money, text: value, error: "" });
  };

  const handleSubmit = () => {
    let phoneText = phone.text;
    phoneText = phoneText.slice(2, phoneText.length);

    const phoneResult = validatePhone(phoneText);
    const moneyResult =
      validateMoney(money.text) *
      moneyValidation(money.text, MONEY_VALIDATION.required);
    if (!phoneResult || !moneyResult) {
      return;
    }

    setPhone({ ...phone, error: "" });
    setMoney({ ...money, error: "" });

    if (operator)
      submit({ id: operator.id, phone: phone.text, money: Number(money.text) });
  };

  return (
    <PayFormStyled>
      <div className="body">
        <h1 className="title">{operator.name}</h1>

        <div className="row">
          <label htmlFor="payform_phone">Телефон</label>
          <InputMask
            id="payform_phone"
            type="tel"
            mask="+79999999999"
            maskChar=""
            placeholder="+79998765432"
            value={phone.text}
            onInput={handleInputPhone}
          />
          {phone.error && <div className="error">{phone.error}</div>}
        </div>

        <div className="row">
          <label htmlFor="payform_money">Сумма</label>
          <input
            id="payform_money"
            placeholder="1000"
            value={money.text}
            onInput={handleInputMoney}
          />
          {money.error && <div className="error">{money.error}</div>}
        </div>

        <div className="row">
          <button onClick={handleSubmit}>Оплатить</button>
        </div>
      </div>
    </PayFormStyled>
  );
};

export default PayForm;
