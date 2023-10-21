import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setActiveUser(state, action) {
      state.user = action.payload;
    },
    setError(state, action) {
      state.user = null;
      state.error = {
        message: 'there was a problem with authentication, try again',
      };
    },
  },
});

export const { setActiveUser, setError } = authSlice.actions;

export default authSlice.reducer;
