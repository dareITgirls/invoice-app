import { createAction, createSelector, createSlice } from "@reduxjs/toolkit";

import {
  addNewInvoice,
  deleteInvoice,
  editInvoice,
  fetchInvoices,
} from "./invoicesActions";

const initialState = {
  status: "none",
  entities: {},
  error: false
};

const invoicesSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {
    invoicesLoaded: (state, action) => {
      const newEntities = {};
      action.payload.forEach((invoice) => {
        newEntities[invoice.id] = invoice;
      });
      state.entities = newEntities;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInvoices.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchInvoices.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = { message: action.payload };
      })
      .addCase(fetchInvoices.fulfilled, (state, action) => {
        const newEntities = {};
        action.payload.forEach((invoice) => {
          newEntities[invoice.id] = invoice;
        });
        state.entities = newEntities;
        state.status = "idle";
      })
      .addCase(addNewInvoice.fulfilled, (state, action) => {
        const invoice = action.payload;
        state.entities[invoice.id] = invoice;
      })
      .addCase(addNewInvoice.rejected, (state, action) => {
       state.status = 'rejected';
        state.error = { message: action.payload };
      })
      .addCase(editInvoice.fulfilled, (state, action) => {
        const invoice = action.payload;
        state.entities[invoice.id] = invoice;
      })
         .addCase(editInvoice.rejected, (state, action) => {
       state.status = 'rejected';
        state.error = { message: action.payload };
      })
      .addCase(deleteInvoice.fulfilled, (state, action) => {
        const invoiceID = action.payload;
        delete state.entities[invoiceID];
      })
        .addCase(deleteInvoice.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = { message: action.payload };
      })
      .addCase(toggleInvoiceStatus, (state, action) => {
        const invoiceId = action.payload;
        const invoice = state.entities[invoiceId];
        if (invoice) {
          invoice.status = invoice.status === "paid" ? "pending" : "paid";
        }
      });
  },
});

export const { invoicesLoaded } = invoicesSlice.actions;

export default invoicesSlice.reducer;

const selectInvoicesEntities = (state) => state.invoices.entities;

export const selectInvoices = createSelector(
  selectInvoicesEntities,
  (entities) => Object.values(entities)
);

export const selectFilteredInvoices = createSelector(
  selectInvoices,
  (state) => state.filterModal.filters,
  (invoices, filters) => {
    return invoices.filter((invoice) => {
      return (
        (filters.pending && invoice.status === "pending") ||
        (filters.paid && invoice.status === "paid") ||
        (filters.draft && invoice.status === "draft")
      );
    });
  }
);

export const selectFilteredInvoiceId = createSelector(
  selectFilteredInvoices,
  (invoices) => invoices.map((invoice) => invoice.id)
);

export const selectInvoiceById = (state, invoiceId) => {
  return selectInvoicesEntities(state)[invoiceId];
};

export const toggleInvoiceStatus = createAction("invoices/toggleInvoiceStatus");
