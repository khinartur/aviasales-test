import React from 'react';
import { storiesOf } from '@storybook/react';
import { Ticket } from '@/blocks/Ticket/Ticket';
import { Ticket as TicketEntity } from '@/interfaces/Ticket';

const stories = storiesOf('Билет', module);

const ticket: TicketEntity = {
  price: 90777,
  carrier: 'S7',
  segments: [
    {
      origin: 'MOW',
      destination: 'HKT',
      date: '2021-07-04T07:36:00.000Z',
      stops: ['SHA'],
      duration: 1099,
    },
    {
      origin: 'HKT',
      destination: 'MOW',
      date: '2021-07-24T08:56:00.000Z',
      stops: ['DXB'],
      duration: 654,
    },
  ],
};

stories.add('Карточка', () => {
  return <Ticket ticket={ticket} />;
});
