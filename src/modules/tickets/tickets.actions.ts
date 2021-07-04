import { ETicketsActions } from '@/modules/tickets/tickets.constants';
import { Ticket } from '@/interfaces/Ticket';

export const getTicketsBunch = () => ({
  type: ETicketsActions.GET_TICKETS_BUNCH,
});

export const getTicketsBunchSuccess = (payload: Ticket[]) => ({
  type: ETicketsActions.GET_TICKETS_BUNCH_SUCCESS,
  payload,
});
