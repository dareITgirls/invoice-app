import {createSlice} from "@reduxjs/toolkit";
import {addNewInvoice, deleteInvoice, editInvoice, fetchInvoices} from "./invoicesActions";

const initialState = {
    status: false,
}

const modalStatusSlice = createSlice({
    name: 'modalStatus',
    initialState,
    reducers: {
        openModal(state, action) {
            state.status = true
        },
        closeModal(state, action) {
            state.status = false
        },
    }
});

export const { openModal, closeModal } = modalStatusSlice.actions;

export default modalStatusSlice.reducer;





