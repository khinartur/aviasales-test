import { combineReducers } from 'redux';
import { searchReducer } from '@/modules/search/search.reducers';
import { ticketsReducer } from '@/modules/tickets/tickets.reducers';
import { filtersReducer } from '@/modules/filters/filters.reducers';

export const rootReducer = combineReducers({
  filtersReducer,
  searchReducer,
  ticketsReducer,
});

export interface AppStore extends ReturnType<typeof rootReducer> {}
