import React from 'react';
import classnames from 'classnames';
import styles from '@/components/Tabs/Tabs.scss';
import { Text } from '@/components/Text/Text';

export interface Tab {
  label: string;
  value: string;
  active: boolean;
}

interface TabsProps {
  tabs: Tab[];
  onTabClick: (tab: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, onTabClick }) => {
  return (
    <div className={styles.wrapper}>
      {tabs.map((tab, idx) => (
        <div
          key={idx}
          className={classnames(styles.tab, { [styles.tabActive]: tab.active })}
          onClick={() => onTabClick(tab.value)}
        >
          <Text mode={tab.active ? 'contrast' : 'primary'} size="h4" uppercase>
            {tab.label}
          </Text>
        </div>
      ))}
    </div>
  );
};
