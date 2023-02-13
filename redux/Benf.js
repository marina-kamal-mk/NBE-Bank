import { createSlice } from "@reduxjs/toolkit";

const benf = createSlice({
    name: 'benf',
    initialState: {benf: []},
    reducers:{
        setBenf: (state, action) => {state.benf = action.payload}
    }
});
export const { setBenf } = benf.actions;
export default benf.reducer;