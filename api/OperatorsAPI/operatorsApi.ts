import { Operator, OperatorPayData, ResponseResult } from "../../common/types";
import { logApiData } from "../console";

const fakeOperators = [
  {
    id: 1,
    name: "МТС",
    logoURL:
      "https://upload.wikimedia.org/wikipedia/commons/8/86/MTS_logo_2015.svg",
  },
  {
    id: 2,
    name: "Билайн",
    logoURL:
      "https://upload.wikimedia.org/wikipedia/commons/7/7a/BeeLine_logo.png",
  },
  {
    id: 3,
    name: "Мегафон",
    logoURL:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/MegaFon_logo.svg",
  },
];

const responseMessages = [
  "Произошла ошибка. Не удалось провести оплату.",
  "Оплата проведена успешно.",
];

const getOperators = (): Promise<Operator[]> => {
  return new Promise<Operator[]>((resolve) => {
    logApiData("getOperators", "get", fakeOperators);
    setTimeout(() => resolve(fakeOperators), 2000);
  });
};

const getOperator = (id: number): Promise<Operator | null> => {
  return new Promise<Operator | null>((resolve) => {
    let operator: Operator | null =
      fakeOperators.find((operator) => operator.id === id) || null;
    logApiData("getOperator", "get", operator, id);
    setTimeout(() => resolve(operator), 2000);
  });
};

const payOperator = (payData: OperatorPayData): Promise<ResponseResult> => {
  const getRandomInt = (max: number): number => {
    return Math.floor(Math.random() * max);
  };
  const responseCode = getRandomInt(2);
  const response = {
    code: responseCode,
    message: responseMessages[responseCode],
  };
  logApiData("payOperator", "post", payData);
  return new Promise<ResponseResult>((resolve) => {
    setTimeout(() => resolve(response), 2000);
  });
};

const operatorsMock = {
  getOperators,
  getOperator,
  payOperator,
};

export default operatorsMock;
