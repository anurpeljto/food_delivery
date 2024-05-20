import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store/store';

export interface Item {
    id: number;
    name: string;
    price: number;
    description: string;
    quantity: number
}

export interface CartState {
  items: Item[];
};

const initialState: CartState = {
    items: [],
};


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Item>) => {
        const existingItem = state.items.find(item => item.id === action.payload.id);
        if (existingItem) {
          existingItem.quantity += action.payload.quantity;
        } else {
          state.items.push(action.payload);
        }
      },
      removeFromCart: (state, action: PayloadAction<{id: number}>) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      },
      emptyCart: (state) => {
        state.items = [];
      },
  },
})

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartItemByID = (state: RootState,id: number) => state.cart.items.filter(item => item.id == id);

export const selectCartTotal = (state: RootState) => state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

export default cartSlice.reducer