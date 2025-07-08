import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    // add to cart
    addToCart: (state, action) => {
      // if the product already exists in the cart
      const existingProductIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      // increment the quantity of the product
      if (existingProductIndex >= 0) {
        state.items[existingProductIndex].quantity += 1;
      } else {
        // add product to the cart
        state.items.push({ ...action.payload, quantity: 1 });
      }
      //calculate the total price
      state.total += action.payload.price;
    },

    // decrement the product
    decrement: (state, action) => {
      // if the product already exists in the cart
      const existingProductIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      // decrement the quantity of the product
      if (existingProductIndex >= 0) {
        // if the quantity of the product is 1, remove the product from the cart
        if (state.items[existingProductIndex].quantity === 1) {
          state.items.splice(existingProductIndex, 1);
        } else {
          // decrement the quantity of the product
          state.items[existingProductIndex].quantity -= 1;
        }
      }
      // calculate the total price based on the quantity of the product
      state.total -= action.payload.price;
    },

    // remove from cart
    
removeFromCart: (state, action) => {
  const existingProductIndex = state.items.findIndex(
    (item) => item.id === action.payload.id
  );

  if (existingProductIndex >= 0) {
    const product = state.items[existingProductIndex];
    const productTotal = product.price * product.quantity;

    // ✅ Subtract and ensure total never goes below 0
    const newTotal = state.total - productTotal;
    state.total = parseFloat(Math.max(newTotal, 0).toFixed(2));

    // ✅ Remove the item from the cart
    state.items.splice(existingProductIndex, 1);
  }
},
  },
});

export const { addToCart, decrement, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
