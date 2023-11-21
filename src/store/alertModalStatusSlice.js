import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: false,
};

const alertModalStatusSlice = createSlice({
  name: 'alertModalStatus',
  initialState,
  reducers: {
    toggleAlertModal(state, action) {
      state.status = action.payload;
    },
  },
});

export const { toggleAlertModal } = alertModalStatusSlice.actions;

export default alertModalStatusSlice.reducer;
