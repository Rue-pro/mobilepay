import { OperatorPayData, OperatorNew } from "../../common/types";
import operators from "../../db/operators";

const RESPONSE_MESSAGES = [
  "Произошла ошибка. Не удалось провести оплату.",
  "Оплата проведена успешно.",
];

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};

export const api = {
  getOperators() {
    return operators;
  },
  getOperator(id: string) {
    return operators.find((op) => op.id === Number(id)) || null;
  },
  createOperator(operator: OperatorNew) {
    operators.push(Object.assign(operator, { id: operators.length + 1 }));
    return {
      code: 1,
      message: "Оператор успешно создан.",
    };
  },
  payOperator(payData: OperatorPayData) {
    const responseCode = getRandomInt(2);
    return {
      code: responseCode,
      message: RESPONSE_MESSAGES[responseCode],
    };
  },
};
