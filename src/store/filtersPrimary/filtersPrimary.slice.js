import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    idx: 0,
    name: 'Самый дешёвый',
    label: 'free',
    active: true,
  },
  {
    idx: 1,
    name: 'Самый быстрый',
    label: 'fast',
    active: false,
  },
  {
    idx: 2,
    name: 'Оптимальные',
    label: 'Optimal',
    active: false,
  },
];

export const filtersPrimarySlice = createSlice({
  name: 'filtersPrimary',
  initialState,
  reducers: {
    toggleFilterPrimary(state, action) {
      return state.map((e) =>
        e.idx === action.payload
          ? { ...e, active: true }
          : { ...e, active: false }
      );
    },
  },
});

export const { toggleFilterPrimary } = filtersPrimarySlice.actions;

export default filtersPrimarySlice.reducer;
