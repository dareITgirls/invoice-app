import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

export const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        testAction: (state) => {

        }
    }
});

export const { testAction } = testSlice.actions;

export default testSlice.reducer;

