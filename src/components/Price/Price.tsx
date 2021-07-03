import React from 'react';
import styles from '@/components/Price/Price.scss';

interface PriceProps {
  value: number;
}

export const Price: React.FC<PriceProps> = ({ value }) => {
  return <span className={styles.price}>{`${value} Р`}</span>;
};
