import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../redux/slices/cartSlice";

const store = configureStore({
  reducer: {
    cart: cardSlice,
  },
});

export default store;
