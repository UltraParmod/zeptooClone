import { configureStore } from "@reduxjs/toolkit";
import CartReducar from "./CartSlice";

export const Store=configureStore({
    reducer:{
        Cart:CartReducar,
    }
})