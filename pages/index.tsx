import type { NextPage, GetStaticProps } from "next";
import { Operator } from "../common/types";
import Operators from "../views/Operators/Operators";
import { api } from "./api/operators";

type HomeProps = {
  operators: Operator[];
};
const Home: NextPage<HomeProps> = (props) => {
  const { operators } = props;

  return <Operators operators={operators} />;
};
export const getStaticProps: GetStaticProps = async () => {
  const operators = api.getOperators();

  if (!operators) {
    return {
      notFound: true,
    };
  }

  return {
    props: { operators },
  };
};
export default Home;
