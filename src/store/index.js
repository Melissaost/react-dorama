import { configureStore } from "@reduxjs/toolkit";
import doramaReducer from './slices/dorama/reducer'

export const store = configureStore({
  reducer: {
    dorama: doramaReducer
  },
});
