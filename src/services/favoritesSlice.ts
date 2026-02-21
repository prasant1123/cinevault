import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { DashboardData } from '../services/types';

interface FavoritesState {
  items: DashboardData[];
}

const initialState: FavoritesState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<DashboardData>) {
      const exists = state.items.some(i => i.id === action.payload.id);
      if (!exists) state.items.push(action.payload);
    },
    removeFavorite(state, action: PayloadAction<number>) {
      state.items = state.items.filter(i => i.id !== action.payload);
    },
    toggleFavorite(state, action: PayloadAction<DashboardData>) {
      const idx = state.items.findIndex(i => i.id === action.payload.id);
      if (idx >= 0) state.items.splice(idx, 1);
      else state.items.push(action.payload);
    },
    setFavorites(state, action: PayloadAction<DashboardData[]>) {
      state.items = action.payload;
    },
    clearFavorites(state) {
      state.items = [];
    },
  },
});
export const {
  addFavorite,
  removeFavorite,
  toggleFavorite,
  setFavorites,
  clearFavorites,
} = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;

export default favoritesReducer;
