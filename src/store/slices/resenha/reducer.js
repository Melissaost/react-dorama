import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resenhas: [],
  detalhe: {},
  loading: false,
};

export const counterSlice = createSlice({
  name: "resenhas",
  initialState,
  reducers: {
    setResenhas: (state, action) => {
      state.resenhas = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setDetalhes: (state, action) => {
      state.detalhe = action.payload;
    },
  },
});

export const { setResenhas, setLoading, setDetalhes } = counterSlice.actions;

export default counterSlice.reducer;