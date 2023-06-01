import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    modalStatus: false,
    filters: {
        paid: true,
        draft: true,
        pending: true
    }
}

const filterModalSlice = createSlice( {
    name: 'filterModal',
    initialState,
    reducers: {
        openFilterModal(state, action) {
            state.modalStatus = true
        },
        closeFilterModal(state, action) {
            state.modalStatus = false
        },
        toggleFilter: (state, action) => {
            const filterType = action.payload;
            state.filters[filterType] = !state.filters[filterType]
        }
    }
});

export const {openFilterModal, closeFilterModal, toggleFilter} = filterModalSlice.actions;

export default filterModalSlice.reducer