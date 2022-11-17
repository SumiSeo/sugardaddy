import React from "react";
import ExpensesManager from "../ExpensesManager/ExpensesManager";
import Navigator from "../Navigator/Navigator";

import "./App.scss";

const App = (): JSX.Element => {
  return (
    <React.StrictMode>
      <div className="app">
        <div className="app__container">
          <div className="app_column">
            <Navigator />
          </div>
          <div className="app_column">
            <ExpensesManager />
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default App;
