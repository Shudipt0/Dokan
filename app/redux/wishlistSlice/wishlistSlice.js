import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: initialState,
  reducers: {
    // addToList
    addToList: (state, action) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex === -1) {
        state.items.push(action.payload);
      }
    },

    // remove from wishlist
    removeFromWishlist: (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload.id);
    },

    // clear all wish list
    clearWishlist : (state, action) => {
        state.items = [];
    }
  },
});

export const {addToList, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
