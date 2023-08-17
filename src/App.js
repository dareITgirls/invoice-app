import { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useDispatch } from "react-redux";

import { ErrorExample } from "./error-boundary/ErrorExample";
import { useSelector } from "react-redux";
import { Home } from "./pages/Home";
import { fetchInvoices } from "./store/invoicesActions";

export const App = () => {

  const dispatch = useDispatch();
  const loadingStatus = useSelector((state) => state.invoices.status);
  const error = useSelector((state) => state.invoices.error);

  useEffect(() => {
      dispatch(fetchInvoices());

  }, [dispatch]);

  function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

  function logErrorToService(error) {
  console.error("Caught an error:", error);
}

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={logErrorToService}>
    
      {!error && <Home />}
      {error && <ErrorFallback error={error} />}
    </ErrorBoundary>
  );
};

export default App;
