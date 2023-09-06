import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Home } from "./pages/Home";
import { ErrorPage } from './pages/Error';
import { fetchInvoices } from "./store/invoicesActions";
import {PageContentWrapper} from "./UI/PageContentWrapper";
import {Nav} from "./components/Nav";
import {Route, Routes} from "react-router-dom";
import {Root} from "./pages/Root";
import {ProtectedRoute} from "./helpers/ProtectedRoute";
import InvoiceView from "./pages/InvoiceView";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInvoices());
  }, [dispatch]);

  return (
    <PageContentWrapper>
      <Nav/>
      <Routes>
        <Route path='/' element={<Root />} />
        <Route path='/invoices' element={<ProtectedRoute />}>
          <Route index element={<Home />} />
        </Route>
        <Route path=':invoiceId' element={<ProtectedRoute />}>
          <Route index element={<InvoiceView />} />
        </Route>
        <Route path='*' element={<ErrorPage
            error={{ message: 'The page you’re looking for can’t be found.' }}
        />} />
      </Routes>
    </PageContentWrapper>
  );
};

export default App;
