import { configureStore } from "@reduxjs/toolkit";
import invoicesSlice from "./invoicesSlice";

export const store = configureStore({
    reducer: {
        invoices: invoicesSlice,
    },
})