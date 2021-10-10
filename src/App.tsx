import { createBrowserHistory } from "history";
import React from "react";
import { Route, Router } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OperatorsList from "./components/OperatorsList/OperatorsList";
import PayForm from "./components/PayForm/PayForm";
import { AppStyled } from "./styles";

const history = createBrowserHistory();

const App: React.FC = () => {
  const handleNotify = (message: string) => {
    toast(message);
  };
  return (
    <AppStyled>
      <Router history={history}>
        <Route exact path="/" render={() => <OperatorsList />} />
        <Route
          path="/pay/:id?"
          render={() => <PayForm onNotice={handleNotify} />}
        />
      </Router>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </AppStyled>
  );
};

export default App;
