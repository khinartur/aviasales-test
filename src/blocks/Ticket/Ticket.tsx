import React from 'react';
import { Card } from '@/components/Card/Card';
import { Ticket as TicketEntity } from '@/interfaces/Ticket';
import { Header } from '@/blocks/Ticket/blocks/Header/Header';
import { Segments } from '@/blocks/Ticket/blocks/Segments/Segments';

interface TicketProps {
  ticket: TicketEntity;
}

export const Ticket: React.FC<TicketProps> = ({ ticket }) => {
  const { price, carrier, segments } = ticket;

  return (
    <Card>
      <Header price={price} carrier={carrier} />
      <Segments segments={segments} />
    </Card>
  );
};
