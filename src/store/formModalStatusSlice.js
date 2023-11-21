import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: false,
};

const formModalStatusSlice = createSlice({
  name: 'formModalStatus',
  initialState,
  reducers: {
    toggleFormModal(state, action) {
      state.status = action.payload;
    },
  },
});

export const { toggleFormModal } = formModalStatusSlice.actions;

export default formModalStatusSlice.reducer;
