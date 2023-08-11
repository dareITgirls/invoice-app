import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    status: false,
}

const alertModalStatusSlice = createSlice( {
    name: 'alertModalStatus',
    initialState,
    reducers: {
        openAlertModal(state, action) {
            state.status = true
        },
        closeAlertModal(state,action) {
            state.status = false
        }
    }
});

export const {openAlertModal, closeAlertModal} = alertModalStatusSlice.actions;

export default alertModalStatusSlice.reducer