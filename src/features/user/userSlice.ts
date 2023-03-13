import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk as createAsycnThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { initialState, User } from "../../model/User";

export const loginUser = createAsycnThunk("user/login", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.data);
});

const loginSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    reset: (state) => {
      state.user = initialState.user;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.user = undefined;
    });
    builder.addCase(
      loginUser.fulfilled,
      (state, action: PayloadAction<User>) => {
        console.log(`Data: ${action.payload}`);
        state.loading = false;
        state.user = action.payload;
        state.error = "";
      }
    );
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.user = undefined;
      state.error = action.error.message || "";
    });
  },
});

export default loginSlice.reducer;
export const { reset } = loginSlice.actions;
