import { AppStore } from '@/reducer';

export const selectTickets = (state: AppStore) => state.ticketsReducer.tickets;
