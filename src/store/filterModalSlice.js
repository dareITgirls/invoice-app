import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    status: false,
    filters: []
}

const filterModalSlice = createSlice( {
    name: 'filterModal',
    initialState,
    reducers: {
        openFilterModal(state, action) {
            state.status = true
        },
        closeFilterModal(state, action) {
            state.status = false
        },
        filterChanged: {
            reducer(state, action) {
                let { filterType, changeType } = action.payload
                const { filters } = state
                switch (changeType) {
                    case 'added': {
                        if (!filters.includes(filterType)) {
                            filters.push(filterType)
                        }
                        break
                    }
                    case 'removed': {
                        state.filters = filters.filter(
                            (existingFilterType) => existingFilterType !== filterType
                        )
                    }
                    default:
                        return
                }
            },
            prepare(filterType, changeType) {
                return {
                    payload: { filterType, changeType },
                }
            },
        }
    }
});

export const {openFilterModal, closeFilterModal, filterChanged} = filterModalSlice.actions;

export default filterModalSlice.reducer