import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    status: false,
}

const filterModalStatusSlice = createSlice( {
    name: 'filterModalStatus',
    initialState,
    reducers: {
        openFilterModal(state, action) {
            state.status = true
        },
        closeFilterModal(state,action) {
            state.status = false
        }
    }
});

export const {openFilterModal, closeFilterModal} = filterModalStatusSlice.actions;

export default filterModalStatusSlice.reducer