import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setActiveUser(state, action) {
			state.user = action.payload;
		},
	},
});

export const { setActiveUser } = authSlice.actions;

export default authSlice.reducer;
