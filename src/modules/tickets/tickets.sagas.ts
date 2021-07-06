import { call, select, put } from 'redux-saga/effects';
import {
  tickets,
  TicketsRequestParams,
  TicketsResponseClient,
} from '@/api/endpoints/tickets';
import { selectSearchId } from '@/modules/search/search.selectors';
import { getTicketsBunchSuccess } from '@/modules/tickets/tickets.actions';
import { ApiResponse } from '@/api';

export function* getTicketsBunch(): Generator {
  const searchId = yield select(selectSearchId);
  const ticketsResponse = yield call<
    (
      params: TicketsRequestParams,
    ) => Promise<ApiResponse<TicketsResponseClient>>
  >(tickets, { searchId: searchId as string });

  const { tickets: responseTickets } = ticketsResponse as TicketsResponseClient;
  yield put(getTicketsBunchSuccess(responseTickets));
}
