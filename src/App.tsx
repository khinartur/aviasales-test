import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { AppStore, rootReducer } from '@/reducer';
import { rootSaga } from '@/sagas';
import { initTicketsSearch } from '@/modules/search/search.actions';

export class App extends React.Component {
  private readonly store: AppStore;

  constructor(props: Record<string, unknown>) {
    super(props);

    const sagaMiddleware = createSagaMiddleware();
    // @ts-ignore
    this.store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);

    // @ts-ignore
    this.store.dispatch(initTicketsSearch());
  }

  render() {
    return null;
  }
}
