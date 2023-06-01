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
import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInvoices } from './store/invoicesActions';
import Home from './pages/Home';

function App() {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchInvoices())

    },[]);

	return <Home />;
}
export default App;
