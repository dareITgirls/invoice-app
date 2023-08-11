import { configureStore } from "@reduxjs/toolkit";
import filterModalSlice from "./filterModalSlice";
import invoicesSlice from "./invoicesSlice";
import newFormModalStatusSlice from "./newFormModalStatusSlice";
import alertModalStatusSlice from './alertModalStatusSlice';


export const store = configureStore({
    reducer: {
        invoices: invoicesSlice,
        newFormModalStatus: newFormModalStatusSlice,
        alertModalStatus: alertModalStatusSlice,
        filterModal: filterModalSlice,
    },
})
