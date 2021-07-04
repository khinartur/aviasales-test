import { all, fork, takeEvery } from 'redux-saga/effects';

import { ESearchActions } from '@/modules/search/search.constants';
import { getSearchIdSaga } from '@/modules/search/search.sagas';

function* initTicketsSearchSagaWatcher() {
  yield takeEvery(ESearchActions.INIT_TICKETS_SEARCH, getSearchIdSaga);
}

export function* allSearchSagasWatcher() {
  yield all([fork(initTicketsSearchSagaWatcher)]);
}
