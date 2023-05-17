import { configureStore } from "@reduxjs/toolkit";
import invoicesSlice from "./invoicesSlice";
import newFormModalStatusSlice from "./newFormModalStatusSlice";
import filterModalSlice from "./filterModalSlice";

export const store = configureStore({
    reducer: {
        invoices: invoicesSlice,
        newFormModalStatus: newFormModalStatusSlice,
        filterModal: filterModalSlice
    },
})