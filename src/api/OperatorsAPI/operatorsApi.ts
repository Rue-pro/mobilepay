import { Operators, OperatorPayData, ResponseResult } from "../../common/types";
import { logApiData } from "../console";

const fakeOperators = [
  {
    id: 1,
    englishName: "mts",
    name: "МТС",
    logoURL:
      "https://upload.wikimedia.org/wikipedia/commons/8/86/MTS_logo_2015.svg",
  },
  {
    id: 2,
    englishName: "beline",
    name: "Билайн",
    logoURL:
      "https://upload.wikimedia.org/wikipedia/commons/7/7a/BeeLine_logo.png",
  },
  {
    id: 3,
    englishName: "megafon",
    name: "Мегафон",
    logoURL:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/MegaFon_logo.svg",
  },
];

const responseMessages = [
  "Произошла ошибка. Не удалось провести оплату.",
  "Оплата проведена успешно.",
];

const getOperators = (): Promise<Operators[]> => {
  return new Promise<Operators[]>((resolve) => {
    logApiData("getOperators", "get", fakeOperators);
    setTimeout(() => resolve(fakeOperators), 2000);
  });
};

const getOperator = (id: number): Promise<Operators> => {
  return new Promise<Operators>((resolve) => {
    const operator = fakeOperators.find((operator) => operator.id === id);
    logApiData("getOperator", "get", operator, id);
    if (operator) setTimeout(() => resolve(operator), 2000);
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
