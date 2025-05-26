import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    searchTerm: '',
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
    },
});

export const { setLoading, setSearchTerm } = uiSlice.actions;

export default uiSlice.reducer;