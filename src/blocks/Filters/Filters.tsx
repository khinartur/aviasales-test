import React from 'react';
import styles from '@/blocks/Filters/Filters.scss';
import { Card } from '@/components/Card/Card';
import { Text } from '@/components/Text/Text';
import { Checkbox } from '@/components/Checkbox/Checkbox';

export const Filters: React.FC = () => {
  const onFilterChange = () => {
    console.log('on filter change');
  };

  return (
    <Card>
      <Text size="h4" uppercase>
        Количество пересадок
      </Text>
      <div className={styles.filters}>
        <Checkbox
          name="transfer"
          value="0"
          label="Все"
          checked={false}
          onChange={onFilterChange}
        />
        <Checkbox
          name="transfer"
          value="1"
          label="Без пересадок"
          checked={false}
          onChange={onFilterChange}
        />
        <Checkbox
          name="transfer"
          value="2"
          label="1 пересадка"
          checked={false}
          onChange={onFilterChange}
        />
        <Checkbox
          name="transfer"
          value="3"
          label="2 пересадки"
          checked={false}
          onChange={onFilterChange}
        />
        <Checkbox
          name="transfer"
          value="4"
          label="3 пересадки"
          checked={false}
          onChange={onFilterChange}
        />
      </div>
    </Card>
  );
};
