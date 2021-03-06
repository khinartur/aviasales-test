import React from 'react';
import styles from '@/App.scss';
import { applyMiddleware, createStore, Store } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from '@/reducer';
import { rootSaga } from '@/sagas';
import { initTicketsSearch } from '@/modules/search/search.actions';
import { Image } from '@/components/Image/Image';
import { TransferFilters } from '@/blocks/TransferFilters/TransferFilters';
import { TabsFilters } from '@/blocks/TabsFilters/TabsFilters';
import logoIcon from '@/static/icons/logo.svg';
import { TicketsList } from '@/blocks/TicketsList/TicketsList';

export class App extends React.Component {
  private readonly store: Store;

  constructor(props: Record<string, unknown>) {
    super(props);

    const sagaMiddleware = createSagaMiddleware();
    this.store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);

    this.store.dispatch(initTicketsSearch());
  }

  render() {
    return (
      <Provider store={this.store}>
        <div className={styles.app}>
          <div className={styles.header}>
            <Image src={logoIcon} />
          </div>
          <div className={styles.content}>
            <div className={styles.filters}>
              <TransferFilters />
            </div>
            <div className={styles.tickets}>
              <TabsFilters />
              <TicketsList />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}
