import React from "react";
import {storiesOf} from '@storybook/react';
import {Text} from "@/components/Text/Text";

const stories = storiesOf('Текст', module);

stories.add('Варианты', () => (
  <div>
    <Text>
      Без пересадок
    </Text>
    <Text size="h4" uppercase>
      Количество пересадок
    </Text>
    <Text mode="secondary" size="small">
      MOW – HKT
    </Text>
  </div>
));
