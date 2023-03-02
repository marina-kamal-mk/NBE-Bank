import { createSlice } from "@reduxjs/toolkit";

const lang = createSlice({
    name: 'lang',
    initialState: {lang: true},
    reducers:{
        changeLang: (state, action) => {state.lang = action.payload},
    }
});
export const { changeLang } = lang.actions;
export default lang.reducer;