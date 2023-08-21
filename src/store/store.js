import { combineReducers, configureStore } from '@reduxjs/toolkit';
import filterReducer from './filters/filters.slice';
import ticketsReducer from './tickets/tickets.slice';

const comdR = combineReducers({
  filter: filterReducer,
  tickets: ticketsReducer,
});

export const store = configureStore({
  reducer: comdR,
});
