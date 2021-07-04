import { all, fork, takeEvery } from 'redux-saga/effects';
import { ETicketsActions } from '@/modules/tickets/tickets.constants';
import { getTicketsBunch } from '@/modules/tickets/tickets.sagas';

function* getTicketsBunchSagaWatcher() {
  yield takeEvery(ETicketsActions.GET_TICKETS_BUNCH, getTicketsBunch);
}

export function* allTicketsSagasWatcher() {
  yield all([fork(getTicketsBunchSagaWatcher)]);
}
