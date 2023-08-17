import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Home } from "./pages/Home";
import { ErrorPage } from './pages/Error';
import { fetchInvoices } from "./store/invoicesActions";
import { logErrorToService } from './utils/consts'

export const App = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.invoices.error);

  useEffect(() => {
      dispatch(fetchInvoices());
  }, [dispatch]);

  return (
    <ErrorBoundary FallbackComponent={ErrorPage} onError={logErrorToService}>
    
      {!error && <Home />}
      {error && <ErrorPage error={error} />}
    </ErrorBoundary>
  );
};

export default App;
