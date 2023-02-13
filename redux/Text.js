import { createSlice } from "@reduxjs/toolkit";

const text = createSlice({
    name: 'text',
    initialState: {text: '-- Select Branch'},
    reducers:{
        setText: (state, action) => {state.text = action.payload}
    }
});
export const { setText } = text.actions;
export default text.reducer;