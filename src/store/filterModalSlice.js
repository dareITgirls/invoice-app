import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    status: false,
    invoiceStatusToFilter: []
}

const filterModalSlice = createSlice( {
    name: 'filterModal',
    initialState,
    reducers: {
        openFilterModal(state, action) {
            state.status = true
        },
        closeFilterModal(state, action) {
            state.status = false
        },
        // invoiceStatusFilterChanged: {
        //     reducer(state, action) {
        //         let { invoiceStatus, changeType } = action.payload
        //         const { chosenInvoiceStatus } = state
        //         switch (changeType) {
        //             case 'added': {
        //                 if (!chosenInvoiceStatus.includes(invoiceStatus)) {
        //                     chosenInvoiceStatus.push(invoiceStatus)
        //                 }
        //                 break
        //             }
        //             case 'removed': {
        //                 state.invoiceStatusToFilter = chosenInvoiceStatus.filter(
        //                     (existingInvoiceStatus) => existingInvoiceStatus !== invoiceStatus
        //                 )
        //             }
        //             default:
        //                 return
        //         }
        //     },
        //     prepare(invoiceStatus, changeType) {
        //         return {
        //             payload: { invoiceStatus, changeType },
        //         }
        //     },
        // }
    }
});

export const {openFilterModal, closeFilterModal, invoiceStatusFilterChanged} = filterModalSlice.actions;

export default filterModalSlice.reducer