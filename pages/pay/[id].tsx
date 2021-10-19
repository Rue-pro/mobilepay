import { GetServerSideProps, GetStaticProps } from "next";
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id: string = !params || typeof params.id !== "string" ? "" : params.id;
  const operator = api.getOperator(id);
  return { props: { operator } };
};
