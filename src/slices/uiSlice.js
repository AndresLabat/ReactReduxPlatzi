import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    searchTerm: '',
    typeSelected: '',
    showFavorites: false,
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
        toggleShowFavorites: (state) => {
            state.showFavorites = !state.showFavorites;
        },
    },
});

export const { setLoading, setSearchTerm, setTypeSelected, toggleShowFavorites } = uiSlice.actions;

export default uiSlice.reducer;