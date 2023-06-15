import { useDispatch } from "react-redux";
import { fetchInvoices } from "./store/invoicesActions";
import UpdatedHome from "./pages/Home";
import { useEffect } from "react";
// TODO: Error boundary and use: https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInvoices());
  }, [dispatch]);

  return <UpdatedHome />;
}

export default App;
