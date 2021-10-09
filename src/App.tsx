import React from "react";
import OperatorsList from "./components/OperatorsList/OperatorsList";
import { operators } from "./operators";

const App: React.FC = () => {
  return (
    <div className="App">
      <OperatorsList operators={operators} />
    </div>
  );
};

export default App;
