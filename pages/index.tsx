import type { NextPage } from "next";
import { Operator } from "../common/types";
import OperatorsList from "../views/OperatorsList/OperatorsList";
import { api } from "./api/operators";

type HomeProps = {
  operators: Operator[];
};
const Home: NextPage<HomeProps> = (props) => {
  const { operators } = props;

  return <OperatorsList operators={operators} />;
};

export async function getStaticProps() {
  const operators = api.getOperators();

  if (!operators) {
    return {
      notFound: true,
    };
  }

  return {
    props: { operators },
  };
}
export default Home;
