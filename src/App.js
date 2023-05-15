import {useDispatch, useSelector} from "react-redux";
import { openModal } from "./store/modalStatusSlice";
import { NewInvoice } from './components/newInvoice/NewInvoice'
import { useEffect } from 'react';


function App() {

  const modalStatus = useSelector(state => state.modalStatus.status);
  const dispatch = useDispatch();

  const openModalHandler = () => {
    dispatch(openModal());
    return
  }

  return (
  
    
    <><h1>new main page</h1>
      <button onClick={openModalHandler}>OPEN</button>
   
      {modalStatus === true && <NewInvoice />}
      </>
  );
}

export default App;
