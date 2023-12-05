import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
};

const BasketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    handleBasket: (state, actions) => {
      if (state.basket.some((x) => x.products.id === actions.payload.id)) {
        state.basket.forEach((elem) => {
          if (elem.products.id === actions.payload.id) {
            elem.count += 1;
          }
        });
      } else {
        state.basket.push({ count: 1, products: actions.payload });
      }

      localStorage.setItem("basket", JSON.stringify(state.basket));
    },

    handleMinus: (state, actions) => {
      console.log("Handling Minus");

      const existingItem = state.basket.find(
        (item) => item.products.id === actions.payload.products.id
      );

      if (existingItem && existingItem.count > 1) {
        existingItem.count -= 1;
      } else {
        // Remove the item from the basket if count is 1 or less
        state.basket = state.basket.filter(
          (item) => item.products.id !== actions.payload.products.id
        );
      }

      localStorage.setItem("basket", JSON.stringify(state.basket));
      
    },

    handlePlus: (state, actions) => {
      console.log("Handling Plus");

      const existingItem = state.basket.find(
        (item) => item.products.id === actions.payload.products.id
      );

      if (existingItem) {
        existingItem.count += 1;

      }

      

      localStorage.setItem("basket", JSON.stringify(state.basket));
      

    },
  },
});

export const { handleBasket, handleMinus, handlePlus } = BasketSlice.actions;

export default BasketSlice.reducer;
