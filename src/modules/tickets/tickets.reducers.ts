import { combineReducers, Reducer } from 'redux';
import { ETicketsActions } from '@/modules/tickets/tickets.constants';
import { Ticket } from '@/interfaces/Ticket';

const tickets: Reducer<Ticket[]> = (state = [], action) => {
  switch (action.type) {
    case ETicketsActions.GET_TICKETS_BUNCH_SUCCESS: {
      return state.concat(action.payload);
    }
    default:
      return state;
  }
};

export const ticketsReducer = combineReducers({
  tickets,
});
