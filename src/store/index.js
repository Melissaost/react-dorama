import { configureStore } from "@reduxjs/toolkit";
import doramaReducer from './slices/dorama/reducer'
import generosReducer from './slices/genero/reducer'

export const store = configureStore({
  reducer: {
    dorama: doramaReducer,
    genero: generosReducer
  },
});
