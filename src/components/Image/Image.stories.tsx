import React from 'react';
import { storiesOf } from '@storybook/react';
import { Image } from '@/components/Image/Image';

const stories = storiesOf('Картинка', module);

stories.add('Логотип авиакомпании', () => (
  <Image src="https://pics.avs.io/99/36/S7.png" />
));
