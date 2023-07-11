import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./App";
import { store } from "./store/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InvoiceView from "./pages/InvoiceView";

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
