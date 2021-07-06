import { call, put } from 'redux-saga/effects';
import { setSearchId } from '@/modules/search/search.actions';
import { search, SearchResponseClient } from '@/api/endpoints/search';
import { getTicketsBunch } from '@/modules/tickets/tickets.actions';

export function* getSearchIdSaga(): Generator {
  const searchResponse = yield call(search);

  const { searchId } = searchResponse as SearchResponseClient;
  yield put(setSearchId(searchId));
  yield put(getTicketsBunch());
}
