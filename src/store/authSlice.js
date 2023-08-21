import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoggedIn: false,
	user: null,

};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logIn(state, action) {
			state.isLoggedIn = true;
		},
		logOut(state, action) {
			state.isLoggedIn = false;
		},
		setUser(state, action) {
			state.user = action.payload;
		}
	},
});

export const { logIn, logOut, setUser } = authSlice.actions;

export default authSlice.reducer;
