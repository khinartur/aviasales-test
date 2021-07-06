import React, { useEffect, useState } from 'react';
import styles from '@/blocks/TabsFilters/TabsFilters.scss';
import { Tabs } from '@/components/Tabs/Tabs';
import { useDispatch } from 'react-redux';
import { setMostRelevantFilter } from '@/modules/filters/filters.actions';

export enum ETabsFilters {
  cheapest = 'cheapest',
  fastest = 'fastest',
  optimal = 'optimal',
}

export const TabsFilters: React.FC = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState<Nullable<ETabsFilters>>(null);

  useEffect(() => {
    dispatch(setMostRelevantFilter(activeTab));
  }, [activeTab]);

  const onTabClick = (tab: string) => {
    if (tab === activeTab) {
      setActiveTab(null);
      return;
    }

    setActiveTab(tab as ETabsFilters);
  };

  return (
    <Tabs
      tabs={[
        {
          label: 'Самый дешевый',
          value: ETabsFilters.cheapest,
          active: activeTab === ETabsFilters.cheapest,
        },
        {
          label: 'Самый быстрый',
          value: ETabsFilters.fastest,
          active: activeTab === ETabsFilters.fastest,
        },
        {
          label: 'Оптимальный',
          value: ETabsFilters.optimal,
          active: activeTab === ETabsFilters.optimal,
        },
      ]}
      onTabClick={onTabClick}
    />
  );
};
