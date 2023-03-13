import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/user/userSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatcher = typeof store.dispatch;
