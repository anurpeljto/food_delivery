import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Restaurant } from '../constants'



export interface RestaurantState {
  restaurant: Restaurant | null;
}
const initialState: RestaurantState = {
  restaurant: null
}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action: PayloadAction<Restaurant>) => {
        state.restaurant = action.payload;
    }
  },
})

export const { setRestaurant } = restaurantSlice.actions;

export const selectRestaurant = (state: {restaurant: RestaurantState}) => state.restaurant.restaurant;

export default restaurantSlice.reducer