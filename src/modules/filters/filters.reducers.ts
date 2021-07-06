import { combineReducers, Reducer } from 'redux';
import { ETransferFilters } from '@/blocks/TransferFilters/TransferFilters';
import { ETabsFilters } from '@/blocks/TabsFilters/TabsFilters';
import { EFiltersActions } from '@/modules/filters/filters.constants';

interface FiltersState {
  transfers: Set<ETransferFilters>;
  mostRelevant: Nullable<ETabsFilters>;
}

const initialFiltersState: FiltersState = {
  transfers: new Set(),
  mostRelevant: null,
};

const filters: Reducer<FiltersState> = (
  state = initialFiltersState,
  action,
) => {
  switch (action.type) {
    case EFiltersActions.SET_TRANSFER_FILTERS: {
      return {
        ...state,
        transfers: action.payload,
      };
    }
    case EFiltersActions.SET_MOST_RELEVANT_FILTER: {
      return {
        ...state,
        mostRelevant: action.payload,
      };
    }
    default:
      return state;
  }
};

export const filtersReducer = combineReducers({
  filters,
});
