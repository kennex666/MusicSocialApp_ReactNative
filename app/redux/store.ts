import { configureStore } from "@reduxjs/toolkit";
import musicReducer from "./musicSlice";

const store = configureStore({
  reducer: {
    music: musicReducer,
  },
});

export default store;
