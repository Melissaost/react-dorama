import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  doramas: [],
  detalhe: {},
  loading: false,
};

export const counterSlice = createSlice({
  name: "doramas",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setDoramas: (state, action) => {
      state.doramas = action.payload;
    },
    setDetalhes: (state, action) => {
      state.detalhe = action.payload;
    },
  },
});

export const { setDoramas, setDetalhes, setLoading } = counterSlice.actions;

export default counterSlice.reducer;
