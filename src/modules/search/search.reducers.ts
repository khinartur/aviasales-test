import { combineReducers, Reducer } from 'redux';
import { ESearchActions } from '@/modules/search/search.constants';

const searchId: Reducer<Nullable<string>> = (state = null, action) => {
  switch (action.type) {
    case ESearchActions.SET_SEARCH_ID: {
      return action.payload;
    }
    default:
      return state;
  }
};

export const searchReducer = combineReducers({
  searchId,
});
