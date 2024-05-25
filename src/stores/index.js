import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import  trasnferPaySLice  from "./TransferPay/transferPaySlice";
// import transferPaySlice, { trasnferPaySLice } from "./TransferPay/transferPaySlice";

const reducers = combineReducers({
transferPay : trasnferPaySLice,
})

const store =   configureStore({
    reducer: reducers,
});

export {store};