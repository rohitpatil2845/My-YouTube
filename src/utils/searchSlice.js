import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
    name:"search",
    initialState: {},
    reducers : {
        cacheResults:(state, action) => {
            // state = {...action.payload, ...state};
            state = Object.assign(state, action.payload);
        },
    },
});

export const {cacheResults} =SearchSlice.actions;
export default SearchSlice.reducer;