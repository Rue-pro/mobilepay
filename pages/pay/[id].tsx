import { GetStaticProps } from "next";
import React from "react";
import { Operator } from "../../common/types";
import PayForm from "../../views/Operators/PayForm/PayForm";
import { api } from "../api/operators";

type PayFormProps = {
  operator: Operator;
};

const PayPage: React.FC<PayFormProps> = (props) => {
  const { operator } = props;

  return <PayForm operator={operator} />;
};

export default PayPage;

export async function getStaticPaths() {
  const operators = api.getOperators();

  const paths = operators.map((operator) => ({
    params: { id: operator.id.toString() },
  }));
  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id: string = !params || typeof params.id !== "string" ? "" : params.id;
  const operator = api.getOperator(id);
  if (!operator) {
    return {
      notFound: true,
    };
  }
  return { props: { operator } };
};
