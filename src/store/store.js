import { configureStore } from '@reduxjs/toolkit';

import alertModalStatusSlice from './alertModalStatusSlice';
import authSlice from './authSlice';
import filterModalSlice from './filterModalSlice';
import invoicesSlice from './invoicesSlice';
import newFormModalStatusSlice from './newFormModalStatusSlice';

export const store = configureStore({
	reducer: {
		invoices: invoicesSlice,
		newFormModalStatus: newFormModalStatusSlice,
		alertModalStatus: alertModalStatusSlice,
		filterModal: filterModalSlice,
		authSlice: authSlice,
	},
});
