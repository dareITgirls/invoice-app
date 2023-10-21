import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Nav } from './components/Nav';
import { ProtectedRoute } from './helpers/ProtectedRoute';
import { ErrorPage } from './pages/Error';
import { Home } from './pages/Home';
import InvoiceView from './pages/InvoiceView';
import { Root } from './pages/Root';
import { fetchInvoices } from './store/invoicesActions';
import { PageContentWrapper } from './UI/PageContentWrapper';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInvoices());
  }, [dispatch]);

  return (
    <PageContentWrapper>
      <Nav />
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/invoices" element={<ProtectedRoute />}>
          <Route index element={<Home />} />
        </Route>
        <Route path=":invoiceId" element={<ProtectedRoute />}>
          <Route index element={<InvoiceView />} />
        </Route>
        <Route
          path="*"
          element={
            <ErrorPage
              error={{ message: 'The page you’re looking for can’t be found.' }}
            />
          }
        />
      </Routes>
    </PageContentWrapper>
  );
};

export default App;
