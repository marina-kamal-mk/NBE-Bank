import { createSlice } from "@reduxjs/toolkit";

const history = createSlice({
    name: 'history',
    initialState: {history: false, id: ''},
    reducers:{
        setHistory: (state, action) => {state.history = action.payload},
        setID: (state, action) => {state.id = action.payload}
    }
});
export const { setHistory, setID } = history.actions;
export default history.reducer;