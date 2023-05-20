import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    status: false,
}

const newFormModalStatusSlice = createSlice( {
    name: 'newFormModalStatus',
    initialState,
    reducers: {
        openNewFormModal(state, action) {
            state.status = true
        },
        closeNewFormModal(state,action) {
            state.status = false
        }
    }
});

export const {openNewFormModal, closeNewFormModal} = newFormModalStatusSlice.actions;

export default newFormModalStatusSlice.reducer