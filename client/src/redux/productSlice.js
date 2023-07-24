import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  productList: [],
  cartItem: [],
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductData: (state, action) => {
      // console.log(action);
      state.productList = [...action.payload];
    },
    addCartItem: (state, action) => {
      const check = state.cartItem.some(
        (product) => product.productId === action.payload.productId
      );
      if (check) {
        toast("Item already in cart.");
      } else {
        toast("Added to cart.");
        const total =
          parseInt(action.payload.basePrice) +
          parseInt(action.payload.extraPrice);
        state.cartItem = [
          ...state.cartItem,
          { ...action.payload, qty: 1, total: total },
        ];
      }
    },
    deleteCartItem: (state, action) => {
      toast("1 Item Removed.");
      const productIndex = state.cartItem.findIndex(
        (product) => product.productId === action.payload
      );
      state.cartItem.splice(productIndex, 1);
    },
    increaseQty: (state, action) => {
      const productIndex = state.cartItem.findIndex(
        (product) => product.productId === action.payload
      );
      let qty = state.cartItem[productIndex].qty;
      const qtyInc = ++qty;
      state.cartItem[productIndex].qty = qtyInc;

      const price =
        parseInt(state.cartItem[productIndex].basePrice) +
        parseInt(state.cartItem[productIndex].extraPrice);
      const total = qtyInc * price;
      state.cartItem[productIndex].total = total;
    },
    decreaseQty: (state, action) => {
      const productIndex = state.cartItem.findIndex(
        (product) => product.productId === action.payload
      );
      let qty = state.cartItem[productIndex].qty;
      if (qty > 1) {
        const qtyDec = --qty;
        state.cartItem[productIndex].qty = qtyDec;

        const price =
          parseInt(state.cartItem[productIndex].basePrice) +
          parseInt(state.cartItem[productIndex].extraPrice);
        const total = qtyDec * price;
        state.cartItem[productIndex].total = total;
      }
    },
    emptyCart: (state,action) => {
      state.cartItem = [];
    }
  },
});

export const {
  setProductData,
  addCartItem,
  deleteCartItem,
  increaseQty,
  decreaseQty,
  emptyCart
} = productSlice.actions;
export default productSlice.reducer;
