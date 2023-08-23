import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    status: false,
}

const formModalStatusSlice = createSlice( {
    name: 'formModalStatus',
    initialState,
    reducers: {
        toggleFormModal(state, action) {
            state.status = action.payload;
        }
        // openNewFormModal(state, action) {
        //     state.status = true
        // },
        // closeNewFormModal(state,action) {
        //     state.status = false
        // }
    }
});

export const {toggleFormModal} = formModalStatusSlice.actions;

export default formModalStatusSlice.reducer