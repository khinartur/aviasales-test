import { AppStore } from '@/reducer';

export const selectSearchId = (state: AppStore) => state.searchReducer.searchId;
