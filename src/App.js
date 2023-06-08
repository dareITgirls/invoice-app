import { useDispatch } from "react-redux";
import { fetchInvoices } from './store/invoicesActions';
import Home from './pages/Home';
import { useEffect } from 'react';


function App() {

  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchInvoices())
    },[dispatch]);

  return (
    <Home />
  );
}

export default App;
