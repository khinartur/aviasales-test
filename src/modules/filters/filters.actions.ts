import { ETransferFilters } from '@/blocks/TransferFilters/TransferFilters';
import { EFiltersActions } from '@/modules/filters/filters.constants';
import { ETabsFilters } from '@/blocks/TabsFilters/TabsFilters';

export const setTransferFilters = (payload: Set<ETransferFilters>) => ({
  type: EFiltersActions.SET_TRANSFER_FILTERS,
  payload,
});

export const setMostRelevantFilter = (payload: Nullable<ETabsFilters>) => ({
  type: EFiltersActions.SET_MOST_RELEVANT_FILTER,
  payload,
});
