import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    name: 'Все',
    label: 'all',
    active: true,
  },
  {
    name: 'Без пересадок',
    label: 'transferZero',
    active: true,
  },
  {
    name: '1 пересадка',
    label: 'transferOne',
    active: true,
  },
  {
    name: '2 пересадки',
    label: 'transferTwo',
    active: true,
  },
  {
    name: '3 пересадки',
    label: 'transferThree',
    active: true,
  },
];

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleFilter(state, action) {
      if (action.payload === 'all') {
        const activeAll = !state[0].active;
        return state.map((e) => ({ ...e, active: activeAll }));
      } else {
        const res = state.map((e) =>
          e.label === action.payload ? { ...e, active: !e.active } : { ...e }
        );
        //уникальные значения в массиве. кроме 0 элемента
        const uniqStatus = Array.from(
          new Set(res.map((e) => e.active).splice(1, 4))
        );
        // на основе unieqStatus вычеслить новое значение для "Все"
        const newValueAll =
          uniqStatus.length === 2 ? false : uniqStatus[0] ? true : false;
        // изменть значение "Все" на правильное
        res[0] = { ...res[0], active: newValueAll };
        return res;
      }
    },
  },
});

export const { toggleFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
