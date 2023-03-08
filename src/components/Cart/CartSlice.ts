import Feature from '@/entitles/feature';
import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import type { RootState } from '../../../redux/store';

export type CartState = {
  cart: Feature[];
};

const initialState: CartState = {
  cart: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addFeature: (state, action: PayloadAction<Feature>) => {
      if (state.cart.find((feature) => feature.id === action.payload.id)) {
        return;
      }
      state.cart.push({...action.payload});
    },
    deleteFeature: (state, action) => {
      state.cart = state.cart.filter((feature) => feature.id !== action.payload);
    },
  },
});
export const {
  addFeature,
  deleteFeature,
} = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.cart;
export default cartSlice.reducer;