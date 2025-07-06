import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./features/authSlice";
import wishlistReducer from "./features/wishlistSlice";
const rootReducer = combineReducers({
  auth: authReducer,
  wishlist: wishlistReducer,
});
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "wishlist"], // only persist auth state
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
