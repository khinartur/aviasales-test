import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@/components/Button/Button';

const stories = storiesOf('Кнопка', module);

const noop = () => console.log('button click');

stories.add('Primary', () => (
  <Button onClick={noop}>Показать еще 5 билетов!</Button>
));
