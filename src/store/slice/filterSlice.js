import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    activeFilter: 'all',
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,

    reducers: {
        setFilter: (state, action) => {
            state.activeFilter = action.payload;
        }
    }
})

export const {setFilter} = filterSlice.actions;

export default filterSlice.reducer;
