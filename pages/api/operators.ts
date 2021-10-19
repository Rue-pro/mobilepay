import { OperatorPayData } from "../../common/types";
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
  payOperator(payData: OperatorPayData) {
    const responseCode = getRandomInt(2);
    return {
      code: responseCode,
      message: RESPONSE_MESSAGES[responseCode],
    };
  },
};
