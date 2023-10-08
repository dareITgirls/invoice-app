import { useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useDispatch } from 'react-redux';

import { ErrorPage } from './pages/Error';
import { Home } from './pages/Home';
import { fetchInvoices } from './store/invoicesActions';
import { logErrorToService } from './utils/consts';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInvoices());
  }, [dispatch]);

  return (
    <ErrorBoundary FallbackComponent={ErrorPage} onError={logErrorToService}>
      <Home />
    </ErrorBoundary>
  );
};

export default App;
