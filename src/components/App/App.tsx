//dependencies
import React from "react";
import { Provider } from "react-redux";
import { store } from "../../state";

//components
import Navigator from "../Navigator/Navigator";
import Container from "../Container/Container";

import "./App.scss";

const App = (): JSX.Element => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <div className="app">
          <div className="app__container">
            <div className="app__column">
              <Navigator />
            </div>
            <div className="app__column">
              <Container />
            </div>
          </div>
        </div>
      </Provider>
    </React.StrictMode>
  );
};

export default App;
