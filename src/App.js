import React, { useEffect } from 'react';
import {useDispatch} from "react-redux";

import { Home } from './pages/Home';
import { fetchInvoices } from './store/invoicesActions';

export const App = () => {
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchInvoices())
    },[dispatch]);

  return (
      <Home/>
  );
}

