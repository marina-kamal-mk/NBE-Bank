import { configureStore } from "@reduxjs/toolkit";
import Mobile from "./Mobile";
import User from "./User";
import Text from "./Text";
import History from "./History";
import Benf from "./Benf";

const store = configureStore({
    reducer:{
        Mobile: Mobile,
        User:User,
        Text: Text,
        History: History,
        Benf: Benf
    }
});
export default store;