import React from 'react';
import styles from '@/components/Card/Card.scss';

export const Card: React.FC = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};
