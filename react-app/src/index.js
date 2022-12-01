import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { ModalProvider } from "./context/Modal";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./store";
import "./index.css";

const store = configureStore();

const Root = () => {
  return (
    <Provider store={store}>
      <ModalProvider>
        {/* <BrowserRouter> */}
        <App />
        {/* </BrowserRouter> */}
      </ModalProvider>
    </Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
