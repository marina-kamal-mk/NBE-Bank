import { createSlice } from "@reduxjs/toolkit";

const mobile = createSlice({
    name: 'mobile',
    initialState: {mobile: ''},
    reducers:{
        setMobile: (state, action) => {state.mobile = action.payload}
    }
});
export const { setMobile } = mobile.actions;
export default mobile.reducer;