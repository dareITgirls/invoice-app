import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { App } from "./App";
// eslint-disable-next-line no-unused-vars
import InvoiceView from "./pages/InvoiceView";
import { store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route
            path='/invoices/:invoiceId'
            // eslint-disable-next-line react/jsx-no-undef
            element={<UpdatedInvoiceComponent />}
          />
          <Route path='/' element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
