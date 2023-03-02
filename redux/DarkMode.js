import { createSlice } from "@reduxjs/toolkit";

const darkMode = createSlice({
    name: 'darkMode',
    initialState: {darkMode: false},
    reducers:{
        setDarkMode: (state, action) => {state.darkMode = action.payload},
    }
});
export const { setDarkMode } = darkMode.actions;
export default darkMode.reducer;