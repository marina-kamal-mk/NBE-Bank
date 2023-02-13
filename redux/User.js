import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: 'user',
    initialState: {currentUser: ''},
    reducers:{
        setUser: (state, action) => {state.currentUser = action.payload}
    }
});
export const { setUser } = user.actions;
export default user.reducer;