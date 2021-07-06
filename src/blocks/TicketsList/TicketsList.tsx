import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import styles from '@/blocks/TicketsList/TicketsList.scss';
import { AppStore } from '@/reducer';
import { Ticket } from '@/blocks/Ticket/Ticket';
import { selectTickets } from '@/modules/tickets/tickets.selectors';
import { selectFilters } from '@/modules/filters/filters.selectors';
import { ETabsFilters } from '@/blocks/TabsFilters/TabsFilters';
import { Ticket as TicketEntity } from '@/interfaces/Ticket';
import { Button } from '@/components/Button/Button';
import { ETransferFilters } from '@/blocks/TransferFilters/TransferFilters';

const selectTicketsWithFilters = createSelector(
  selectTickets,
  selectFilters,
  (tickets, filters) => {
    const { transfers, mostRelevant } = filters;

    if (mostRelevant) {
      if (mostRelevant) {
        let relevantResult: TicketEntity;
        switch (mostRelevant) {
          case ETabsFilters.cheapest:
            relevantResult = tickets.reduce((acc, ticket) => {
              if (ticket.price < acc.price) {
                return ticket;
              }

              return acc;
            });
            return [relevantResult];
          case ETabsFilters.fastest:
            relevantResult = tickets.reduce((acc, ticket) => {
              const ticketDuration = ticket.segments.reduce(
                (acc, s) => acc + s.duration,
                0,
              );
              const accDuration = acc.segments.reduce(
                (acc, s) => acc + s.duration,
                0,
              );

              if (ticketDuration < accDuration) {
                return ticket;
              }

              return acc;
            });
            return [relevantResult];
          case ETabsFilters.optimal:
            return [tickets[0]];
        }
      }
    }

    if (transfers.size === 0 || transfers.has(ETransferFilters.all)) {
      return tickets;
    }

    let filteredTickets: TicketEntity[] = [];

    if (transfers.has(ETransferFilters.none)) {
      filteredTickets = filteredTickets.concat(
        ...tickets.filter(
          (t) =>
            t.segments[0].stops.length === 0 &&
            t.segments[1].stops.length === 0,
        ),
      );
    }

    if (transfers.has(ETransferFilters.one)) {
      filteredTickets = filteredTickets.concat(
        ...tickets.filter(
          (t) =>
            t.segments[0].stops.length <= 1 && t.segments[1].stops.length <= 1,
        ),
      );
    }

    if (transfers.has(ETransferFilters.two)) {
      filteredTickets = filteredTickets.concat(
        ...tickets.filter(
          (t) =>
            t.segments[0].stops.length <= 2 && t.segments[1].stops.length <= 2,
        ),
      );
    }

    if (transfers.has(ETransferFilters.three)) {
      filteredTickets = filteredTickets.concat(
        ...tickets.filter(
          (t) =>
            t.segments[0].stops.length <= 3 && t.segments[1].stops.length <= 3,
        ),
      );
    }

    return filteredTickets;
  },
);

const TICKETS_COUNT_LIMIT = 5;

export const TicketsList: React.FC = () => {
  const [limit, setLimit] = useState(TICKETS_COUNT_LIMIT);

  const filteredTickets = useSelector<AppStore, TicketEntity[]>((store) =>
    selectTicketsWithFilters(store),
  );

  const onShowMoreTickets = () => {
    setLimit((prevLimit) => prevLimit + TICKETS_COUNT_LIMIT);
  };

  const showMoreTicketsButton = filteredTickets.length > limit;

  return (
    <div className={styles.wrapper}>
      {filteredTickets.slice(0, limit).map((ticket, idx) => (
        <Ticket key={idx} ticket={ticket} />
      ))}
      {showMoreTicketsButton && (
        <Button onClick={onShowMoreTickets}>Показать еще 5 билетов!</Button>
      )}
    </div>
  );
};
