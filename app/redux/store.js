import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./cartslice/cartSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import wishlistSlice from './wishlistSlice/wishlistSlice'

// configure persist
const persistConfig = {
  key: "root", // key for storage
  version: 1,
  storage, // local storage
};

// combine reducers
const rootReducers = combineReducers({
  cart: cartSlice,
  wishlist: wishlistSlice,
});

// persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducer,
  // middlewire
  middleware: (getDefaultMiddlewire) =>
    getDefaultMiddlewire({
      serializableCheck: false, // ignore non-serializable values
    }),
});

// persistor
export const persistor = persistStore(store);
export default store;

// const store = configureStore({
//   reducer: {
//     cart: cartSlice
//   }
// })

