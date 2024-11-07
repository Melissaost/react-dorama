import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resenhas: [],
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
    }
  },
});

export const { setResenhas, setLoading } = counterSlice.actions;

export default counterSlice.reducer;