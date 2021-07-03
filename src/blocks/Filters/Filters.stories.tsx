import React from 'react';
import { storiesOf } from '@storybook/react';
import { Filters } from '@/blocks/Filters/Filters';

const stories = storiesOf('Фильтры', module);

stories.add('Блок', () => {
  return <Filters />;
});
