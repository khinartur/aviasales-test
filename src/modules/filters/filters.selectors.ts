import { AppStore } from '@/reducer';

export const selectFilters = (state: AppStore) => state.filtersReducer.filters;
