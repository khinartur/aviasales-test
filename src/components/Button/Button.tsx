import React from 'react';
import styles from '@/components/Button/Button.scss';

interface ButtonProps {
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};
