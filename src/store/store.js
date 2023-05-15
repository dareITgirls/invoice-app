import { configureStore } from "@reduxjs/toolkit";
import invoicesSlice from "./invoicesSlice";
import newFormModalStatusSlice from "./newFormModalStatusSlice";
import filterModalStatusSlice from "./filterModalStatusSlice";

export const store = configureStore({
    reducer: {
        invoices: invoicesSlice,
        newFormModalStatus: newFormModalStatusSlice,
        filterModalStatus: filterModalStatusSlice
    },
})