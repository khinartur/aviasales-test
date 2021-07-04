import { ESearchActions } from '@/modules/search/search.constants';

export const initTicketsSearch = () => ({
  type: ESearchActions.INIT_TICKETS_SEARCH,
});

export const setSearchId = (payload: string) => ({
  type: ESearchActions.SET_SEARCH_ID,
  payload,
});
