import { combineReducers } from 'redux';
import { searchReducer } from '@/modules/search/search.reducers';
import { ticketsReducer } from '@/modules/tickets/tickets.reducers';

export const rootReducer = combineReducers({ searchReducer, ticketsReducer });

export interface AppStore extends ReturnType<typeof rootReducer> {}
