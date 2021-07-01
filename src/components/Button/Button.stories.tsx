import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@/components/Button/Button';

const stories = storiesOf('Кнопка', module);

stories.add('Primary', () => <Button>Показать еще 5 билетов!</Button>);
