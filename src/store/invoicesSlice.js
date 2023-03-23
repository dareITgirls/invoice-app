import {createSlice} from "@reduxjs/toolkit";
import {addNewInvoice, deleteInvoice, editInvoice, fetchInvoices} from "./invoicesActions";

const initialState = {
    status: 'idle',
    entities: {}
}

const invoicesSlice = createSlice({
    name: 'invoices',
    initialState,
    reducers: {
        invoicesLoaded: (state, action) => {
            const newEntities = {}
            action.payload.forEach((invoice) => {
                newEntities[invoice.id] = invoice
            })
            state.entities = newEntities
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchInvoices.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchInvoices.fulfilled, (state, action) => {
                const newEntities = {}
                action.payload.forEach((invoice) => {
                    newEntities[invoice.id] = invoice
                })
                state.entities = newEntities
                state.status = 'idle'
            })
            .addCase(addNewInvoice.fulfilled, (state, action) => {
                const invoice = action.payload
                state.entities[invoice.id] = invoice
            })
            .addCase(editInvoice.fulfilled, (state, action) => {
                const invoice = action.payload
                state.entities[invoice.id] = invoice
            })
            .addCase(deleteInvoice.fulfilled, (state, action) => {
                const invoiceID = action.payload
                delete state.entities[invoiceID]
            })
    }
});

export const { invoicesLoaded } = invoicesSlice.actions;

export default invoicesSlice.reducer;





