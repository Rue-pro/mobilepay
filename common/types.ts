export interface OperatorNew {
  name: string;
  logoURL: string;
}

export interface Operator extends OperatorNew {
  id: number;
}

export type OperatorPayData = {
  id: number;
  phone: string;
  money: number;
};

export type ResponseResult = {
  code: number;
  message: string;
};
