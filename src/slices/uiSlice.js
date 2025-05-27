import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    searchTerm: '',
    typeSelected: '',
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
        setTypeSelected: (state, action) => {
            state.typeSelected = action.payload;
        },
    },
});

export const { setLoading, setSearchTerm, setTypeSelected } = uiSlice.actions;

export default uiSlice.reducer;