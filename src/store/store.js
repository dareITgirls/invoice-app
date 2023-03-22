import { configureStore } from "@reduxjs/toolkit";
import invoicesSlice from "./slice";

export const store = configureStore({
    reducer: {
        invoices: invoicesSlice,
    },
})