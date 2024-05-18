import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store/store';

export interface Item {
    id: number;
    name: string;
    price: number;
    description: string;
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
        state.items = [...state.items, action.payload]
    },

    removeFromCart: (state, action: PayloadAction<{id: number}>) => {
        let newCart = [...state.items];
        let itemIndex = state.items.findIndex(item => item.id == action.payload.id);
        if(itemIndex >= 0){
            newCart.splice(itemIndex,1);
        }
        else {
            console.log("Can't remove item that is not added to the cart");
        }

        state.items = newCart;
    },

    emptyCart: (state, action) => {
        state.items = [];
    },
  },
})

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartItemByID = (state: RootState,id: number) => state.cart.items.filter(item => item.id == id);

export const selectCartTotal = (state: RootState) => state.cart.items.reduce((total, item) => total += item.price, 0);

export default cartSlice.reducer