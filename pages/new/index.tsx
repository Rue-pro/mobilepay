import React from "react";
import { Operator } from "../../common/types";
import AddOperator from "../../views/Operators/AddOperator/AddOperator";

type PayFormProps = {
  operator: Operator;
};

const PayPage: React.FC<PayFormProps> = () => {
  return <AddOperator />;
};

export default PayPage;
