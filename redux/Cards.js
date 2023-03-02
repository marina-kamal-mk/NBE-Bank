import { createSlice } from "@reduxjs/toolkit";

const cards = createSlice({
    name: 'cards',
    initialState: {cards: false},
    reducers:{
        setCards: (state, action) => {state.cards = action.payload},
    }
});
export const { setCards } = cards.actions;
export default cards.reducer;