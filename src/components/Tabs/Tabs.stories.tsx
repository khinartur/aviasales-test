import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Tabs } from '@/components/Tabs/Tabs';

const stories = storiesOf('Табы', module);

stories.add('Билетные предложения', () => {
  const [activeTab, setActiveTab] = useState('');

  const onTabClick = (tab: string) => {
    if (tab === activeTab) {
      setActiveTab('');
      return;
    }

    setActiveTab(tab);
  };

  return (
    <Tabs
      tabs={[
        {
          label: 'Самый дешевый',
          value: 'cheapest',
          active: activeTab === 'cheapest',
        },
        {
          label: 'Самый быстрый',
          value: 'fastest',
          active: activeTab === 'fastest',
        },
        {
          label: 'Оптимальный',
          value: 'optimal',
          active: activeTab === 'optimal',
        },
      ]}
      onTabClick={onTabClick}
    />
  );
});
