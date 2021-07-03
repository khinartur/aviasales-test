import React from 'react';
import { storiesOf } from '@storybook/react';
import { Price } from '@/components/Price/Price';

const stories = storiesOf('Цена', module);

stories.add('Main', () => <Price value={13400} />);
