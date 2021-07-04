import { all, fork } from 'redux-saga/effects';
import { allSearchSagasWatcher } from '@/modules/search/search.sagas.watchers';
import { allTicketsSagasWatcher } from '@/modules/tickets/tickets.sagas.watchers';

export function* rootSaga(): any {
  yield all([fork(allSearchSagasWatcher), fork(allTicketsSagasWatcher)]);
}
