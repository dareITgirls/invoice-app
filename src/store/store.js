import { configureStore } from "@reduxjs/toolkit";

import filterModalSlice from "./filterModalSlice";
import invoicesSlice from "./invoicesSlice";
import newFormModalStatusSlice from "./newFormModalStatusSlice";

export const store = configureStore({
  reducer: {
    invoices: invoicesSlice,
    newFormModalStatus: newFormModalStatusSlice,
    filterModal: filterModalSlice,
  },
});
