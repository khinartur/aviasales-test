import { AppStore } from '@/reducer';

export const selectSearchId = (state: AppStore): Nullable<string> =>
  state.searchReducer.searchId;
