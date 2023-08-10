import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";

import { App } from "./App";
import InvoiceView from "./pages/InvoiceView";
import { store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/invoices/:invoiceId' element={<InvoiceView />} />
          <Route path='/' element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
