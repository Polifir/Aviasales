import { combineReducers, configureStore } from '@reduxjs/toolkit';
import filterReducer from './filters/filters.slice';
import filterPrimaryReducer from './filtersPrimary/filtersPrimary.slice';
import ticketsReducer from './tickets/tickets.slice';

const comdR = combineReducers({
  filter: filterReducer,
  tickets: ticketsReducer,
  filterPrimary: filterPrimaryReducer,
});

export const store = configureStore({
  reducer: comdR,
});
