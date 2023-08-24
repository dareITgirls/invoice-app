import { configureStore } from '@reduxjs/toolkit';

import alertModalStatusSlice from './alertModalStatusSlice';
import authSlice from './authSlice';
import filterModalSlice from './filterModalSlice';
import invoicesSlice from './invoicesSlice';
import formModalStatusSlice from './formModalStatusSlice';

export const store = configureStore({
	reducer: {
		invoices: invoicesSlice,
		formModalStatus: formModalStatusSlice,
		alertModalStatus: alertModalStatusSlice,
		filterModal: filterModalSlice,
		authSlice: authSlice,
	},
});
