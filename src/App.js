import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useDispatch } from "react-redux";

import ErrorExampleComponentTest from "./error-boundary/ErrorExample";
import { Home } from "./pages/Home";
import { fetchInvoices } from "./store/invoicesActions";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInvoices());
  }, [dispatch]);

  return (
    <ErrorBoundary fallback={<ErrorExampleComponentTest />}>
      <Home />
    </ErrorBoundary>
  );
};

export default App;
