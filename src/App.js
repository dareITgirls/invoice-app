import './App.css';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchInvoices} from "./store/invoicesActions";

function App() {

    //mozecie popatrzec czy wyniki sie wyswietlaja
    const invoicesList = useSelector(state => state.invoices.entities)
    const dispatch = useDispatch()
    console.log(invoicesList)

    useEffect(() => {
        dispatch(fetchInvoices())
    },[]);


  return (
    <div className="text-white font-bold bg-black h-screen flex flex-auto flex-col items-center justify-center">
      <h1 className="text-6xl m-20">Hello dareITgirl!</h1>
      <p className="text-3xl">Hope you doing great today!</p>
      <p className="text-3xl">Let's do some codin':D:D</p>
    </div>
  );
}
export default App;
