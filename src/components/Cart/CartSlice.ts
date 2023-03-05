import Feature from '@/entitles/feature';
import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import type { RootState } from '../../../store';

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
      state.cart.push({...action.payload});
     
    },
    deleteFeature: (state, action) => {
      state.cart.find((feature, index) => {
        if (feature.id === action.payload) {
          state.cart.splice(index, 1);
        }
      });
    },
  },
});
export const {
  addFeature,
  deleteFeature,
} = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.cart;
export default cartSlice.reducer;