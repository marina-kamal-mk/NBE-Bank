import { configureStore } from "@reduxjs/toolkit";
import Mobile from "./Mobile";
import User from "./User";
import Text from "./Text";
import History from "./History";
import Benf from "./Benf";
import DarkMode from "./DarkMode";
import Cards from "./Cards";
import Lang from "./Lang";
const store = configureStore({
    reducer:{
        Mobile: Mobile,
        User:User,
        Text: Text,
        History: History,
        Benf: Benf,
        DarkMode: DarkMode,
        Cards: Cards,
        Lang:Lang
    }
});
export default store;