import React from 'react';
import { storiesOf } from '@storybook/react';
import { Info } from '@/components/Info/Info';

const stories = storiesOf('Блок информации', module);

stories.add('Время в пути', () => <Info caption="В пути" content="21ч 15м" />);
