import { call, select, put } from 'redux-saga/effects';
import { tickets, TicketsResponseClient } from '@/api/endpoints/tickets';
import { selectSearchId } from '@/modules/search/search.selectors';
import { getTicketsBunchSuccess } from '@/modules/tickets/tickets.actions';

export function* getTicketsBunch() {
  // @ts-ignore
  const searchId = yield select(selectSearchId);
  // @ts-ignore
  const ticketsResponse = yield call(tickets, { searchId });

  // if ('error' in searchResponse) {
  //   yield put(searchError());
  //   return;
  // }

  const { tickets: responseTickets } = ticketsResponse as TicketsResponseClient;
  yield put(getTicketsBunchSuccess(responseTickets));
}
