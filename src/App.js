import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";

import { Home } from './pages/Home';
import { fetchInvoices } from './store/invoicesActions';
import {Nav} from "./components/Nav";
import {NewInvoice} from "./components/newInvoice/NewInvoice";

export const App = () => {
  const modalStatus = useSelector(state => state.newFormModalStatus.status);
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchInvoices())
    },[dispatch]);

  return (
      <>
        {!modalStatus &&
            <>
              <div className='flex flex-col lg:flex-row relative lg:justify-center'>
                <Nav />
                <Home/>
              </div>
            </>}
        {modalStatus && <NewInvoice />}
      </>
  );
}

