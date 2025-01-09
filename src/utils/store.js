import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import SearchSlice from "./searchSlice";
import chatSlice from "./Chatslice"



const store = configureStore({
 reducer:{
    app: appSlice,
    search: SearchSlice,
    chat: chatSlice,
 },
});

export default store;