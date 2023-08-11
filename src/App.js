import { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useDispatch } from "react-redux";

import { ErrorExample } from "./error-boundary/ErrorExample";
import { useSelector } from "react-redux";
import { Home } from "./pages/Home";
import { fetchInvoices } from "./store/invoicesActions";

export const App = () => {
  const [error, setError] = useState(null)
  const dispatch = useDispatch();
  const loadingStatus = useSelector((state) => state.invoices.status);

  useEffect(() => {
    dispatch(fetchInvoices())
  }, [dispatch]);

  return (
    <ErrorBoundary fallback={<div className="text-xl text-red-500">there is an error</div>}>
      <Home />
    </ErrorBoundary>
  );
};

export default App;
