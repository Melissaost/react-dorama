import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  generos: [],
  loading: false,
};

export const counterSlice = createSlice({
  name: "generos",
  initialState,
  reducers: {
    setGeneros: (state, action) => {
      state.generos = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  },
});

export const { setGeneros, setLoading } = counterSlice.actions;

export default counterSlice.reducer;