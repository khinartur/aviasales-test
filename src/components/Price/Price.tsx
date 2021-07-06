import React from 'react';
import styles from '@/components/Price/Price.scss';
import { beautifyPrice } from '@/utils/price';

interface PriceProps {
  value: number;
}

export const Price: React.FC<PriceProps> = ({ value }) => {
  return <span className={styles.price}>{`${beautifyPrice(value)} Р`}</span>;
};
