import React, { useEffect, useState } from 'react';
import styles from '@/blocks/TransferFilters/TransferFilters.scss';
import { Card } from '@/components/Card/Card';
import { Text } from '@/components/Text/Text';
import { Checkbox } from '@/components/Checkbox/Checkbox';
import { useDispatch } from 'react-redux';
import { setTransferFilters } from '@/modules/filters/filters.actions';

export enum ETransferFilters {
  all = 'all',
  none = '0',
  one = '1',
  two = '2',
  three = '3',
}

export const TransferFilters: React.FC = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState<Set<ETransferFilters>>(new Set());

  useEffect(() => {
    dispatch(setTransferFilters(filters));
  }, [filters]);

  const onFilterChange = (filter: ETransferFilters) => (checked: boolean) => {
    if (checked) {
      setFilters((filters) => new Set(filters.add(filter)));
    } else {
      setFilters((filters) => {
        filters.delete(filter);
        return new Set(filters);
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      <Card>
        <Text size="h4" uppercase>
          Количество пересадок
        </Text>
        <div className={styles.filters}>
          <Checkbox
            name="transfer"
            value={ETransferFilters.all}
            label="Все"
            checked={filters.has(ETransferFilters.all)}
            onChange={onFilterChange(ETransferFilters.all)}
          />
          <Checkbox
            name="transfer"
            value={ETransferFilters.none}
            label="Без пересадок"
            checked={filters.has(ETransferFilters.none)}
            onChange={onFilterChange(ETransferFilters.none)}
          />
          <Checkbox
            name="transfer"
            value={ETransferFilters.one}
            label="1 пересадка"
            checked={filters.has(ETransferFilters.one)}
            onChange={onFilterChange(ETransferFilters.one)}
          />
          <Checkbox
            name="transfer"
            value={ETransferFilters.two}
            label="2 пересадки"
            checked={filters.has(ETransferFilters.two)}
            onChange={onFilterChange(ETransferFilters.two)}
          />
          <Checkbox
            name="transfer"
            value={ETransferFilters.three}
            label="3 пересадки"
            checked={filters.has(ETransferFilters.three)}
            onChange={onFilterChange(ETransferFilters.three)}
          />
        </div>
      </Card>
    </div>
  );
};
