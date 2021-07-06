import React from 'react';
import { storiesOf } from '@storybook/react';
import { TransferFilters } from '@/blocks/TransferFilters/TransferFilters';

const stories = storiesOf('Фильтры', module);

stories.add('Блок', () => {
  return <TransferFilters />;
});
