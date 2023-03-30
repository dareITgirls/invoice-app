import { configureStore } from "@reduxjs/toolkit";
import invoicesSlice from "./invoicesSlice";
import modalStatusSlice from "./modalStatusSlice";

export const store = configureStore({
    reducer: {
        invoices: invoicesSlice,
        modalStatus: modalStatusSlice
    },
})